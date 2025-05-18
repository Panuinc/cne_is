import { DepartmentController } from "@/app/api/hr/department/departmentController";

export async function GET(request) {
  return DepartmentController.getAllDepartment(request);
}

export async function POST(request) {
  return DepartmentController.createDepartment(request);
}
