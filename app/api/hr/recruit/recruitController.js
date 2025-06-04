// app/api/hr/recruit/recruitController.js
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

export class RecruitController {
  /* ─────────── /api/hr/recruit (GET) ─────────── */
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

  /* ─────────── /api/hr/recruit (POST) ─────────── */
  static async createRecruit(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const formData = await request.formData();
      const raw = Object.fromEntries(formData.entries());

      // parse JSON-string → object/array
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

  /* ─────── /api/hr/recruit/[recruitId] (GET) ─────── */
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

  /* ─────── /api/hr/recruit/[recruitId] (PUT) ─────── */
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

      const data = recruitPutSchema.parse({ ...raw, recruitId: id });
      const localNow = getLocalNow();

      const recruit = await RecruitService.updateRecruit(id, {
        ...data,
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

  /* ─── /api/hr/recruit/link/[perReqId] (GET) ─── */
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

      // ถ้า perReq นี้ยังไม่มี recruit (Pending) ⇒ สร้างใหม่
      let recruit = await prisma.recruit.findFirst({
        where: { recruitPerReqId: id, recruitStatus: "Pending" },
      });

      if (!recruit) {
        recruit = await RecruitService.createRecruit({
          recruitPerReqId: id,
          recruitFullNameTh: "",
          recruitFullNameEn: "",
          recruitNickName: "",
          recruitStatus: "Pending",
          recruitCreateBy: 0,
        });
      }

      // gen slug ถ้ายังไม่มี
      let slug = recruit.applySlug;
      if (!slug) slug = await RecruitService.generateSlug(recruit.recruitId);

      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/apply/${slug}`;
      return NextResponse.json({ url }, { status: 200 });
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to create link");
    }
  }
}
