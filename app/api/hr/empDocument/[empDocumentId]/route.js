import { EmpDocumentController } from "@/app/api/hr/empDocument/empDocumentController";

export async function GET(request, context) {
  const { empDocumentId } = await context.params;
  return EmpDocumentController.getEmpDocumentById(request, empDocumentId);
}

export async function PUT(request, context) {
  const { empDocumentId } = await context.params;
  return EmpDocumentController.updateEmpDocument(request, empDocumentId);
}
