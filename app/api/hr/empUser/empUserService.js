import prisma from "@/lib/prisma";

export class EmpUserService {
  static async getEmpUserById(empUserId) {
    return prisma.empUser.findUnique({
      where: { empUserId },
      include: {
        EmpUserCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpUserUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }

  static async updateEmpUser(empUserId, data) {
    return prisma.empUser.update({
      where: { empUserId },
      data,
    });
  }
}
