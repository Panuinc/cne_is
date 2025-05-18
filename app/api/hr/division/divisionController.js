import { NextResponse } from "next/server";
import { DivisionService } from "@/app/api/hr/division/divisionService";
import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  divisionPostSchema,
  divisionPutSchema,
  formatDivisionData,
} from "@/app/api/hr/division/divisionSchema";

export class DivisionController {
  static async getAllDivision(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const division = await DivisionService.getAllDivision();
      if (!division?.length) {
        return NextResponse.json({ error: "No division found" }, { status: 404 });
      }

      const formattedDivisions = formatDivisionData(division);
      return NextResponse.json(
        {
          message: "Successfully retrieved division",
          division: formattedDivisions,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve division");
    }
  }

  static async createDivision(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = divisionPostSchema.parse(data);

      const existingDivision = await DivisionService.getDivisionByName(parsedData.divisionName);
      if (existingDivision) {
        return NextResponse.json(
          {
            error: `Division name '${parsedData.divisionName}' already exists`,
          },
          { status: 400 }
        );
      }

      const localNow = getLocalNow();
      const newDivision = await DivisionService.createDivision({
        ...parsedData,
        divisionCreateAt: localNow,
      });

      return NextResponse.json(
        { message: "Division created successfully", division: newDivision },
        { status: 201 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to create division");
    }
  }

  static async getDivisionById(request, divisionId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedDivisionId = parseInt(divisionId, 10);
      if (isNaN(parsedDivisionId)) {
        return NextResponse.json({ error: "Invalid division ID" }, { status: 400 });
      }

      const division = await DivisionService.getDivisionById(parsedDivisionId);
      if (!division) {
        return NextResponse.json({ error: "Division not found" }, { status: 404 });
      }

      const formattedDivision = formatDivisionData([division]);
      return NextResponse.json(
        {
          message: "Successfully retrieved division",
          division: formattedDivision,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve division");
    }
  }

  static async updateDivision(request, divisionId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedDivisionId = parseInt(divisionId, 10);
      if (isNaN(parsedDivisionId)) {
        return NextResponse.json({ error: "Invalid division ID" }, { status: 400 });
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = divisionPutSchema.parse({
        ...data,
        divisionId: parsedDivisionId,
      });

      const localNow = getLocalNow();
      const updatedDivision = await DivisionService.updateDivision(parsedDivisionId, {
        ...parsedData,
        divisionUpdateAt: localNow,
      });

      return NextResponse.json(
        {
          message: "Division updated successfully",
          division: updatedDivision,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update division");
    }
  }
}
