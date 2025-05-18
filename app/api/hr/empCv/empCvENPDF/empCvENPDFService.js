import prisma from "@/lib/prisma";

export class EmpCvENService {
  static async getEmpCvENById(empCvId) {
    return prisma.empCv.findUnique({
      where: { empCvId },
      include: {
        EmpCvEmpBy: {
          include: {
            empEmpEmployment: {
              include: {
                EmpEmploymentPositionId: {
                  select: { positionNameEN: true },
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
          select: { empFirstNameEN: true, empLastNameEN: true },
        },
        EmpCvUpdateBy: {
          select: { empFirstNameEN: true, empLastNameEN: true },
        },
      },
    });
  }
}
