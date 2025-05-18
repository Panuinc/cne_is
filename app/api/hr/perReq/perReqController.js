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

      const perReq = await PerReqService.getAllPerReq();
      if (!perReq?.length) {
        return NextResponse.json({ error: "No perReq found" }, { status: 404 });
      }

      const formattedPerReqs = formatPerReqData(perReq);
      return NextResponse.json(
        {
          message: "Successfully retrieved perReq",
          perReq: formattedPerReqs,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve perReq");
    }
  }

  static async getPerReqById(request, perReqId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedPerReqId = parseInt(perReqId, 10);
      if (isNaN(parsedPerReqId)) {
        return NextResponse.json(
          { error: "Invalid perReq ID" },
          { status: 400 }
        );
      }

      const perReq = await PerReqService.getPerReqById(parsedPerReqId);
      if (!perReq) {
        return NextResponse.json(
          { error: "PerReq not found" },
          { status: 404 }
        );
      }

      const formattedPerReq = formatPerReqData([perReq]);
      return NextResponse.json(
        {
          message: "Successfully retrieved perReq",
          perReq: formattedPerReq,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve perReq");
    }
  }

  static async createPerReq(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = perReqPostSchema.parse(data);
      const localNow = getLocalNow();

      const documentId = await PerReqService.generateDocumentId();

      const newPerReq = await PerReqService.createPerReq({
        ...parsedData,
        perReqDocumentId: documentId,
        perReqCreateAt: localNow,
      });

      return NextResponse.json(
        { message: "PerReq created successfully", perReq: newPerReq },
        { status: 201 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to create perReq");
    }
  }

  static async updatePerReq(request, perReqId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedPerReqId = parseInt(perReqId, 10);
      if (isNaN(parsedPerReqId)) {
        return NextResponse.json(
          { error: "Invalid perReq ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = perReqPutSchema.parse({
        ...data,
        perReqId: parsedPerReqId,
      });

      const localNow = getLocalNow();
      const updatedPerReq = await PerReqService.updatePerReq(parsedPerReqId, {
        ...parsedData,
        perReqUpdateAt: localNow,
      });

      return NextResponse.json(
        {
          message: "PerReq updated successfully",
          perReq: updatedPerReq,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update perReq");
    }
  }
}
