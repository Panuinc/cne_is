import { NextResponse } from "next/server";
import { EmpService } from "@/app/api/hr/empMain/empService";
import { validateRequest } from "@/lib/validateRequest";
import { getLocalNow } from "@/lib/getLocalNow";
import { handleErrors, handleGetErrors } from "@/lib/errorHandler";
import {
  empPostSchema,
  empPutSchema,
  formatEmpData,
} from "@/app/api/hr/empMain/empSchema";

export class EmpController {
  static async getAllEmp(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const emp = await EmpService.getAllEmp();
      if (!emp?.length) {
        return NextResponse.json({ error: "No emp found" }, { status: 404 });
      }

      const formattedEmps = formatEmpData(emp);
      return NextResponse.json(
        {
          message: "Successfully retrieved emp",
          emp: formattedEmps,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve emp");
    }
  }

  static async createEmp(request) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = empPostSchema.parse(data);

      const existingEmp = await EmpService.getEmpByIdCard(parsedData.empIdCard);
      if (existingEmp) {
        return NextResponse.json(
          {
            error: `Emp name '${parsedData.empIdCard}' already exists`,
          },
          { status: 400 }
        );
      }

      const localNow = getLocalNow();
      const newEmp = await EmpService.createEmp({
        ...parsedData,
        empCreateAt: localNow,
      });

      return NextResponse.json(
        { message: "Emp created successfully", emp: newEmp },
        { status: 201 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to create emp");
    }
  }

  static async getEmpById(request, empId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpId = parseInt(empId, 10);
      if (isNaN(parsedEmpId)) {
        return NextResponse.json({ error: "Invalid emp ID" }, { status: 400 });
      }

      const emp = await EmpService.getEmpById(parsedEmpId);
      if (!emp) {
        return NextResponse.json({ error: "Emp not found" }, { status: 404 });
      }

      const formattedEmp = formatEmpData([emp]);
      return NextResponse.json(
        {
          message: "Successfully retrieved emp",
          emp: formattedEmp,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleGetErrors(error, ip, "Failed to retrieve emp");
    }
  }

  static async updateEmp(request, empId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpId = parseInt(empId, 10);
      if (isNaN(parsedEmpId)) {
        return NextResponse.json({ error: "Invalid emp ID" }, { status: 400 });
      }

      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());

      const parsedData = empPutSchema.parse({
        ...data,
        empId: parsedEmpId,
      });

      const localNow = getLocalNow();
      const updatedEmp = await EmpService.updateEmp(parsedEmpId, {
        ...parsedData,
        empUpdateAt: localNow,
      });

      return NextResponse.json(
        {
          message: "Emp updated successfully",
          emp: updatedEmp,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleErrors(error, ip, "Failed to update emp");
    }
  }
}
