import prisma from "@/lib/prisma";

export class PositionService {
  static async getAllPosition() {
    return prisma.position.findMany({
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
        positionIdPosJobDes: {},
      },
    });
  }

  static async getPositionByName(positionNameTH) {
    return prisma.position.findFirst({ where: { positionNameTH } });
  }

  static async createPosition(data) {
    return await prisma.$transaction(async (tx) => {
      const newPosition = await tx.position.create({ data });

      await tx.posJobDes.create({
        data: {
          posJobDesPositionId: newPosition.positionId,
        },
      });

      return newPosition;
    });
  }

  static async getPositionById(positionId) {
    return prisma.position.findUnique({
      where: { positionId },
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
        positionIdPosJobDes: {},
      },
    });
  }

  static async updatePosition(positionId, data) {
    return prisma.position.update({
      where: { positionId },
      data,
    });
  }
}
