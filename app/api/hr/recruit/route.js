import { RecruitController } from "@/app/api/hr/recruit/recruitController";

export async function GET(request) {
  return RecruitController.getAllRecruit(request);
}

export async function POST(request) {
  return RecruitController.createRecruit(request);
}
