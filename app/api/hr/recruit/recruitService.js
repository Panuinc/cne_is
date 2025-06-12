import prisma from "@/lib/prisma";
import { customAlphabet } from "nanoid";
import { getLocalNow } from "@/lib/getLocalNow";

const formatDateOnly = (dateInput) => {
  if (!dateInput) return null;
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};

const applyDateFormatting = (detail) => {
  if (!detail) return;
  detail.recruitDetailBirthDay = formatDateOnly(detail.recruitDetailBirthDay);
  detail.recruitDetailIdCardIssuedDate = formatDateOnly(
    detail.recruitDetailIdCardIssuedDate
  );
  detail.recruitDetailIdCardEndDate = formatDateOnly(
    detail.recruitDetailIdCardEndDate
  );
};

export class RecruitService {
  static getAllRecruit() {
    return prisma.recruit.findMany({
      include: {
        recruitPerReq: {
          select: {
            perReqDocumentId: true,
            perReqStatus: true,
            PerReqPositionId: {
              select: {
                positionNameTH: true,
              },
            },
          },
        },
        recruitDetail: true,
        recruitFamilyMembers: true,
        recruitEmergencyContacts: true,
        recruitEducations: true,
        recruitProfessionalLicenses: true,
        recruitLanguageSkills: true,
        recruitOtherSkills: true,
        recruitSpecialAbilities: true,
        recruitEnglishScores: true,
        recruitWorkExperiences: true,
      },
    });
  }

  static getRecruitById(recruitId) {
    return prisma.recruit.findUnique({
      where: { recruitId },
      include: {
        recruitPerReq: {
          select: {
            perReqDocumentId: true,
            perReqStatus: true,
            PerReqPositionId: {
              select: {
                positionNameTH: true,
              },
            },
          },
        },
        recruitDetail: true,
        recruitFamilyMembers: true,
        recruitEmergencyContacts: true,
        recruitEducations: true,
        recruitProfessionalLicenses: true,
        recruitLanguageSkills: true,
        recruitOtherSkills: true,
        recruitSpecialAbilities: true,
        recruitEnglishScores: true,
        recruitWorkExperiences: true,
      },
    });
  }

  static async createRecruit(data) {
    const {
      recruitDetail,
      recruitFamilyMembers,
      recruitEmergencyContacts,
      recruitEducations,
      recruitProfessionalLicenses,
      recruitLanguageSkills,
      recruitOtherSkills,
      recruitSpecialAbilities,
      recruitEnglishScores,
      recruitWorkExperiences,
      ...recruitData
    } = data;

    applyDateFormatting(recruitDetail);

    return prisma.recruit.create({
      data: {
        ...recruitData,
        recruitStatus: recruitData.recruitStatus ?? "Pending",
        ...(recruitDetail && { recruitDetail: { create: recruitDetail } }),
        ...(Array.isArray(recruitFamilyMembers) &&
          recruitFamilyMembers.length > 0 && {
            recruitFamilyMembers: { create: recruitFamilyMembers },
          }),
        ...(Array.isArray(recruitEmergencyContacts) &&
          recruitEmergencyContacts.length > 0 && {
            recruitEmergencyContacts: { create: recruitEmergencyContacts },
          }),
        ...(Array.isArray(recruitEducations) &&
          recruitEducations.length > 0 && {
            recruitEducations: { create: recruitEducations },
          }),
        ...(Array.isArray(recruitProfessionalLicenses) &&
          recruitProfessionalLicenses.length > 0 && {
            recruitProfessionalLicenses: {
              create: recruitProfessionalLicenses,
            },
          }),
        ...(Array.isArray(recruitLanguageSkills) &&
          recruitLanguageSkills.length > 0 && {
            recruitLanguageSkills: { create: recruitLanguageSkills },
          }),
        ...(Array.isArray(recruitOtherSkills) &&
          recruitOtherSkills.length > 0 && {
            recruitOtherSkills: { create: recruitOtherSkills },
          }),
        ...(Array.isArray(recruitSpecialAbilities) &&
          recruitSpecialAbilities.length > 0 && {
            recruitSpecialAbilities: { create: recruitSpecialAbilities },
          }),
        ...(Array.isArray(recruitEnglishScores) &&
          recruitEnglishScores.length > 0 && {
            recruitEnglishScores: { create: recruitEnglishScores },
          }),
        ...(Array.isArray(recruitWorkExperiences) &&
          recruitWorkExperiences.length > 0 && {
            recruitWorkExperiences: { create: recruitWorkExperiences },
          }),
      },
    });
  }

  static async updateRecruit(recruitId, data) {
    return prisma.recruit.update({
      where: { recruitId },
      data: {
        recruitStatus: data.recruitStatus ?? "Pending",
        recruitUpdateBy: data.recruitUpdateBy,
      },
    });
  }

  static async generateSlug(recruitId) {
    const nanoid = customAlphabet(
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      10
    );
    const slug = nanoid();
    await prisma.recruit.update({
      where: { recruitId },
      data: { applySlug: slug },
    });
    return slug;
  }

  static async getOrCreateApplyLink(perReqId) {
    const recruit = await RecruitService.createRecruit({
      recruitPerReqId: perReqId,
      recruitStatus: "Pending",
      recruitCreatedAt: getLocalNow(),
    });

    let slug = recruit.applySlug;
    if (!slug) {
      slug = await RecruitService.generateSlug(recruit.recruitId);
    }

    return `${process.env.NEXT_PUBLIC_BASE_URL}/apply/${slug}`;
  }

  static async getRecruitBySlug(slug) {
    return prisma.recruit.findFirst({
      where: { applySlug: slug },
      include: {
        recruitPerReq: {
          select: {
            perReqDocumentId: true,
            perReqStatus: true,
            PerReqPositionId: {
              select: {
                positionNameTH: true,
              },
            },
          },
        },
        recruitDetail: true,
        recruitFamilyMembers: true,
        recruitEmergencyContacts: true,
        recruitEducations: true,
        recruitProfessionalLicenses: true,
        recruitLanguageSkills: true,
        recruitOtherSkills: true,
        recruitSpecialAbilities: true,
        recruitEnglishScores: true,
        recruitWorkExperiences: true,
      },
    });
  }
}
