import prisma from "@/lib/prisma";

export class PosJobDesService {
  static async getPosJobDesById(posJobDesId) {
    return prisma.posJobDes.findUnique({
      where: { posJobDesId },
      include: {
        PosJobDesPositionId: {
          include: {
            PositionDivisionId: {
              select: { divisionName: true },
            },
            PositionDepartmentId: {
              select: { departmentName: true },
            },
            PositionCreateBy: {
              select: { empFirstNameTH: true, empLastNameTH: true },
            },
            PositionUpdateBy: {
              select: { empFirstNameTH: true, empLastNameTH: true },
            },
          },
        },
      },
    });
  }

  static async updatePosJobDes(posJobDesId, data) {
    return prisma.posJobDes.update({
      where: { posJobDesId },
      data,
    });
  }
}
