import { RecruitController } from "@/app/api/hr/recruit/recruitController";

export async function GET(request, context) {
  const { recruitId } = await context.params;
  return RecruitController.getRecruitById(request, recruitId);
}

export async function PUT(request, context) {
  const { recruitId } = await context.params;
  return RecruitController.updateRecruit(request, recruitId);
}
