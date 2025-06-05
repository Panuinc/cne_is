import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { RecruitService } from "./recruitService";
import {
  recruitPostSchema,
  recruitPutSchema,
  formatRecruitData,
} from "./recruitSchema";

import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";

const formatDateOnly = (dateInput) => {
  if (!dateInput) return null;
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};

export class RecruitController {
  static async getAllRecruit(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const recruits = await RecruitService.getAllRecruit();
      if (!recruits?.length) {
        return NextResponse.json(
          { error: "No recruit found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          message: "Successfully retrieved recruit",
          recruit: formatRecruitData(recruits),
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve recruit");
    }
  }

  static async createRecruit(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const formData = await request.formData();
      const raw = Object.fromEntries(formData.entries());

      [
        "recruitFamilyMembers",
        "recruitEmergencyContacts",
        "recruitEducations",
        "recruitProfessionalLicenses",
        "recruitLanguageSkills",
        "recruitOtherSkills",
        "recruitSpecialAbilities",
        "recruitEnglishScores",
        "recruitWorkExperiences",
      ].forEach((k) => (raw[k] = JSON.parse(raw[k] || "[]")));
      if (raw.recruitDetail) raw.recruitDetail = JSON.parse(raw.recruitDetail);

      const data = recruitPostSchema.parse(raw);
      const localNow = getLocalNow();

      if (data.recruitDetail) {
        data.recruitDetail.recruitDetailBirthDay = formatDateOnly(
          data.recruitDetail.recruitDetailBirthDay
        );
        data.recruitDetail.recruitDetailIdCardIssuedDate = formatDateOnly(
          data.recruitDetail.recruitDetailIdCardIssuedDate
        );
        data.recruitDetail.recruitDetailIdCardEndDate = formatDateOnly(
          data.recruitDetail.recruitDetailIdCardEndDate
        );
      }

      const recruit = await RecruitService.createRecruit({
        ...data,
        recruitCreatedAt: localNow,
      });

      return NextResponse.json(
        { message: "Recruit created successfully", recruit },
        { status: 201 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to create recruit");
    }
  }

  static async getRecruitById(request, recruitId) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const id = Number(recruitId);
      if (Number.isNaN(id)) {
        return NextResponse.json(
          { error: "Invalid recruit ID" },
          { status: 400 }
        );
      }

      const recruit = await RecruitService.getRecruitById(id);
      if (!recruit) {
        return NextResponse.json(
          { error: "Recruit not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          message: "Successfully retrieved recruit",
          recruit: formatRecruitData([recruit]),
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve recruit");
    }
  }

  static async updateRecruit(request, recruitId) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const id = Number(recruitId);
      if (Number.isNaN(id)) {
        return NextResponse.json(
          { error: "Invalid recruit ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const raw = Object.fromEntries(formData.entries());
      const data = recruitPutSchema.parse({ ...raw, recruitId: id });
      const localNow = getLocalNow();

      const recruit = await RecruitService.updateRecruit(id, {
        recruitStatus: data.recruitStatus,
        recruitUpdateBy: data.recruitUpdateBy,
        recruitUpdatedAt: localNow,
      });

      return NextResponse.json(
        { message: "Recruit updated successfully", recruit },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update recruit");
    }
  }

  static async getApplyLink(request, perReqId) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const id = Number(perReqId);
      if (Number.isNaN(id)) {
        return NextResponse.json(
          { error: "Invalid perReqId" },
          { status: 400 }
        );
      }
      const url = await RecruitService.getOrCreateApplyLink(id);

      return NextResponse.json({ url }, { status: 200 });
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to create link");
    }
  }
}
