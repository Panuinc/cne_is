import { PerReqImagesController } from "@/app/api/hr/perReq/perReqImages/perReqImagesController";

export async function GET(request, context) {
  const { perReqId } = await context.params;
  return PerReqImagesController.getPerReqImage(request, perReqId);
}
