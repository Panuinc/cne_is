import { PosJobDesPDFController } from "@/app/api/hr/posJobDes/posJobDesPDF/posJobDesPDFController";

export async function GET(request, context) {
  const { posJobDesId } = await context.params;
  return PosJobDesPDFController.getPosJobDesPdf(request, posJobDesId);
}
