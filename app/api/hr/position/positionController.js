import { NextResponse } from "next/server";
import { PositionService } from "@/app/api/hr/position/positionService";
import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  positionPostSchema,
  positionPutSchema,
  formatPositionData,
} from "@/app/api/hr/position/positionSchema";

export class PositionController {
  static async getAllPosition(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const position = await PositionService.getAllPosition();
      if (!position?.length) {
        return NextResponse.json({ error: "No position found" }, { status: 404 });
      }

      const formattedPositions = formatPositionData(position);
      return NextResponse.json(
        {
          message: "Successfully retrieved position",
          position: formattedPositions,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve position");
    }
  }

  static async createPosition(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = positionPostSchema.parse(data);

      const existingPosition = await PositionService.getPositionByName(parsedData.positionName);
      if (existingPosition) {
        return NextResponse.json(
          {
            error: `Position name '${parsedData.positionName}' already exists`,
          },
          { status: 400 }
        );
      }

      const localNow = getLocalNow();
      const newPosition = await PositionService.createPosition({
        ...parsedData,
        positionCreateAt: localNow,
      });

      return NextResponse.json(
        { message: "Position created successfully", position: newPosition },
        { status: 201 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to create position");
    }
  }

  static async getPositionById(request, positionId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedPositionId = parseInt(positionId, 10);
      if (isNaN(parsedPositionId)) {
        return NextResponse.json({ error: "Invalid position ID" }, { status: 400 });
      }

      const position = await PositionService.getPositionById(parsedPositionId);
      if (!position) {
        return NextResponse.json({ error: "Position not found" }, { status: 404 });
      }

      const formattedPosition = formatPositionData([position]);
      return NextResponse.json(
        {
          message: "Successfully retrieved position",
          position: formattedPosition,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve position");
    }
  }

  static async updatePosition(request, positionId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedPositionId = parseInt(positionId, 10);
      if (isNaN(parsedPositionId)) {
        return NextResponse.json({ error: "Invalid position ID" }, { status: 400 });
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = positionPutSchema.parse({
        ...data,
        positionId: parsedPositionId,
      });

      const localNow = getLocalNow();
      const updatedPosition = await PositionService.updatePosition(parsedPositionId, {
        ...parsedData,
        positionUpdateAt: localNow,
      });

      return NextResponse.json(
        {
          message: "Position updated successfully",
          position: updatedPosition,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update position");
    }
  }
}
