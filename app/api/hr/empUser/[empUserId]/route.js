import { EmpUserController } from "@/app/api/hr/empUser/empUserController";

export async function GET(request, context) {
  const { empUserId } = await context.params;
  return EmpUserController.getEmpUserById(request, empUserId);
}

export async function PUT(request, context) {
  const { empUserId } = await context.params;
  return EmpUserController.updateEmpUser(request, empUserId);
}
