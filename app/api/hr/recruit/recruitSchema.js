// app/api/hr/recruit/recruitSchema.js
import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  preprocessDate,
  formatData,
} from "@/lib/zodSchema";

/* ────────────────── formatter ────────────────── */
export const formatRecruitData = (data) =>
  formatData(
    data,
    ["recruitCreatedAt", "recruitUpdatedAt"], // แปลงเป็น ISO locale
    []                                        // ไม่มีฟิลด์ date-only
  );

/* ─────────────── POST (create) schema ─────────────── */
export const recruitPostSchema = z.object({
  recruitPerReqId: preprocessInt("กรุณาระบุ perReqId ที่อ้างถึง"),

  recruitFullNameTh: preprocessString("กรุณากรอกชื่อ–สกุล (ไทย)"),
  recruitFullNameEn: preprocessString("กรุณากรอกชื่อ–สกุล (อังกฤษ)"),
  recruitNickName: preprocessString("กรุณากรอกชื่อเล่น"),

  recruitStatus: preprocessEnum(
    ["Pending", "Submitted", "Interviewing", "Rejected", "Hired"],
    ""
  ).optional(),

  // เก็บเป็น JSON string → แปลงภายหลัง
  recruitDetail: z.any().optional(),
  recruitFamilyMembers: z.array(z.any()).optional(),
  recruitEmergencyContacts: z.array(z.any()).optional(),
  recruitEducations: z.array(z.any()).optional(),
  recruitProfessionalLicenses: z.array(z.any()).optional(),
  recruitLanguageSkills: z.array(z.any()).optional(),
  recruitOtherSkills: z.array(z.any()).optional(),
  recruitSpecialAbilities: z.array(z.any()).optional(),
  recruitEnglishScores: z.array(z.any()).optional(),
  recruitWorkExperiences: z.array(z.any()).optional(),

  recruitCreateBy: preprocessInt("กรุณาระบุผู้สร้าง"),
});

/* ─────────────── PUT (update) schema ─────────────── */
export const recruitPutSchema = z
  .object({
    recruitId: preprocessInt("กรุณาระบุ recruitId"),
    recruitStatus: preprocessEnum(
      ["Pending", "Submitted", "Interviewing", "Rejected", "Hired"],
      "กรุณาระบุสถานะ"
    ),
  })
  .merge(
    z
      .object({
        recruitFullNameTh: preprocessString().optional(),
        recruitFullNameEn: preprocessString().optional(),
        recruitNickName: preprocessString().optional(),
        recruitDetail: z.any().optional(),
        recruitFamilyMembers: z.array(z.any()).optional(),
        recruitEmergencyContacts: z.array(z.any()).optional(),
        recruitEducations: z.array(z.any()).optional(),
        recruitProfessionalLicenses: z.array(z.any()).optional(),
        recruitLanguageSkills: z.array(z.any()).optional(),
        recruitOtherSkills: z.array(z.any()).optional(),
        recruitSpecialAbilities: z.array(z.any()).optional(),
        recruitEnglishScores: z.array(z.any()).optional(),
        recruitWorkExperiences: z.array(z.any()).optional(),
      })
      .partial()
  )
  .merge(
    z.object({
      recruitUpdateBy: preprocessInt().optional(),
    })
  )
  .strip();
