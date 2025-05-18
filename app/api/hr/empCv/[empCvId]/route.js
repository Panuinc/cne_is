import { EmpCvController } from "@/app/api/hr/empCv/empCvController";

export async function GET(request, context) {
  const { empCvId } = await context.params;
  return EmpCvController.getEmpCvById(request, empCvId);
}

export async function PUT(request, context) {
  const { empCvId } = await context.params;
  return EmpCvController.updateEmpCv(request, empCvId);
}
