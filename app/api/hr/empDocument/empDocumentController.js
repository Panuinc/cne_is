import path from "path";
import { writeFile, mkdir } from "fs/promises";
import { NextResponse } from "next/server";
import { EmpDocumentService } from "@/app/api/hr/empDocument/empDocumentService";
import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  empDocumentPutSchema,
  formatEmpDocumentData,
} from "@/app/api/hr/empDocument/empDocumentSchema";

export class EmpDocumentController {
  static async getEmpDocumentById(request, empDocumentId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpDocumentId = parseInt(empDocumentId, 10);
      if (isNaN(parsedEmpDocumentId)) {
        return NextResponse.json(
          { error: "Invalid empDocument ID" },
          { status: 400 }
        );
      }

      const empDocument = await EmpDocumentService.getEmpDocumentById(
        parsedEmpDocumentId
      );
      if (!empDocument) {
        return NextResponse.json(
          { error: "EmpDocument not found" },
          { status: 404 }
        );
      }

      const formattedEmpDocument = formatEmpDocumentData([empDocument]);
      return NextResponse.json(
        {
          message: "Successfully retrieved empDocument",
          empDocument: formattedEmpDocument,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve empDocument");
    }
  }

  static async updateEmpDocument(request, empDocumentId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpDocumentId = parseInt(empDocumentId, 10);
      if (isNaN(parsedEmpDocumentId)) {
        return NextResponse.json(
          { error: "Invalid empDocument ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = empDocumentPutSchema.parse({
        ...data,
        empDocumentId: parsedEmpDocumentId,
      });

      const localNow = getLocalNow();
      const updatedEmpDocument = await EmpDocumentService.updateEmpDocument(
        parsedEmpDocumentId,
        {
          ...parsedData,
          empDocumentUpdateAt: localNow,
        }
      );

      return NextResponse.json(
        {
          message: "EmpDocument updated successfully",
          empDocument: updatedEmpDocument,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update empDocument");
    }
  }
}
