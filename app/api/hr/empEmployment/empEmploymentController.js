import path from "path";
import { writeFile, mkdir } from "fs/promises";
import { NextResponse } from "next/server";
import { EmpEmploymentService } from "@/app/api/hr/empEmployment/empEmploymentService";
import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  empEmploymentPutSchema,
  formatEmpEmploymentData,
} from "@/app/api/hr/empEmployment/empEmploymentSchema";

export class EmpEmploymentController {
  static async getEmpEmploymentById(request, empEmploymentId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpEmploymentId = parseInt(empEmploymentId, 10);
      if (isNaN(parsedEmpEmploymentId)) {
        return NextResponse.json(
          { error: "Invalid empEmployment ID" },
          { status: 400 }
        );
      }

      const empEmployment = await EmpEmploymentService.getEmpEmploymentById(
        parsedEmpEmploymentId
      );
      if (!empEmployment) {
        return NextResponse.json(
          { error: "EmpEmployment not found" },
          { status: 404 }
        );
      }

      const formattedEmpEmployment = formatEmpEmploymentData([empEmployment]);
      return NextResponse.json(
        {
          message: "Successfully retrieved empEmployment",
          empEmployment: formattedEmpEmployment,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve empEmployment");
    }
  }

  static async updateEmpEmployment(request, empEmploymentId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpEmploymentId = parseInt(empEmploymentId, 10);
      if (isNaN(parsedEmpEmploymentId)) {
        return NextResponse.json(
          { error: "Invalid empEmployment ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = empEmploymentPutSchema.parse({
        ...data,
        empEmploymentId: parsedEmpEmploymentId,
      });

      const existingEmpEmployment =
        await EmpEmploymentService.getEmpEmploymentById(parsedEmpEmploymentId);
      if (!existingEmpEmployment) {
        return NextResponse.json(
          { error: "EmpEmployment not found" },
          { status: 404 }
        );
      }

      const empEmploymentPicture = formData.get("empEmploymentPicture");
      const empEmploymentSignature = formData.get("empEmploymentSignature");

      async function uploadFile(
        file,
        folder,
        existingFileName,
        empEmploymentNumber,
        empEmploymentId
      ) {
        if (!file?.name || file.size === 0) {
          return { fileName: existingFileName };
        }

        const fileName = `${empEmploymentNumber}_${empEmploymentId}.png`;
        const folderPath = path.join(
          process.cwd(),
          "public/empEmployment",
          folder
        );
        await mkdir(folderPath, { recursive: true });

        const filePath = path.join(folderPath, fileName).replace(/\\/g, "/");
        await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
        return { fileName };
      }

      const { fileName: pictureName } = await uploadFile(
        empEmploymentPicture,
        "userPicture",
        existingEmpEmployment.empEmploymentPicture,
        parsedData.empEmploymentNumber,
        parsedEmpEmploymentId
      );

      const { fileName: signatureName } = await uploadFile(
        empEmploymentSignature,
        "signature",
        existingEmpEmployment.empEmploymentSignature,
        parsedData.empEmploymentNumber,
        parsedEmpEmploymentId
      );

      const localNow = getLocalNow();

      const updatedEmpEmployment =
        await EmpEmploymentService.updateEmpEmployment(parsedEmpEmploymentId, {
          ...parsedData,
          empEmploymentPicture: pictureName,
          empEmploymentSignature: signatureName,
          empEmploymentUpdateAt: localNow,
        });

      return NextResponse.json(
        {
          message: "EmpEmployment updated successfully",
          empEmployment: updatedEmpEmployment,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update empEmployment");
    }
  }
}
