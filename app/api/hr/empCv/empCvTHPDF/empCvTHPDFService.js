import prisma from "@/lib/prisma";

export class EmpCvTHService {
  static async getEmpCvTHById(empCvId) {
    return prisma.empCv.findUnique({
      where: { empCvId },
      include: {
        EmpCvEmpBy: {
          include: {
            empEmpEmployment: {
              include: {
                EmpEmploymentPositionId: {
                  select: { positionNameTH: true },
                },
              },
            },
          },
        },
        empCvEducation: true,
        empCvLicense: true,
        empCvWorkHistory: {
          include: {
            empCvProjects: true,
          },
        },
        empCvLanguageSkill: true,
        EmpCvCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpCvUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
      },
    });
  }
}
