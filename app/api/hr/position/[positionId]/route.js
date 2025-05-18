import { PositionController } from "@/app/api/hr/position/positionController";

export async function GET(request, context) {
  const { positionId } = await context.params;
  return PositionController.getPositionById(request, positionId);
}

export async function PUT(request, context) {
  const { positionId } = await context.params;
  return PositionController.updatePosition(request, positionId);
}
