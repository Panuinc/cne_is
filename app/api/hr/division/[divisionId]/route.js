import { DivisionController } from "@/app/api/hr/division/divisionController";

export async function GET(request, context) {
  const { divisionId } = await context.params;
  return DivisionController.getDivisionById(request, divisionId);
}

export async function PUT(request, context) {
  const { divisionId } = await context.params;
  return DivisionController.updateDivision(request, divisionId);
}
