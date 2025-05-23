import { NextResponse } from "next/server";
import { PerReqService } from "@/app/api/hr/perReq/perReqService";
import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  perReqPostSchema,
  perReqPutSchema,
  formatPerReqData,
} from "@/app/api/hr/perReq/perReqSchema";

export class PerReqController {
  static async getAllPerReq(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const list = await PerReqService.getAllPerReq();
      if (!list.length)
        return NextResponse.json({ error: "No perReq found" }, { status: 404 });

      return NextResponse.json(
        { message: "Success", perReq: formatPerReqData(list) },
        { status: 200 }
      );
    } catch (err) {
      return handleGetErrors(err, ip, "Failed to retrieve perReq");
    }
  }

  static async getPerReqById(request, perReqId) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const id = Number(perReqId);
      if (Number.isNaN(id))
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

      const one = await PerReqService.getPerReqById(id);
      if (!one)
        return NextResponse.json({ error: "Not found" }, { status: 404 });

      return NextResponse.json(
        { message: "Success", perReq: formatPerReqData([one]) },
        { status: 200 }
      );
    } catch (err) {
      return handleGetErrors(err, ip, "Failed to retrieve perReq");
    }
  }

  static async createPerReq(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const formData = await request.formData();
      const raw = Object.fromEntries(formData.entries());

      raw.perReqComputerSkills = JSON.parse(raw.perReqComputerSkills || "[]");
      raw.perReqLanguageSkills = JSON.parse(raw.perReqLanguageSkills || "[]");
      raw.perReqDrivingLicenses = JSON.parse(raw.perReqDrivingLicenses || "[]");
      raw.perReqProfessionalLicenses = JSON.parse(
        raw.perReqProfessionalLicenses || "[]"
      );

      const data = perReqPostSchema.parse(raw);
      const perReqDocumentId = await PerReqService.generateDocumentId();
      const perReq = await PerReqService.createPerReq({
        ...data,
        perReqDocumentId,
        perReqDesiredDate: data.perReqDesiredDate ?? null,
      });

      return NextResponse.json({ message: "Created", perReq }, { status: 201 });
    } catch (err) {
      return handleErrors(err, ip, "Failed to create perReq");
    }
  }

  static async updatePerReq(request, perReqId) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const id = Number(perReqId);
      if (Number.isNaN(id))
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

      const formData = await request.formData();
      const raw = Object.fromEntries(formData.entries());
      raw.perReqComputerSkills = JSON.parse(raw.perReqComputerSkills || "[]");
      raw.perReqLanguageSkills = JSON.parse(raw.perReqLanguageSkills || "[]");
      raw.perReqDrivingLicenses = JSON.parse(raw.perReqDrivingLicenses || "[]");
      raw.perReqProfessionalLicenses = JSON.parse(
        raw.perReqProfessionalLicenses || "[]"
      );

      const data = perReqPutSchema.parse({ ...raw, perReqId: id });
      const localNow = getLocalNow();

      const approveFlow =
        ["PendingHrApprove", "ApprovedSuccess", "Cancel"].includes(
          data.perReqStatus
        ) &&
        (data.perReqReasonManagerApproveBy || data.perReqReasonHrApproveBy);

      if (approveFlow) {
        const payload = {
          perReqStatus: data.perReqStatus,
          perReqUpdateAt: localNow,
        };

        if (data.perReqReasonManagerApproveBy) {
          payload.perReqReasonManagerApproveBy = Number(
            data.perReqReasonManagerApproveBy
          );
          payload.perReqReasonManagerApproveAt = localNow;
        }
        if (data.perReqReasonHrApproveBy) {
          payload.perReqReasonHrApproveBy = Number(
            data.perReqReasonHrApproveBy
          );
          payload.perReqReasonHrApproveAt = localNow;
        }

        const perReq = await PerReqService.updatePerReq(id, payload);
        return NextResponse.json(
          { message: "PerReq status updated", perReq },
          { status: 200 }
        );
      }

      const perReq = await PerReqService.updatePerReq(id, {
        ...data,
        perReqUpdateAt: localNow,
      });

      return NextResponse.json(
        { message: "PerReq updated", perReq },
        { status: 200 }
      );
    } catch (err) {
      return handleErrors(err, ip, "Failed to update perReq");
    }
  }
}
