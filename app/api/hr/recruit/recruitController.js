import path from "path";
import { writeFile, mkdir } from "fs/promises";
import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";
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
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};

const formatRecruitDetailDates = (detail) => {
  if (!detail) return;
  detail.recruitDetailBirthDay = formatDateOnly(detail.recruitDetailBirthDay);
  detail.recruitDetailIdCardIssuedDate = formatDateOnly(
    detail.recruitDetailIdCardIssuedDate
  );
  detail.recruitDetailIdCardEndDate = formatDateOnly(
    detail.recruitDetailIdCardEndDate
  );
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

  static async getRecruitById(request, recruitId) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const id = Number(recruitId);
      if (isNaN(id)) {
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

  static async getRecruitBySlug(request, slug) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const recruit = await RecruitService.getRecruitBySlug(slug);
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
      return handleGetErrors(error, ip, "Failed to retrieve recruit by slug");
    }
  }

  static async createRecruit(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const formData = await request.formData();
      const raw = Object.fromEntries(formData.entries());

      let recruitDetail = {};
      try {
        recruitDetail = JSON.parse(raw.recruitDetail || "{}");
      } catch {
        recruitDetail = {};
      }

      const data = recruitPostSchema.parse(raw);

      const slug = customAlphabet(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        10
      )();

      const recruit = await RecruitService.createRecruit({
        ...data,
        applySlug: slug,
        recruitCreateAt: getLocalNow(),
        recruitDetail,
      });

      return NextResponse.json(
        {
          message: "Recruit created successfully",
          recruit,
        },
        { status: 201 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to create recruit");
    }
  }

  static async updateRecruit(request, recruitId) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const id = Number(recruitId);
      if (isNaN(id)) {
        return NextResponse.json(
          { error: "Invalid recruit ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const raw = Object.fromEntries(formData.entries());

      const jsonFields = [
        "recruitDetail",
        "recruitFamilyMembers",
        "recruitEducations",
        "recruitLanguageSkills",
        "recruitWorkExperiences",
      ];

      for (const key of jsonFields) {
        try {
          raw[key] = JSON.parse(raw[key] || "[]");
        } catch {
          raw[key] = key === "recruitDetail" ? null : [];
        }
      }

      const rawName = raw.recruitDetail?.recruitDetailFullNameTh || "unnamed";
      const sanitizedName = rawName
        .trim()
        .replace(/\s+/g, "_")
        .replace(/[^a-zA-Z0-9ก-๙_]/g, "");

      const uploadFileBuffer = async (file) => {
        if (!file?.name || file.size === 0) return null;
        const arrayBuffer = await file.arrayBuffer();
        return Buffer.from(arrayBuffer);
      };

      const buffers = {
        profileImage: await uploadFileBuffer(
          formData.get("recruitDetailProfileImage")
        ),
        signatureImage: await uploadFileBuffer(
          formData.get("recruitDetailSignatureImage")
        ),
      };

      const attachFields = {
        recruitDetailAttachIdCard: "idcard",
        recruitDetailAttachHouseReg: "houseReg",
        recruitDetailAttachEducation: "education",
        recruitDetailAttachMedicalCert: "medicalCert",
        recruitDetailAttachMilitaryDoc: "militaryDoc",
      };

      for (const [field, type] of Object.entries(attachFields)) {
        const file = formData.get(field);
        buffers[field] = await uploadFileBuffer(file);
      }

      const data = recruitPutSchema.parse({ ...raw, recruitId: id });

      const saveBufferToFile = async (buffer, folder, filename) => {
        if (!buffer) return null;
        const folderPath = path.join(process.cwd(), "public", folder);
        await mkdir(folderPath, { recursive: true });
        const filePath = path.join(folderPath, filename).replace(/\\/g, "/");
        await writeFile(filePath, buffer);
        return filename;
      };

      const profileImageName = await saveBufferToFile(
        buffers.profileImage,
        "recruit/recruitProfileImage",
        `${sanitizedName}.png`
      );

      const signatureImageName = await saveBufferToFile(
        buffers.signatureImage,
        "recruit/recruitSignatureImage",
        `${sanitizedName}.png`
      );

      for (const [field, type] of Object.entries(attachFields)) {
        const filename = `${sanitizedName}_${type}.png`;
        raw.recruitDetail[field] = await saveBufferToFile(
          buffers[field],
          `recruit/recruitAttachment/${type}`,
          filename
        );
      }

      raw.recruitDetail.recruitDetailProfileImage = profileImageName || null;
      raw.recruitDetail.recruitDetailSignatureImage =
        signatureImageName || null;

      const recruit = await RecruitService.updateRecruit(id, {
        ...data,
        recruitDetail: raw.recruitDetail,
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
      if (isNaN(id)) {
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
