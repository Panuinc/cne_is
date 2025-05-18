import prisma from "@/lib/prisma";
import { getLocalNow } from "@/lib/getLocalNow";

const formatDateOnly = (dateInput) => {
  if (!dateInput) return null;
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};

export class EmpCvService {
  static async getEmpCvById(empCvId) {
    return prisma.empCv.findUnique({
      where: { empCvId },
      include: {
        EmpCvEmpBy: true,
        empCvEducation: true,
        empCvLicense: true,
        empCvWorkHistory: {
          include: {
            empCvProjects: true,
          },
        },
        empCvLanguageSkill: true,
        EmpCvCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpCvUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }

  static async updateEmpCv(empCvId, data) {
    const now = getLocalNow();

    const formatFields = [
      "empCvStartWork",
      "empCvPassportStartDate",
      "empCvPassportEndDate",
      "empCvEnterDate",
      "empCvWorkPermitStartDate",
      "empCvWorkPermitEndDate",
    ];
    formatFields.forEach((field) => {
      if (data[field]) data[field] = formatDateOnly(data[field]);
    });

    const {
      empCvEducations = [],
      empCvLicenses = [],
      empCvWorkHistories = [],
      empCvLanguageSkills = [],
      empCvUpdateBy,
      ...empCvData
    } = data;

    const existing = await prisma.empCv.findUnique({
      where: { empCvId },
      include: {
        empCvEducation: { select: { empCvEducationId: true } },
        empCvLicense: { select: { empCvLicenseId: true } },
        empCvLanguageSkill: { select: { empCvLanguageSkillId: true } },
        empCvWorkHistory: {
          select: {
            empCvWorkHistoryId: true,
            empCvProjects: { select: { empCvProjectId: true } },
          },
        },
      },
    });

    const extractIds = (arr, key) => arr.map((x) => x[key]);
    const findDeleted = (existingIds, incoming, key) =>
      existingIds
        .filter((id) => !incoming.some((x) => x[key] === id))
        .map((id) => ({ [key]: id }));

    const deleteEducations = findDeleted(
      extractIds(existing.empCvEducation, "empCvEducationId"),
      empCvEducations,
      "empCvEducationId"
    );

    const deleteLicenses = findDeleted(
      extractIds(existing.empCvLicense, "empCvLicenseId"),
      empCvLicenses,
      "empCvLicenseId"
    );

    const deleteLanguageSkills = findDeleted(
      extractIds(existing.empCvLanguageSkill, "empCvLanguageSkillId"),
      empCvLanguageSkills,
      "empCvLanguageSkillId"
    );

    const deleteWorkHistories = findDeleted(
      extractIds(existing.empCvWorkHistory, "empCvWorkHistoryId"),
      empCvWorkHistories,
      "empCvWorkHistoryId"
    );

    const deleteProjectsByWorkHistory = existing.empCvWorkHistory.map((wh) => {
      const incomingWh = empCvWorkHistories.find(
        (i) => i.empCvWorkHistoryId === wh.empCvWorkHistoryId
      );
      const deleteProjects = findDeleted(
        extractIds(wh.empCvProjects, "empCvProjectId"),
        incomingWh?.empCvProjects || [],
        "empCvProjectId"
      );
      return {
        empCvWorkHistoryId: wh.empCvWorkHistoryId,
        delete: deleteProjects,
      };
    });

    const formatDateOnlyField = (obj, field) => {
      const dateFields = [
        "empCvEducationStartDate",
        "empCvEducationEndDate",
        "empCvLicenseStartDate",
        "empCvLicenseEndDate",
        "empCvWorkHistoryStartDate",
        "empCvWorkHistoryEndDate",
      ];
      const val = obj[field];
      return dateFields.includes(field) ? formatDateOnly(val) : val;
    };

    const prepare = (list, key, fields) => {
      const updates = list
        .filter((e) => e[key])
        .map((e) => ({
          where: { [key]: e[key] },
          data: fields.reduce((obj, field) => {
            obj[field] = formatDateOnlyField(e, field);
            return obj;
          }, {}),
        }));
      const creates = list
        .filter((e) => !e[key])
        .map((e) =>
          fields.reduce((obj, field) => {
            obj[field] = formatDateOnlyField(e, field);
            return obj;
          }, {})
        );
      return { updates, creates };
    };

    const { updates: updateEducations, creates: createEducations } = prepare(
      empCvEducations,
      "empCvEducationId",
      [
        "empCvEducationDegreeTH",
        "empCvEducationDegreeEN",
        "empCvEducationInstitutionTH",
        "empCvEducationInstitutionEN",
        "empCvEducationStartDate",
        "empCvEducationEndDate",
      ]
    );

    const { updates: updateLicenses, creates: createLicenses } = prepare(
      empCvLicenses,
      "empCvLicenseId",
      [
        "empCvLicenseNameTH",
        "empCvLicenseNameEN",
        "empCvLicenseNumber",
        "empCvLicenseStartDate",
        "empCvLicenseEndDate",
      ]
    );

    const { updates: updateLanguageSkills, creates: createLanguageSkills } =
      prepare(empCvLanguageSkills, "empCvLanguageSkillId", [
        "empCvLanguageSkillNameTH",
        "empCvLanguageSkillNameEN",
        "empCvLanguageSkillProficiency",
      ]);

    const workHistoryFields = [
      "empCvWorkHistoryCompanyNameTH",
      "empCvWorkHistoryCompanyNameEN",
      "empCvWorkHistoryPositionTH",
      "empCvWorkHistoryPositionEN",
      "empCvWorkHistoryStartDate",
      "empCvWorkHistoryEndDate",
    ];

    const projectFields = [
      "empCvProjectNameTH",
      "empCvProjectNameEN",
      "empCvProjectDescriptionTH",
      "empCvProjectDescriptionEN",
    ];

    const updateWorkHistories = empCvWorkHistories
      .filter((wh) => wh.empCvWorkHistoryId)
      .map((wh) => {
        const { empCvProjects = [], ...whData } = wh;
        const { updates, creates } = prepare(
          empCvProjects,
          "empCvProjectId",
          projectFields
        );
        const projectDelete = deleteProjectsByWorkHistory.find(
          (d) => d.empCvWorkHistoryId === wh.empCvWorkHistoryId
        );
        return {
          where: { empCvWorkHistoryId: wh.empCvWorkHistoryId },
          data: {
            ...Object.fromEntries(
              workHistoryFields.map((f) => [f, formatDateOnlyField(whData, f)])
            ),
            empCvProjects: {
              delete: projectDelete?.delete || [],
              update: updates,
              create: creates,
            },
          },
        };
      });

    const createWorkHistories = empCvWorkHistories
      .filter((wh) => !wh.empCvWorkHistoryId)
      .map((wh) => {
        const { empCvProjects = [], ...whData } = wh;
        const { creates } = prepare(
          empCvProjects,
          "empCvProjectId",
          projectFields
        );
        return {
          ...Object.fromEntries(
            workHistoryFields.map((f) => [f, formatDateOnlyField(whData, f)])
          ),
          empCvProjects: {
            create: creates,
          },
        };
      });

    return prisma.empCv.update({
      where: { empCvId },
      data: {
        ...empCvData,
        empCvUpdateAt: now,
        empCvUpdateBy,
        empCvEducation: {
          delete: deleteEducations,
          update: updateEducations,
          create: createEducations,
        },
        empCvLicense: {
          delete: deleteLicenses,
          update: updateLicenses,
          create: createLicenses,
        },
        empCvWorkHistory: {
          delete: deleteWorkHistories,
          update: updateWorkHistories,
          create: createWorkHistories,
        },
        empCvLanguageSkill: {
          delete: deleteLanguageSkills,
          update: updateLanguageSkills,
          create: createLanguageSkills,
        },
      },
    });
  }
}
