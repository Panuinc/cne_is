import prisma from "@/lib/prisma";

const formatDateOnly = (dateInput) => {
  if (!dateInput) return null;
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};
export class EmpEmploymentService {
  static async getEmpEmploymentById(empEmploymentId) {
    return prisma.empEmployment.findUnique({
      where: { empEmploymentId },
      include: {
        EmpEmploymentRoleId: {
          select: { roleName: true },
        },
        EmpEmploymentDivisionId: {
          select: { divisionName: true },
        },
        EmpEmploymentDepartmentId: {
          select: { departmentName: true },
        },
        EmpEmploymentPositionId: {
          select: { positionNameTH: true },
        },
        EmpEmploymentParentBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpEmploymentCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpEmploymentUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpEmploymentEmpBy: {
          select: { empCitizen: true },
        },
      },
    });
  }

  static async updateEmpEmployment(empEmploymentId, data) {
    if (data.empEmploymentStartWork) {
      data.empEmploymentStartWork = formatDateOnly(data.empEmploymentStartWork);
    }
    if (data.empEmploymentPassportStartDate) {
      data.empEmploymentPassportStartDate = formatDateOnly(
        data.empEmploymentPassportStartDate
      );
    }
    if (data.empEmploymentPassportEndDate) {
      data.empEmploymentPassportEndDate = formatDateOnly(
        data.empEmploymentPassportEndDate
      );
    }
    if (data.empEmploymentEnterDate) {
      data.empEmploymentEnterDate = formatDateOnly(data.empEmploymentEnterDate);
    }
    if (data.empEmploymentWorkPermitStartDate) {
      data.empEmploymentWorkPermitStartDate = formatDateOnly(
        data.empEmploymentWorkPermitStartDate
      );
    }
    if (data.empEmploymentWorkPermitEndDate) {
      data.empEmploymentWorkPermitEndDate = formatDateOnly(
        data.empEmploymentWorkPermitEndDate
      );
    }
    return prisma.empEmployment.update({
      where: { empEmploymentId },
      data,
    });
  }
}
