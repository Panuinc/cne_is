// app/api/hr/recruit/recruitService.js
import prisma from "@/lib/prisma";
import { customAlphabet } from "nanoid";

export class RecruitService {
  /* ─────────────── read ─────────────── */
  static getAllRecruit() {
    return prisma.recruit.findMany({
      include: {
        recruitPerReq: { select: { perReqDocumentId: true, perReqStatus: true } },
      },
    });
  }

  static getRecruitById(recruitId) {
    return prisma.recruit.findUnique({
      where: { recruitId },
      include: {
        recruitPerReq: { select: { perReqDocumentId: true, perReqStatus: true } },
        recruitDetail:               true,
        recruitFamilyMembers:        true,
        recruitEmergencyContacts:    true,
        recruitEducations:           true,
        recruitProfessionalLicenses: true,
        recruitLanguageSkills:       true,
        recruitOtherSkills:          true,
        recruitSpecialAbilities:     true,
        recruitEnglishScores:        true,
        recruitWorkExperiences:      true,
      },
    });
  }

  /* ─────────────── create / update ─────────────── */
  static createRecruit(data) {
    return prisma.recruit.create({
      data: { ...data, recruitStatus: data.recruitStatus ?? "Pending" },
    });
  }

  static updateRecruit(recruitId, data) {
    return prisma.recruit.update({ where: { recruitId }, data });
  }

  /* ─────────────── utils ─────────────── */
  static async generateSlug(recruitId) {
    // ต้องเพิ่ม column applySlug String? @unique ใน model Recruit ก่อน
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
}
