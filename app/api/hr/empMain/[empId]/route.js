import { EmpController } from "@/app/api/hr/empMain/empController";

export async function GET(request, context) {
  const { empId } = await context.params;
  return EmpController.getEmpById(request, empId);
}

export async function PUT(request, context) {
  const { empId } = await context.params;
  return EmpController.updateEmp(request, empId);
}
