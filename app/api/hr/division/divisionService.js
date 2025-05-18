import prisma from "@/lib/prisma";

export class DivisionService {
  static async getAllDivision() {
    return prisma.division.findMany({
      include: {
        DivisionCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        DivisionUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }

  static async getDivisionByName(divisionName) {
    return prisma.division.findFirst({ where: { divisionName } });
  }

  static async createDivision(data) {
    return prisma.division.create({ data });
  }

  static async getDivisionById(divisionId) {
    return prisma.division.findUnique({
      where: { divisionId },
      include: {
        DivisionCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        DivisionUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }

  static async updateDivision(divisionId, data) {
    return prisma.division.update({
      where: { divisionId },
      data,
    });
  }
}
