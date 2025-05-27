import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  preprocessDate,
  formatData,
} from "@/lib/zodSchema";

export const formatPerReqData = (perReq) =>
  formatData(
    perReq,
    ["perReqDesiredDate"],
    [
      "perReqCreateAt",
      "perReqUpdateAt",
      "perReqReasonManagerApproveAt",
      "perReqReasonHrApproveAt",
    ]
  );

export const perReqPostSchema = z.object({
  perReqDesiredDate: preprocessDate.refine(
    (date) => date === null || date instanceof Date,
    { message: "Please provide the desired date." }
  ),
  perReqDivisionId: preprocessInt("Please provide the division ID."),
  perReqDepartmentId: preprocessInt("Please provide the department ID."),
  perReqPositionId: preprocessInt("Please provide the position ID."),
  perReqAmount: preprocessInt("Please provide the requested amount."),

  perReqEmpEmploymentType: preprocessEnum(
    ["Monthly", "Daily", "Contract"],
    "Please select an employment type."
  ),
  perReqEmpEmploymentTypeNote: preprocessString(
    "Please provide employment type note."
  ).optional(),

  perReqReasonForRequest: preprocessEnum(
    ["Replace", "New"],
    "Please select a request reason."
  ),
  perReqReasonForRequestNote: preprocessString(
    "Please provide request reason note."
  ).optional(),

  perReqReasonAge: preprocessString("Please provide the age reason."),
  perReqReasonGender: preprocessEnum(
    ["Male", "FeMale", "Other"],
    "Please select a gender."
  ),

  perReqReasonEducation: preprocessEnum(
    [
      "PrimaryEducation",
      "SecondaryEducation",
      "VocationalCertificate",
      "HighVocationalCertificate",
      "BachelorMasterDegree",
    ],
    "Please select an education level."
  ),
  perReqReasonEducationNote: preprocessString(
    "Please provide education note."
  ).optional(),

  perReqReasonExperience: preprocessEnum(
    ["NoneExperience", "Experience1To4Years", "Experience5YearsUp"],
    "Please select experience level."
  ),

  perReqComputerSkills: z.array(z.any()).optional(),
  perReqLanguageSkills: z.array(z.any()).optional(),
  perReqDrivingLicenses: z.array(z.any()).optional(),
  perReqProfessionalLicenses: z.array(z.any()).optional(),

  perReqCreateBy: preprocessInt("Please provide creator user ID."),
});

export const perReqPutSchema = z
  .object({
    perReqId: preprocessInt("Please provide perReq record ID."),
    perReqStatus: preprocessEnum(
      [
        "PendingManagerApprove",
        "PendingHrApprove",
        "ApprovedSuccess",
        "Cancel",
      ],
      "Please select a status."
    ),
  })
  .merge(
    z
      .object({
        perReqDesiredDate: preprocessDate.optional(),
        perReqDivisionId: preprocessInt().optional(),
        perReqDepartmentId: preprocessInt().optional(),
        perReqPositionId: preprocessInt().optional(),
        perReqAmount: preprocessInt().optional(),

        perReqEmpEmploymentType: preprocessEnum(
          ["Monthly", "Daily", "Contract"],
          ""
        ).optional(),
        perReqEmpEmploymentTypeNote: preprocessString().optional(),

        perReqReasonForRequest: preprocessEnum(
          ["Replace", "New"],
          ""
        ).optional(),
        perReqReasonForRequestNote: preprocessString().optional(),

        perReqReasonAge: preprocessString().optional(),
        perReqReasonGender: preprocessEnum(
          ["Male", "FeMale", "Other"],
          ""
        ).optional(),

        perReqReasonEducation: preprocessEnum(
          [
            "PrimaryEducation",
            "SecondaryEducation",
            "VocationalCertificate",
            "HighVocationalCertificate",
            "BachelorMasterDegree",
          ],
          ""
        ).optional(),
        perReqReasonEducationNote: preprocessString().optional(),

        perReqReasonExperience: preprocessEnum(
          ["NoneExperience", "Experience1To4Years", "Experience5YearsUp"],
          ""
        ).optional(),

        perReqComputerSkills: z.array(z.any()).optional(),
        perReqLanguageSkills: z.array(z.any()).optional(),
        perReqDrivingLicenses: z.array(z.any()).optional(),
        perReqProfessionalLicenses: z.array(z.any()).optional(),
      })
      .partial()
  )
  .merge(
    z.object({
      perReqReasonManagerApproveBy: preprocessInt().optional(),
      perReqReasonHrApproveBy: preprocessInt().optional(),
      perReqUpdateBy: preprocessInt().optional(),
    })
  )
  .strip();
