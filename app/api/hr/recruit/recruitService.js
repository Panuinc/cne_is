import prisma from "@/lib/prisma";
import { customAlphabet } from "nanoid";
import { getLocalNow } from "@/lib/getLocalNow";

const formatDateOnly = (dateInput) => {
  if (!dateInput) return null;
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
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
  static async getAllRecruit() {
    return prisma.recruit.findMany({
      include: {
        recruitPerReq: {
          select: {
            perReqDocumentId: true,
            perReqStatus: true,
            PerReqPositionId: { select: { positionNameTH: true } },
          },
        },
        recruitDetail: true,
        recruitFamilyMembers: true,
        recruitEducations: true,
        recruitLanguageSkills: true,
        recruitWorkExperiences: true,
        RecruitUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }

  static async getRecruitById(recruitId) {
    return prisma.recruit.findUnique({
      where: { recruitId },
      include: {
        recruitPerReq: {
          select: {
            perReqDocumentId: true,
            perReqStatus: true,
            PerReqPositionId: { select: { positionNameTH: true } },
          },
        },
        recruitDetail: true,
        recruitFamilyMembers: true,
        recruitEducations: true,
        recruitLanguageSkills: true,
        recruitWorkExperiences: true,
        RecruitUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }

  static async getRecruitBySlug(slug) {
    return prisma.recruit.findFirst({
      where: { applySlug: slug },
      include: {
        recruitPerReq: {
          select: {
            perReqDocumentId: true,
            perReqStatus: true,
            PerReqPositionId: { select: { positionNameTH: true } },
          },
        },
        recruitDetail: true,
        recruitFamilyMembers: true,
        recruitEducations: true,
        recruitLanguageSkills: true,
        recruitWorkExperiences: true,
      },
    });
  }

  static async createRecruit(data) {
    const { recruitDetail = {}, ...recruitData } = data;

    applyDateFormatting(recruitDetail);

    return prisma.recruit.create({
      data: {
        ...recruitData,
        recruitDetail: { create: recruitDetail },
      },
    });
  }

  static async updateRecruit(recruitId, data) {
    const {
      recruitDetail = {},
      recruitFamilyMembers = [],
      recruitEducations = [],
      recruitLanguageSkills = [],
      recruitWorkExperiences = [],
      ...recruitData
    } = data;

    applyDateFormatting(recruitDetail);

    return prisma.recruit.update({
      where: { recruitId },
      data: {
        ...recruitData,
        recruitUpdateAt: getLocalNow(),
        ...(recruitData.recruitUpdateBy && {
          recruitUpdateBy: recruitData.recruitUpdateBy,
        }),
        recruitDetail: { update: recruitDetail },
        recruitFamilyMembers: { deleteMany: {}, create: recruitFamilyMembers },
        recruitEducations: { deleteMany: {}, create: recruitEducations },
        recruitLanguageSkills: {
          deleteMany: {},
          create: recruitLanguageSkills,
        },
        recruitWorkExperiences: {
          deleteMany: {},
          create: recruitWorkExperiences,
        },
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
      recruitCreateAt: getLocalNow(),
      recruitDetail: {},
    });

    let slug = recruit.applySlug;
    if (!slug) {
      slug = await RecruitService.generateSlug(recruit.recruitId);
    }

    return `${process.env.NEXT_PUBLIC_BASE_URL}/apply/${slug}`;
  }
}
