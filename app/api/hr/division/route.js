import { DivisionController } from "@/app/api/hr/division/divisionController";

export async function GET(request) {
  return DivisionController.getAllDivision(request);
}

export async function POST(request) {
  return DivisionController.createDivision(request);
}
