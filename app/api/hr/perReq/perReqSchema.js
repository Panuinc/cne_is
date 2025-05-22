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
    ["Male", "Female", "Other"],
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

  perReqReasonComputerSkills: z
    .array(
      z.object({
        perReqComputerSkillName: preprocessString(
          "Please provide computer skill name."
        ),
        perReqComputerSkillIsOther: z.boolean().optional(),
      })
    )
    .optional(),

  perReqReasonLanguageSkills: z
    .array(
      z.object({
        perReqLanguage: preprocessEnum(
          ["Thai", "Chinese", "English", "Japanese", "None"],
          "Please select a language."
        ),
        perReqLanguageSkillLevel: preprocessEnum(
          ["Basic", "Good", "Excellent"],
          "Please select a proficiency level."
        ),
      })
    )
    .optional(),

  perReqDrivingLicenses: z
    .array(
      z.object({
        perReqDrivingLicenseType: preprocessString(
          "Please provide driving license type."
        ),
      })
    )
    .optional(),

  perReqProfessionalLicenses: z
    .array(
      z.object({
        perReqProfessionalLicenseName: preprocessString(
          "Please provide professional license name."
        ),
      })
    )
    .optional(),
  perReqCreateBy: preprocessInt("Please provide creator user ID."),
});

export const perReqPutSchema = z
  .object({
    perReqId: preprocessInt("Please provide perReq record ID."),
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
      ["Male", "Female", "Other"],
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

    perReqReasonComputerSkills: z
      .array(
        z.object({
          perReqComputerSkillName: preprocessString(
            "Please provide computer skill name."
          ),
          perReqComputerSkillIsOther: z.boolean().optional(),
        })
      )
      .optional(),

    perReqReasonLanguageSkills: z
      .array(
        z.object({
          perReqLanguage: preprocessEnum(
            ["Thai", "Chinese", "English", "Japanese", "None"],
            "Please select a language."
          ),
          perReqLanguageSkillLevel: preprocessEnum(
            ["Basic", "Good", "Excellent"],
            "Please select a proficiency level."
          ),
        })
      )
      .optional(),

    perReqDrivingLicenses: z
      .array(
        z.object({
          perReqDrivingLicenseType: preprocessString(
            "Please provide driving license type."
          ),
        })
      )
      .optional(),

    perReqProfessionalLicenses: z
      .array(
        z.object({
          perReqProfessionalLicenseName: preprocessString(
            "Please provide professional license name."
          ),
        })
      )
      .optional(),

    perReqStatus: preprocessEnum(
      [
        "PendingManagerApprove",
        "PendingHrApprove",
        "ApprovedSuccess",
        "Cancel",
      ],
      "Please select a status."
    ),
    perReqUpdateBy: preprocessInt("Please provide updater user ID."),
    perReqReasonManagerApproveBy: preprocessInt(
      "Please provide manager approver user ID."
    ).optional(),
    perReqReasonHrApproveBy: preprocessInt(
      "Please provide HR approver user ID."
    ).optional(),
  })
  .strip();
