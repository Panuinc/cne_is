import { PositionController } from "@/app/api/hr/position/positionController";

export async function GET(request) {
  return PositionController.getAllPosition(request);
}

export async function POST(request) {
  return PositionController.createPosition(request);
}
