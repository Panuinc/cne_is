import { UserController } from "@/app/api/other/changPassPin/changPassPinController";

export async function POST(request) {
  return UserController.updatePassword(request);
}
