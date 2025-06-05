import { RecruitController } from "@/app/api/hr/recruit/recruitController";

export async function GET(request, context) {
  const { slug } = await context.params;
  return RecruitController.getRecruitBySlug(request, slug);
}
