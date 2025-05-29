import { NextResponse } from "next/server";
import { DepartmentService } from "@/app/api/hr/department/departmentService";
import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  departmentPostSchema,
  departmentPutSchema,
  formatDepartmentData,
} from "@/app/api/hr/department/departmentSchema";

export class DepartmentController {
  static async getAllDepartment(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const department = await DepartmentService.getAllDepartment();
      if (!department?.length) {
        return NextResponse.json(
          { error: "No department found" },
          { status: 404 }
        );
      }

      const formattedDepartments = formatDepartmentData(department);
      return NextResponse.json(
        {
          message: "Successfully retrieved department",
          department: formattedDepartments,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve department");
    }
  }

  static async createDepartment(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = departmentPostSchema.parse(data);

      const departmentDivisionId = parseInt(
        parsedData.departmentDivisionId,
        10
      );

      const existingDepartment =
        await DepartmentService.getDepartmentByNameAndDivision(
          parsedData.departmentName,
          departmentDivisionId
        );

      if (existingDepartment) {
        return NextResponse.json(
          {
            error: `Department '${parsedData.departmentName}' already exists in this division`,
          },
          { status: 400 }
        );
      }

      const localNow = getLocalNow();
      const newDepartment = await DepartmentService.createDepartment({
        ...parsedData,
        departmentDivisionId,
        departmentCreateAt: localNow,
      });

      return NextResponse.json(
        {
          message: "Department created successfully",
          department: newDepartment,
        },
        { status: 201 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to create department");
    }
  }

  static async getDepartmentById(request, departmentId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedDepartmentId = parseInt(departmentId, 10);
      if (isNaN(parsedDepartmentId)) {
        return NextResponse.json(
          { error: "Invalid department ID" },
          { status: 400 }
        );
      }

      const department = await DepartmentService.getDepartmentById(
        parsedDepartmentId
      );
      if (!department) {
        return NextResponse.json(
          { error: "Department not found" },
          { status: 404 }
        );
      }

      const formattedDepartment = formatDepartmentData([department]);
      return NextResponse.json(
        {
          message: "Successfully retrieved department",
          department: formattedDepartment,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve department");
    }
  }

  static async updateDepartment(request, departmentId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedDepartmentId = parseInt(departmentId, 10);
      if (isNaN(parsedDepartmentId)) {
        return NextResponse.json(
          { error: "Invalid department ID" },
          { status: 400 }
        );
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = departmentPutSchema.parse({
        ...data,
        departmentId: parsedDepartmentId,
      });

      const localNow = getLocalNow();
      const updatedDepartment = await DepartmentService.updateDepartment(
        parsedDepartmentId,
        {
          ...parsedData,
          departmentUpdateAt: localNow,
        }
      );

      return NextResponse.json(
        {
          message: "Department updated successfully",
          department: updatedDepartment,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update department");
    }
  }
}
