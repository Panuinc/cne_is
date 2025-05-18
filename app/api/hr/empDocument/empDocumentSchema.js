import { z } from "zod";
import { preprocessInt, preprocessString, formatData } from "@/lib/zodSchema";

export const formatEmpDocumentData = (empDocuments) =>
  formatData(empDocuments, [], ["empDocumentCreateAt", "empDocumentUpdateAt"]);

export const empDocumentPutSchema = z.object({
  empDocumentId: preprocessInt("Please provide employment ID"),
  empDocumentIdCardFile: preprocessString(
    "Please provide empDocument id card file"
  ).optional(),
  empDocumentHomeFile: preprocessString(
    "Please provide empDocument home file"
  ).optional(),
  empDocumentProfessionalCertificateFile: preprocessString(
    "Please provide empDocument professional certificate file"
  ).optional(),
  empDocumentEducationsFile: preprocessString(
    "Please provide empDocument educations file"
  ).optional(),
  empDocumentPassportFile: preprocessString(
    "Please provide empDocument passport file"
  ).optional(),
  empDocumentImmigrationFile: preprocessString(
    "Please provide empDocument immigration file"
  ).optional(),
  empDocumentVisa1File: preprocessString(
    "Please provide empDocument visa 1 file"
  ).optional(),
  empDocumentVisa2File: preprocessString(
    "Please provide empDocument visa 2 file"
  ).optional(),
  empDocumentVisa3File: preprocessString(
    "Please provide empDocument visa 3 file"
  ).optional(),
  empDocumentVisa4File: preprocessString(
    "Please provide empDocument visa 4 file"
  ).optional(),
  empDocumentVisa5File: preprocessString(
    "Please provide empDocument visa 5 file"
  ).optional(),
  empDocumentWorkPermit1File: preprocessString(
    "Please provide empDocument work permit 1 file"
  ).optional(),
  empDocumentWorkPermit2File: preprocessString(
    "Please provide empDocument work permit 2 file"
  ).optional(),
  empDocumentWorkPermit3File: preprocessString(
    "Please provide empDocument work permit 3 file"
  ).optional(),
  empDocumentWorkPermit4File: preprocessString(
    "Please provide empDocument work permit 4 file"
  ).optional(),
  empDocumentWorkPermit5File: preprocessString(
    "Please provide empDocument work permit 5 file"
  ).optional(),
  empDocumentOldPlaceFile: preprocessString(
    "Please provide empDocument old place file"
  ).optional(),
  empDocumentEmployerChange1File: preprocessString(
    "Please provide empDocument employer change 1 file"
  ).optional(),
  empDocumentEmployerChange2File: preprocessString(
    "Please provide empDocument employer change 2 file"
  ).optional(),
  empDocumentEmployerChange3File: preprocessString(
    "Please provide empDocument employer change 3 file"
  ).optional(),
  empDocumentEmployerChange4File: preprocessString(
    "Please provide empDocument employer change 4 file"
  ).optional(),
  empDocumentEmployerChange5File: preprocessString(
    "Please provide empDocument employer change 5 file"
  ).optional(),
  empDocumentUpdateBy: preprocessInt("Please provide updater ID"),
});
