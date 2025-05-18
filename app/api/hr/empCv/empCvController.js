import { NextResponse } from "next/server";
import { EmpCvService } from "@/app/api/hr/empCv/empCvService";
import { validateRequest } from "@/lib/validateRequest";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  empCvPutSchema,
  formatEmpCvData,
} from "@/app/api/hr/empCv/empCvSchema";

export class EmpCvController {
  static async getEmpCvById(request, empCvId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpCvId = parseInt(empCvId, 10);
      if (isNaN(parsedEmpCvId)) {
        return NextResponse.json(
          { error: "Invalid empCv ID" },
          { status: 400 }
        );
      }

      const empCv = await EmpCvService.getEmpCvById(parsedEmpCvId);
      if (!empCv) {
        return NextResponse.json({ error: "EmpCv not found" }, { status: 404 });
      }

      const formattedEmpCv = formatEmpCvData([empCv]);
      return NextResponse.json(
        {
          message: "Successfully retrieved empCv",
          empCv: formattedEmpCv,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve empCv");
    }
  }

  static async updateEmpCv(request, empCvId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpCvId = parseInt(empCvId, 10);
      if (isNaN(parsedEmpCvId)) {
        return NextResponse.json(
          { error: "Invalid empCv ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const dataObj = {};
      for (const [key, value] of formData.entries()) {
        if (
          [
            "empCvEducations",
            "empCvLicenses",
            "empCvWorkHistories",
            "empCvLanguageSkills",
          ].includes(key)
        ) {
          dataObj[key] = JSON.parse(value);
        } else {
          dataObj[key] = value;
        }
      }

      const parsedData = empCvPutSchema.parse({
        ...dataObj,
        empCvId: parsedEmpCvId,
      });

      const existingEmpCv = await EmpCvService.getEmpCvById(parsedEmpCvId);
      if (!existingEmpCv) {
        return NextResponse.json({ error: "EmpCv not found" }, { status: 404 });
      }

      const updatedEmpCv = await EmpCvService.updateEmpCv(
        parsedEmpCvId,
        parsedData
      );

      return NextResponse.json(
        {
          message: "EmpCv updated successfully",
          empCv: updatedEmpCv,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update empCv");
    }
  }
}
