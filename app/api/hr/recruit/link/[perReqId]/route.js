import { RecruitController } from "@/app/api/hr/recruit/recruitController";

export async function GET(request, context) {
  const { perReqId } = await context.params;
  return RecruitController.getApplyLink(request, perReqId);
}
