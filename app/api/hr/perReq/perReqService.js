import prisma from "@/lib/prisma";

const formatDateOnly = (dateInput) => {
  if (!dateInput) return null;
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};

export class PerReqService {
  static async getAllPerReq() {
    return prisma.perReq.findMany({
      include: {
        PerReqCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        PerReqUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        PerReqManagerApproveBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        PerReqHrApproveBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        PerReqDivisionId: {
          select: {
            divisionName: true,
          },
        },
        PerReqDepartmentId: {
          select: {
            departmentName: true,
          },
        },
        PerReqPositionId: {
          select: {
            positionNameTH: true,
          },
        },
        perReqReasonComputerSkills: true,
        perReqReasonLanguageSkills: true,
        perReqDrivingLicenses: true,
        perReqProfessionalLicenses: true,
      },
    });
  }

  static async getPerReqById(perReqId) {
    return prisma.perReq.findUnique({
      where: { perReqId },
      include: {
        PerReqCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        PerReqUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        PerReqManagerApproveBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        PerReqHrApproveBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        PerReqDivisionId: {
          select: {
            divisionName: true,
          },
        },
        PerReqDepartmentId: {
          select: {
            departmentName: true,
          },
        },
        PerReqPositionId: {
          select: {
            positionNameTH: true,
          },
        },
        perReqReasonComputerSkills: true,
        perReqReasonLanguageSkills: true,
        perReqDrivingLicenses: true,
        perReqProfessionalLicenses: true,
      },
    });
  }

  static async createPerReq(data) {
    data.perReqDesiredDate = formatDateOnly(data.perReqDesiredDate);
    return prisma.perReq.create({
      data: {
        ...data,
        perReqReasonComputerSkills: data.perReqReasonComputerSkills
          ? { create: data.perReqReasonComputerSkills }
          : undefined,
        perReqReasonLanguageSkills: data.perReqReasonLanguageSkills
          ? { create: data.perReqReasonLanguageSkills }
          : undefined,
        perReqDrivingLicenses: data.perReqDrivingLicenses
          ? { create: data.perReqDrivingLicenses }
          : undefined,
        perReqProfessionalLicenses: data.perReqProfessionalLicenses
          ? { create: data.perReqProfessionalLicenses }
          : undefined,
      },
    });
  }

  static async updatePerReq(perReqId, data) {
    if (data.perReqDesiredDate) {
      data.perReqDesiredDate = formatDateOnly(data.perReqDesiredDate);
    }
    return prisma.perReq.update({
      where: { perReqId },
      data: {
        ...data,
        perReqReasonComputerSkills: {
          deleteMany: {},
          ...(data.perReqReasonComputerSkills
            ? { create: data.perReqReasonComputerSkills }
            : {}),
        },
        perReqReasonLanguageSkills: {
          deleteMany: {},
          ...(data.perReqReasonLanguageSkills
            ? { create: data.perReqReasonLanguageSkills }
            : {}),
        },
        perReqDrivingLicenses: {
          deleteMany: {},
          ...(data.perReqDrivingLicenses
            ? { create: data.perReqDrivingLicenses }
            : {}),
        },
        perReqProfessionalLicenses: {
          deleteMany: {},
          ...(data.perReqProfessionalLicenses
            ? { create: data.perReqProfessionalLicenses }
            : {}),
        },
      },
    });
  }

  static async generateDocumentId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const startDate = new Date(`${year}-${month}-01T00:00:00.000Z`);
    const endDate = new Date(
      new Date(startDate).setMonth(startDate.getMonth() + 1)
    );

    const count = await prisma.perReq.count({
      where: {
        perReqCreateAt: {
          gte: startDate,
          lt: endDate,
        },
      },
    });

    const serial = (count + 1).toString().padStart(4, "0");
    return `perReq-${month}-${year}-${serial}`;
  }
}
