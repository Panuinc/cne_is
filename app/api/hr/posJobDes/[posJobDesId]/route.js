import { PosJobDesController } from "@/app/api/hr/posJobDes/posJobDesController";

export async function GET(request, context) {
  const { posJobDesId } = await context.params;
  return PosJobDesController.getPosJobDesById(request, posJobDesId);
}

export async function PUT(request, context) {
  const { posJobDesId } = await context.params;
  return PosJobDesController.updatePosJobDes(request, posJobDesId);
}
