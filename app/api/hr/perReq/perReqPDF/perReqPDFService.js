import prisma from "@/lib/prisma";

export class PerReqService {
  static async getPerReqById(perReqId) {
    return prisma.perReq.findUnique({
      where: { perReqId },
      include: {
        PerReqCreateBy: {
          select: {
            empFirstNameTH: true,
            empLastNameTH: true,
            empEmpEmployment: {
              orderBy: { empEmploymentCreateAt: "desc" },
              take: 1,
              select: {
                empEmploymentSignature: true,
                empEmploymentParentId: true,
                EmpEmploymentParentBy: {
                  select: {
                    empId: true,
                    empFirstNameTH: true,
                    empLastNameTH: true,
                    empEmail: true,
                    empTel: true,
                    empIdCard: true,
                  },
                },
                EmpEmploymentRoleId: {
                  select: {
                    roleName: true,
                  },
                },
                EmpEmploymentDivisionId: {
                  select: {
                    divisionName: true,
                  },
                },
              },
            },
          },
        },
        PerReqUpdateBy: {
          select: {
            empFirstNameTH: true,
            empLastNameTH: true,
            empEmpEmployment: {
              orderBy: { empEmploymentCreateAt: "desc" },
              take: 1,
              select: {
                empEmploymentSignature: true,
                EmpEmploymentRoleId: {
                  select: {
                    roleName: true,
                  },
                },
                EmpEmploymentDivisionId: {
                  select: {
                    divisionName: true,
                  },
                },
              },
            },
          },
        },
        PerReqManagerApproveBy: {
          select: {
            empFirstNameTH: true,
            empLastNameTH: true,
            empEmpEmployment: {
              orderBy: { empEmploymentCreateAt: "desc" },
              take: 1,
              select: {
                empEmploymentSignature: true,
                EmpEmploymentRoleId: {
                  select: {
                    roleName: true,
                  },
                },
                EmpEmploymentDivisionId: {
                  select: {
                    divisionName: true,
                  },
                },
              },
            },
          },
        },
        PerReqHrApproveBy: {
          select: {
            empFirstNameTH: true,
            empLastNameTH: true,
            empEmpEmployment: {
              orderBy: { empEmploymentCreateAt: "desc" },
              take: 1,
              select: {
                empEmploymentSignature: true,
                EmpEmploymentRoleId: {
                  select: {
                    roleName: true,
                  },
                },
                EmpEmploymentDivisionId: {
                  select: {
                    divisionName: true,
                  },
                },
              },
            },
          },
        },
        PerReqDivisionId: { select: { divisionName: true } },
        PerReqDepartmentId: { select: { departmentName: true } },
        PerReqPositionId: { select: { positionNameTH: true } },
      },
    });
  }
}
