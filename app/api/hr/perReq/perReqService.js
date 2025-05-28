import prisma from "@/lib/prisma";

const formatDateOnly = (dateInput) => {
  if (!dateInput) return null;
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};

export class PerReqService {
  static async getAllPerReq() {
    return prisma.perReq.findMany({
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
        PerReqPositionId: {
          select: {
            positionNameTH: true,
            positionIdPosJobDes: {
              select: {
                posJobDesAge: true,
                posJobDesSex: true,
                posJobDesEducations: true,
                posJobDesSkill: true,
                posJobDesExperience: true,
                posJobDesResponsibility: true,
              },
            },
          },
        },
      },
    });
  }

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
        PerReqPositionId: {
          select: {
            positionNameTH: true,
            positionIdPosJobDes: {
              select: {
                posJobDesAge: true,
                posJobDesSex: true,
                posJobDesEducations: true,
                posJobDesSkill: true,
                posJobDesExperience: true,
                posJobDesResponsibility: true,
              },
            },
          },
        },
      },
    });
  }

  static async createPerReq(data) {
    data.perReqDesiredDate = formatDateOnly(data.perReqDesiredDate);
    return prisma.perReq.create({
      data: {
        ...data,
        perReqComputerSkills: data.perReqComputerSkills || [],
        perReqLanguageSkills: data.perReqLanguageSkills || [],
        perReqDrivingLicenses: data.perReqDrivingLicenses || [],
        perReqProfessionalLicenses: data.perReqProfessionalLicenses || [],
      },
    });
  }

  static async updatePerReq(perReqId, data) {
    if (data.perReqDesiredDate) {
      data.perReqDesiredDate = formatDateOnly(data.perReqDesiredDate);
    }
    return prisma.perReq.update({
      where: { perReqId },
      data: {
        ...data,
        perReqComputerSkills: data.perReqComputerSkills || [],
        perReqLanguageSkills: data.perReqLanguageSkills || [],
        perReqDrivingLicenses: data.perReqDrivingLicenses || [],
        perReqProfessionalLicenses: data.perReqProfessionalLicenses || [],
      },
    });
  }

  static async generateDocumentId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const startDate = new Date(`${year}-${month}-01T00:00:00.000Z`);
    const endDate = new Date(
      new Date(startDate).setMonth(startDate.getMonth() + 1)
    );

    const count = await prisma.perReq.count({
      where: {
        perReqCreateAt: {
          gte: startDate,
          lt: endDate,
        },
      },
    });

    const serial = (count + 1).toString().padStart(4, "0");
    return `perReq-${month}-${year}-${serial}`;
  }
}
