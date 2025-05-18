import { EmpController } from "@/app/api/hr/empMain/empController";

export async function GET(request) {
  return EmpController.getAllEmp(request);
}

export async function POST(request) {
  return EmpController.createEmp(request);
}
