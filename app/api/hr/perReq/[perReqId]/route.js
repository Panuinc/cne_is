import { PerReqController } from "@/app/api/hr/perReq/perReqController";

export async function GET(request, context) {
  const { perReqId } = await context.params;
  return PerReqController.getPerReqById(request, perReqId);
}

export async function PUT(request, context) {
  const { perReqId } = await context.params;
  return PerReqController.updatePerReq(request, perReqId);
}
