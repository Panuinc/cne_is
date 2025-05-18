import { EmpCvENController } from "@/app/api/hr/empCv/empCvENPDF/empCvENPDFController";

export async function GET(request, context) {
  const { empCvId } = await context.params;
  return EmpCvENController.getEmpCvENPdf(request, empCvId);
}
