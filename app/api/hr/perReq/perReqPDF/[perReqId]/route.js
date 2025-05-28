import { PerReqPDFController } from "@/app/api/hr/perReq/perReqPDF/perReqPDFController";

export async function GET(request, context) {
  const { perReqId } = await context.params;
  return PerReqPDFController.getPerReqPdf(request, perReqId);
}
