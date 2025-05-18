import { NextResponse } from "next/server";
import { UserService } from "@/app/api/other/changPassPin/changPassPinService";
import { userPasswordUpdateSchema } from "@/app/api/other/changPassPin/changPassPinSchema";
import { validateRequest } from "@/lib/validateRequest";
import { handleErrors } from "@/lib/errorHandler";

export class UserController {
  static async updatePassword(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const data = await request.json();
      const parsedData = userPasswordUpdateSchema.parse(data);

      const updatedUser = await UserService.updateUserPassword(parsedData);

      return NextResponse.json(
        { message: "Update successful", user: updatedUser },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Error updating user password");
    }
  }
}
