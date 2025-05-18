import { EmpCvTHController } from "@/app/api/hr/empCv/empCvTHPDF/empCvTHPDFController";

export async function GET(request, context) {
  const { empCvId } = await context.params;
  return EmpCvTHController.getEmpCvTHPdf(request, empCvId);
}
