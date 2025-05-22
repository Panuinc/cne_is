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
    { message: "Please provide the per req desired day" }
  ),
  perReqDivisionId: preprocessInt("Please provide the division name"),

  perReqDepartmentId: preprocessInt("Please provide the department name"),

  perReqPositionId: preprocessInt("Please provide the position name"),

  perReqAmount: preprocessInt("Please provide the per req amount"),

  perReqEmpEmploymentType: preprocessEnum(
    ["Monthly", "Daily", "Contract"],
    "Please provide the per req emp employment type as 'Monthly' or 'Daily' or 'Contract'"
  ),
  perReqEmpEmploymentTypeNote: preprocessString(
    "Please provide the per req emp employment note"
  ).optional(),

  perReqReasonForRequest: preprocessEnum(
    ["Replace", "New"],
    "Please provide the per req reason for request as 'Replace' or 'New'"
  ),
  perReqReasonForRequestNote: preprocessString(
    "Please provide the per req reason for request note"
  ).optional(),

  perReqReasonAge: preprocessString("Please provide the per req age"),

  perReqReasonGender: preprocessEnum(
    ["Male", "FeMale", "Other"],
    "Please provide the per req reason gender as 'Male' or 'FeMale' or 'Other'"
  ),

  perReqReasonEducation: preprocessEnum(
    [
      "PrimaryEducation",
      "SecondaryEducation",
      "VocationalCertificate",
      "HighVocationalCertificate",
      "BachelorMasterDegree",
    ],
    "Please provide the per req reason education as 'PrimaryEducation' or 'SecondaryEducation' or 'VocationalCertificate' or 'HighVocationalCertificate' or 'BachelorMasterDegree'"
  ),
  perReqReasonEducationNote: preprocessString(
    "Please provide the per req reason education note"
  ).optional(),

  perReqReasonExperience: preprocessEnum(
    ["NoneExperience", "Experience1To3Years", "Experience4YearsUp"],
    "Please provide the per req reason gender as 'NoneExperience' or 'Experience1To3Years' or 'Experience4YearsUp'"
  ),

  perReqReasonComputerSkill: preprocessEnum(
    ["MicrosoftOffice", "Other"],
    "Please provide the per req reason computer skill as 'MicrosoftOffice' or 'Other'"
  ),
  perReqReasonComputerSkillNote: preprocessString(
    "Please provide the per req reason computer skill note"
  ).optional(),

  perReqReasonEnglishSkill: preprocessEnum(
    ["Basic", "Good", "Excellent"],
    "Please provide the per req reason english skill as 'Basic' or 'Good' or 'Excellent'"
  ),

  perReqReasonOtherSkill: preprocessString(
    "Please provide the per req reason other skill"
  ),

  perReqCreateBy: preprocessInt("Please provide the creator's user ID"),
});

export const perReqPutSchema = z.object({
  perReqId: preprocessInt("Please provide the per req ID to update"),

  perReqDesiredDate: preprocessDate.refine(
    (date) => date === null || date instanceof Date,
    { message: "Please provide the per req desired day" }
  ),
  perReqDivisionId: preprocessInt("Please provide the division name"),

  perReqDepartmentId: preprocessInt("Please provide the department name"),

  perReqPositionId: preprocessInt("Please provide the position name"),

  perReqAmount: preprocessInt("Please provide the per req amount"),

  perReqEmpEmploymentType: preprocessEnum(
    ["Monthly", "Daily", "Contract"],
    "Please provide the per req emp employment type as 'Monthly' or 'Daily' or 'Contract'"
  ),
  perReqEmpEmploymentTypeNote: preprocessString(
    "Please provide the per req emp employment note"
  ).optional(),

  perReqReasonForRequest: preprocessEnum(
    ["Replace", "New"],
    "Please provide the per req reason for request as 'Replace' or 'New'"
  ),
  perReqReasonForRequestNote: preprocessString(
    "Please provide the per req reason for request note"
  ).optional(),

  perReqReasonAge: preprocessString("Please provide the per req age"),

  perReqReasonGender: preprocessEnum(
    ["Male", "FeMale", "Other"],
    "Please provide the per req reason gender as 'Male' or 'FeMale' or 'Other'"
  ),

  perReqReasonEducation: preprocessEnum(
    [
      "PrimaryEducation",
      "SecondaryEducation",
      "VocationalCertificate",
      "HighVocationalCertificate",
      "BachelorMasterDegree",
    ],
    "Please provide the per req reason education as 'PrimaryEducation' or 'SecondaryEducation' or 'VocationalCertificate' or 'HighVocationalCertificate' or 'BachelorMasterDegree'"
  ),
  perReqReasonEducationNote: preprocessString(
    "Please provide the per req reason education note"
  ).optional(),

  perReqReasonExperience: preprocessEnum(
    ["NoneExperience", "Experience1To3Years", "Experience4YearsUp"],
    "Please provide the per req reason gender as 'NoneExperience' or 'Experience1To3Years' or 'Experience4YearsUp'"
  ),

  perReqReasonComputerSkill: preprocessEnum(
    ["MicrosoftOffice", "Other"],
    "Please provide the per req reason computer skill as 'MicrosoftOffice' or 'Other'"
  ),
  perReqReasonComputerSkillNote: preprocessString(
    "Please provide the per req reason computer skill note"
  ).optional(),

  perReqReasonEnglishSkill: preprocessEnum(
    ["Basic", "Good", "Excellent"],
    "Please provide the per req reason english skill as 'Basic' or 'Good' or 'Excellent'"
  ),

  perReqReasonOtherSkill: preprocessString(
    "Please provide the per req reason other skill"
  ),

  perReqStatus: preprocessEnum(
    ["PendingManagerApprove", "PendingHrApprove", "ApprovedSuccess", "Cancel"],
    "Please provide the status as 'PendingManagerApprove' or 'PendingHrApprove' or 'ApprovedSuccess' or 'Cancel'"
  ),

  perReqUpdateBy: preprocessInt("Please provide the updater's user ID"),
  perReqReasonManagerApproveBy: preprocessInt(
    "Please provide the updater's user ID"
  ).optional(),
  perReqReasonHrApproveBy: preprocessInt(
    "Please provide the updater's user ID"
  ).optional(),
});
