import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class UserService {
  static async updateUserPassword(data) {
    const { userId, newPassword, pin } = data;

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const hashedPin = await bcrypt.hash(pin, 10);

    return prisma.empUser.update({
      where: { empUserId: Number(userId) },
      data: {
        empUserPassword: hashedPassword,
        empUserPin: hashedPin,
        isFirstLogin: false,
      },
    });
  }
}
