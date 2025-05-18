import { DepartmentController } from "@/app/api/hr/department/departmentController";

export async function GET(request, context) {
  const { departmentId } = await context.params;
  return DepartmentController.getDepartmentById(request, departmentId);
}

export async function PUT(request, context) {
  const { departmentId } = await context.params;
  return DepartmentController.updateDepartment(request, departmentId);
}
