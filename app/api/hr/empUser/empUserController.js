import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { EmpUserService } from "@/app/api/hr/empUser/empUserService";
import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  empUserPutSchema,
  formatEmpUserData,
} from "@/app/api/hr/empUser/empUserSchema";

export class EmpUserController {
  static async getEmpUserById(request, empUserId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpUserId = parseInt(empUserId, 10);
      if (isNaN(parsedEmpUserId)) {
        return NextResponse.json(
          { error: "Invalid empUser ID" },
          { status: 400 }
        );
      }

      const empUser = await EmpUserService.getEmpUserById(parsedEmpUserId);
      if (!empUser) {
        return NextResponse.json(
          { error: "EmpUser not found" },
          { status: 404 }
        );
      }

      const formattedEmpUser = formatEmpUserData([empUser]);
      return NextResponse.json(
        {
          message: "Successfully retrieved empUser",
          empUser: formattedEmpUser,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve empUser");
    }
  }

  static async updateEmpUser(request, empUserId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpUserId = parseInt(empUserId, 10);
      if (isNaN(parsedEmpUserId)) {
        return NextResponse.json(
          { error: "Invalid empUser ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = empUserPutSchema.parse({
        ...data,
        empUserId: parsedEmpUserId,
      });

      const localNow = getLocalNow();
      const hashedPassword = await bcrypt.hash(parsedData.empUserPassword, 12);
      const updatedEmpUser = await EmpUserService.updateEmpUser(
        parsedEmpUserId,
        {
          ...parsedData,
          empUserPassword: hashedPassword,
          empUserUpdateAt: localNow,
        }
      );

      return NextResponse.json(
        {
          message: "EmpUser updated successfully",
          empUser: updatedEmpUser,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update empUser");
    }
  }
}
