import { EmpEmploymentController } from "@/app/api/hr/empEmployment/empEmploymentController";

export async function GET(request, context) {
  const { empEmploymentId } = await context.params;
  return EmpEmploymentController.getEmpEmploymentById(request, empEmploymentId);
}

export async function PUT(request, context) {
  const { empEmploymentId } = await context.params;
  return EmpEmploymentController.updateEmpEmployment(request, empEmploymentId);
}
