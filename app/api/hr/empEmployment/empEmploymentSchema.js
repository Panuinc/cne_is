import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  preprocessDate,
  preprocessAny,
  formatData,
} from "@/lib/zodSchema";

export const formatEmpEmploymentData = (empEmployments) =>
  formatData(
    empEmployments,
    [
      "empEmploymentStartWork",
      "empEmploymentPassportStartDate",
      "empEmploymentPassportEndDate",
      "empEmploymentEnterDate",
      "empEmploymentWorkPermitStartDate",
      "empEmploymentWorkPermitEndDate",
    ],
    ["empEmploymentCreateAt", "empEmploymentUpdateAt"]
  );

export const empEmploymentPutSchema = z.object({
  empEmploymentId: preprocessInt("Please provide employment ID"),
  empEmploymentNumber: preprocessString("Please provide employment number"),
  empEmploymentCardNumber: preprocessString("Please provide card number"),
  empEmploymentType: preprocessEnum(
    ["Daily", "Monthly", "Monthly_For_Persons_Disabilities"],
    "Please provide a valid employment type"
  ),
  empEmploymentDivisionId: preprocessInt("Please provide division name"),
  empEmploymentDepartmentId: preprocessInt("Please provide department name"),
  empEmploymentPositionId: preprocessInt("Please provide position name"),
  empEmploymentRoleId: preprocessInt("Please provide role name"),
  empEmploymentParentId: preprocessInt("Please provide supervisor name"),
  empEmploymentStartWork: preprocessDate.refine(
    (date) => date === null || date instanceof Date,
    { message: "Please provide start work date" }
  ),
  empEmploymentPicture: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),
  empEmploymentSignature: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),

  empEmploymentEnterType: preprocessString(
    "Please provide enter type"
  ).optional(),
  empEmploymentPassportNumber: preprocessString(
    "Please provide passport number"
  ).optional(),
  empEmploymentPassportStartDate: preprocessDate
    .refine((date) => date === null || date instanceof Date, {
      message: "Please provide passport start date",
    })
    .optional(),
  empEmploymentPassportEndDate: preprocessDate
    .refine((date) => date === null || date instanceof Date, {
      message: "Please provide passport end date",
    })
    .optional(),
  empEmploymentPassportIssuedBy: preprocessString(
    "Please provide passport issued place"
  ).optional(),
  empEmploymentPlaceOfBirth: preprocessString(
    "Please provide place of birth"
  ).optional(),
  empEmploymentEnterCheckPoint: preprocessString(
    "Please provide checkpoint"
  ).optional(),
  empEmploymentEnterDate: preprocessDate
    .refine((date) => date === null || date instanceof Date, {
      message: "Please provide enter date",
    })
    .optional(),
  empEmploymentImmigration: preprocessString(
    "Please provide immigration number"
  ).optional(),
  empEmploymentTypeOfVisa: preprocessString(
    "Please provide visa type"
  ).optional(),
  empEmploymentVisaNumber: preprocessString(
    "Please provide visa number"
  ).optional(),
  empEmploymentVisaIssuedBy: preprocessString(
    "Please provide visa issued place"
  ).optional(),
  empEmploymentWorkPermitNumber: preprocessString(
    "Please provide work permit number"
  ).optional(),
  empEmploymentWorkPermitStartDate: preprocessDate
    .refine((date) => date === null || date instanceof Date, {
      message: "Please provide work permit start date",
    })
    .optional(),
  empEmploymentWorkPermitEndDate: preprocessDate
    .refine((date) => date === null || date instanceof Date, {
      message: "Please provide work permit end date",
    })
    .optional(),
  empEmploymentWorkPermitIssuedBy: preprocessString(
    "Please provide work permit issued place"
  ).optional(),
  empEmploymentSsoNumber: preprocessString(
    "Please provide social security number"
  ).optional(),
  empEmploymentSsoHospital: preprocessString(
    "Please provide hospital name"
  ).optional(),

  empEmploymentUpdateBy: preprocessInt("Please provide updater ID"),
});
