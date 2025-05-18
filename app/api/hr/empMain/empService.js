import prisma from "@/lib/prisma";

const formatDateOnly = (dateInput) => {
  if (!dateInput) return null;
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};
export class EmpService {
  static async getAllEmp() {
    return prisma.emp.findMany({
      include: {
        EmpCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        empEmpUser: {
          include: {
            EmpUserCreateBy: {
              select: { empFirstNameTH: true, empLastNameTH: true },
            },
            EmpUserUpdateBy: {
              select: { empFirstNameTH: true, empLastNameTH: true },
            },
          },
        },
        empEmpEmployment: {
          include: {
            EmpEmploymentDivisionId: {
              select: { divisionName: true },
            },
            EmpEmploymentDepartmentId: {
              select: { departmentName: true },
            },
            EmpEmploymentPositionId: {
              select: { positionNameTH: true },
            },
            EmpEmploymentRoleId: {
              select: { roleName: true },
            },
            EmpEmploymentParentBy: {
              select: { empFirstNameTH: true, empLastNameTH: true },
            },
          },
        },
        empEmpDocument: true,
        empEmpCv: true,
      },
    });
  }

  static async getEmpByIdCard(empIdCard) {
    return prisma.emp.findFirst({ where: { empIdCard } });
  }

  static async createEmp(data) {
    data.empBirthday = formatDateOnly(data.empBirthday);

    return await prisma.$transaction(async (tx) => {
      const newEmp = await tx.emp.create({ data });

      await tx.empUser.create({
        data: {
          empUserEmpId: newEmp.empId,
          empUserCreateBy: newEmp.empCreateBy,
        },
      });

      await tx.empEmployment.create({
        data: {
          empEmploymentEmpId: newEmp.empId,
          empEmploymentCreateBy: newEmp.empCreateBy,
        },
      });

      await tx.empDocument.create({
        data: {
          empDocumentEmpId: newEmp.empId,
          empDocumentCreateBy: newEmp.empCreateBy,
        },
      });

      await tx.empCv.create({
        data: {
          empCvEmpId: newEmp.empId,
          empCvCreateBy: 1,
        },
      });

      return newEmp;
    });
  }

  static async getEmpById(empId) {
    return prisma.emp.findUnique({
      where: { empId },
      include: {
        EmpCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        empEmpUser: {
          include: {
            EmpUserCreateBy: {
              select: { empFirstNameTH: true, empLastNameTH: true },
            },
            EmpUserUpdateBy: {
              select: { empFirstNameTH: true, empLastNameTH: true },
            },
          },
        },
        empEmpEmployment: {
          include: {
            EmpEmploymentDivisionId: {
              select: { divisionName: true },
            },
            EmpEmploymentDepartmentId: {
              select: { departmentName: true },
            },
            EmpEmploymentPositionId: {
              select: { positionNameTH: true },
            },
            EmpEmploymentRoleId: {
              select: { roleName: true },
            },
            EmpEmploymentParentBy: {
              select: { empFirstNameTH: true, empLastNameTH: true },
            },
          },
        },
        empEmpDocument: true,
        empEmpCv: true,
      },
    });
  }

  static async updateEmp(empId, data) {
    if (data.empBirthday) {
      data.empBirthday = formatDateOnly(data.empBirthday);
    }
    return prisma.emp.update({
      where: { empId },
      data,
    });
  }
}
