import prisma from "@/lib/prisma";

export class EmpDocumentService {
  static async getEmpDocumentById(empDocumentId) {
    return prisma.empDocument.findUnique({
      where: { empDocumentId },
      include: {
        EmpDocumentCreateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpDocumentUpdateBy: {
          select: { empFirstNameTH: true, empLastNameTH: true },
        },
        EmpDocumentEmpBy: {
          select: { empCitizen: true },
        },
      },
    });
  }

  static async updateEmpDocument(empDocumentId, data) {
    return prisma.empDocument.update({
      where: { empDocumentId },
      data,
    });
  }
}
