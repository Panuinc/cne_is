import { NextResponse } from "next/server";
import { PosJobDesService } from "@/app/api/hr/posJobDes/posJobDesService";
import { validateRequest } from "@/lib/validateRequest";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  posJobDesPutSchema,
  formatPosJobDesData,
} from "@/app/api/hr/posJobDes/posJobDesSchema";

export class PosJobDesController {
  static async getPosJobDesById(request, posJobDesId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedPosJobDesId = parseInt(posJobDesId, 10);
      if (isNaN(parsedPosJobDesId)) {
        return NextResponse.json(
          { error: "Invalid posJobDes ID" },
          { status: 400 }
        );
      }

      const posJobDes = await PosJobDesService.getPosJobDesById(
        parsedPosJobDesId
      );
      if (!posJobDes) {
        return NextResponse.json(
          { error: "PosJobDes not found" },
          { status: 404 }
        );
      }

      const formattedPosJobDes = formatPosJobDesData([posJobDes]);
      return NextResponse.json(
        {
          message: "Successfully retrieved posJobDes",
          posJobDes: formattedPosJobDes,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve posJobDes");
    }
  }

  static async updatePosJobDes(request, posJobDesId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedPosJobDesId = parseInt(posJobDesId, 10);
      if (isNaN(parsedPosJobDesId)) {
        return NextResponse.json(
          { error: "Invalid posJobDes ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = posJobDesPutSchema.parse({
        ...data,
        posJobDesId: parsedPosJobDesId,
      });
      
      delete parsedData.posJobDesId;
      
      const updatedPosJobDes = await PosJobDesService.updatePosJobDes(
        parsedPosJobDesId,
        parsedData
      );
      

      return NextResponse.json(
        {
          message: "PosJobDes updated successfully",
          posJobDes: updatedPosJobDes,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update posJobDes");
    }
  }
}
