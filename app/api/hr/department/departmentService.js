import prisma from "@/lib/prisma";

export class DepartmentService {
  static async getAllDepartment() {
    return prisma.department.findMany({
      include: {
        DepartmentDivisionId: {
          select: { divisionName: true },
        },
        DepartmentCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        DepartmentUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }

  static async getDepartmentByNameAndDivision(
    departmentName,
    departmentDivisionId
  ) {
    return prisma.department.findFirst({
      where: {
        departmentName,
        departmentDivisionId,
      },
    });
  }

  static async createDepartment(data) {
    return prisma.department.create({ data });
  }

  static async getDepartmentById(departmentId) {
    return prisma.department.findUnique({
      where: { departmentId },
      include: {
        DepartmentDivisionId: {
          select: { divisionName: true },
        },
        DepartmentCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        DepartmentUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }

  static async updateDepartment(departmentId, data) {
    return prisma.department.update({
      where: { departmentId },
      data,
    });
  }
}
