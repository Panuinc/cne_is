import { PerReqController } from "@/app/api/hr/perReq/perReqController";

export async function GET(request) {
  return PerReqController.getAllPerReq(request);
}

export async function POST(request) {
  return PerReqController.createPerReq(request);
}
