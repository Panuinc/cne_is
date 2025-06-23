import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  preprocessDate,
  formatData,
  preprocessAny,
} from "@/lib/zodSchema";

export const formatRecruitData = (recruits) =>
  formatData(
    recruits,
    [
      "recruitDetail.recruitDetailBirthDay",
      "recruitDetail.recruitDetailIdCardIssuedDate",
      "recruitDetail.recruitDetailIdCardEndDate",
    ],
    ["recruitCreateAt", "recruitUpdateAt"]
  );

const preprocessFloat = (msg = "Invalid number") =>
  z.preprocess(
    (val) => (val === "" || val == null ? undefined : parseFloat(val)),
    z.number({ required_error: msg, invalid_type_error: msg })
  );

export const recruitFamilyMembersSchema = z.object({
  recruitFamilyMemberRelation: preprocessEnum(
    ["Father", "Mother", "Elder", "Younger", "Wife", "Husband"],
    "Please select family relation"
  ),
  recruitFamilyMemberFullName: preprocessString("Please provide full name"),
  recruitFamilyMemberAge: preprocessInt("Please provide age"),
  recruitFamilyMemberOccupation: preprocessString("Please provide occupation"),
  recruitFamilyMemberWorkplace: preprocessString("Please provide workplace"),
  recruitFamilyMemberPhone: preprocessString("Please provide phone number"),
});

export const recruitEducationsSchema = z.object({
  recruitEducationLevel: preprocessEnum(
    [
      "Primary",
      "LowerSecondary",
      "UpperSecondary",
      "Vocational",
      "HighVocational",
      "Bachelor",
      "Master",
      "Doctorate",
    ],
    "Please select education level"
  ),
  recruitEducationFromDate: preprocessDate.refine(
    (date) => date instanceof Date,
    { message: "Please provide start date" }
  ),
  recruitEducationToDate: preprocessDate.refine(
    (date) => date instanceof Date,
    { message: "Please provide end date" }
  ),
  recruitEducationSchool: preprocessString("Please provide school name"),
  recruitEducationDegree: preprocessString("Please provide degree"),
  recruitEducationMajor: preprocessString("Please provide major"),
  recruitEducationGPA: preprocessFloat("Please provide GPA"),
});

export const recruitLanguageSkillsSchema = z.object({
  recruitLanguageName: preprocessString("Please provide language name"),
  recruitLanguageListenLevel: preprocessEnum(
    ["Fair", "Good", "Excellent"],
    "Please select listening level"
  ),
  recruitLanguageSpeakLevel: preprocessEnum(
    ["Fair", "Good", "Excellent"],
    "Please select speaking level"
  ),
  recruitLanguageReadLevel: preprocessEnum(
    ["Fair", "Good", "Excellent"],
    "Please select reading level"
  ),
  recruitLanguageWriteLevel: preprocessEnum(
    ["Fair", "Good", "Excellent"],
    "Please select writing level"
  ),
});

export const recruitWorkExperiencesSchema = z.object({
  recruitWorkplaceName: preprocessString("Please provide company name"),
  recruitWorkPosition: preprocessString("Please provide position"),
  recruitEmploymentType: preprocessEnum(
    ["FullTime", "PartTime", "Internship"],
    "Please select employment type"
  ),
  recruitStartDate: preprocessDate.refine((date) => date instanceof Date, {
    message: "Please provide start date",
  }),
  recruitEndDate: preprocessDate.refine((date) => date instanceof Date, {
    message: "Please provide end date",
  }),
  recruitSalary: preprocessInt("Please provide salary"),
  recruitExtraIncome: preprocessInt("Please provide extra income"),
  recruitReasonForLeaving: preprocessString(
    "Please provide reason for leaving"
  ),
  recruitJobDescription: preprocessString("Please provide job description"),
});

const recruitDetailSchema = z.object({
  recruitDetailFullNameTh: preprocessString("Full name (TH) is required"),
  recruitDetailFullNameEn: preprocessString("Full name (EN) is required"),
  recruitDetailNickName: preprocessString("Nickname is required"),
  recruitDetailSalary: preprocessInt("Expected salary is required"),
  recruitDetailBirthDay: preprocessDate.refine((date) => date instanceof Date, {
    message: "Birthdate is required",
  }),
  recruitDetailGender: preprocessEnum(
    ["Male", "FeMale", "Other"],
    "Gender is required"
  ),
  recruitDetailAge: preprocessInt("Age is required"),
  recruitDetailNationality: preprocessString("Nationality is required"),
  recruitDetailReligion: preprocessString("Religion is required"),
  recruitDetailWright: preprocessInt("Weight is required"),
  recruitDetailHeight: preprocessInt("Height is required"),
  recruitDetailBloodGroup: preprocessEnum(
    ["A", "B", "AB", "O", "Unknown"],
    "Blood group is required"
  ),
  recruitDetailIdCardNumber: preprocessString("ID card number is required"),
  recruitDetailIdCardIssuedAt: preprocessString(
    "ID card issued place is required"
  ),
  recruitDetailIdCardIssuedDate: preprocessDate.refine(
    (date) => date instanceof Date,
    { message: "ID card issue date is required" }
  ),
  recruitDetailIdCardEndDate: preprocessDate.refine(
    (date) => date instanceof Date,
    { message: "ID card expiry date is required" }
  ),
  recruitDetailPhone: preprocessString("Phone is required"),
  recruitDetailEmail: preprocessString("Email is required"),
  recruitDetailLine: preprocessString("Line ID is required"),
  recruitDetailPresentAddress: preprocessString("Present address is required"),
  recruitDetailPresentAddressLink: preprocessString("Address link is required"),
  recruitDetailRegisteredAddress: preprocessString(
    "Registered address is required"
  ),
  recruitDetailResidence: preprocessEnum(
    ["Parents_house", "Own_house", "Boarding_house_Rented_house"],
    "Residence is required"
  ),
  recruitDetailMaritalStatus: preprocessEnum(
    ["Single", "Married", "Divorced", "Widowed"],
    "Marital status is required"
  ),
  recruitDetailSpouseEarnIncome: preprocessEnum(
    ["Yes", "No"],
    "Spouse income status is required"
  ),
  recruitDetailSpouseIncomeAmount: preprocessInt(
    "Spouse income amount is required"
  ),
  recruitDetailNumberOfChildren: preprocessInt(
    "Number of children is required"
  ),
  recruitDetailMilitaryStatus: preprocessEnum(
    ["Exempted", "Completed", "NotYetServed"],
    "Military status is required"
  ),
  recruitDetailEmergencyFullName: preprocessString(
    "Emergency contact name is required"
  ),
  recruitDetailEmergencyRelationship: preprocessString(
    "Emergency relationship is required"
  ),
  recruitDetailEmergencyPhone: preprocessString("Emergency phone is required"),
  recruitDetailLicenseName: preprocessString("License name is required"),
  recruitDetailLicenseNumber: preprocessString("License number is required"),
  recruitDetailComputerSkill: preprocessString("Computer skill is required"),
  recruitDetailSportSkill: preprocessString("Sport skill is required"),
  recruitDetailOtherSkill: preprocessString("Other skill is required"),
  recruitDetailScoreToeic: preprocessString("TOEIC score is required"),
  recruitDetailScoreToefl: preprocessString("TOEFL score is required"),
  recruitDetailScoreIelts: preprocessString("IELTS score is required"),
  recruitDetailOwnCar: preprocessEnum(
    ["Yes", "No"],
    "Car ownership is required"
  ),
  recruitDetailOwnMotorcycle: preprocessEnum(
    ["Yes", "No"],
    "Motorcycle ownership is required"
  ),
  recruitDetailHaveCarLicense: preprocessEnum(
    ["Yes", "No"],
    "Car license info is required"
  ),
  recruitDetailHaveMotorcycleLicense: preprocessEnum(
    ["Yes", "No"],
    "Motorcycle license info is required"
  ),
  recruitDetailWhenStartWork: preprocessString("Start work date is required"),
  recruitDetailCheckWorkingHistory: preprocessEnum(
    ["Yes", "No"],
    "Work history check consent is required"
  ),
  recruitDetailDischarged: preprocessEnum(
    ["Yes", "No"],
    "Discharged status is required"
  ),
  recruitDetailDischargedReason: preprocessString(
    "Discharge reason is required"
  )
    .optional()
    .nullable(),
  recruitDetailSeriousIllnessOrContagious: preprocessEnum(
    ["Yes", "No"],
    "Illness status is required"
  ),
  recruitDetailIllnessName: preprocessString("Illness name is required")
    .optional()
    .nullable(),
  recruitDetailCriminalConvictionOrBankrupt: preprocessEnum(
    ["Yes", "No"],
    "Criminal/bankruptcy status is required"
  ),
  recruitDetailIsPregnant: preprocessEnum(
    ["Yes", "No"],
    "Pregnancy status is required"
  ),
  recruitDetailPregnancyMonth: preprocessInt("Pregnancy month is required")
    .optional()
    .nullable(),
  recruitDetailHasRelativesInCompany: preprocessEnum(
    ["Yes", "No"],
    "Relatives in company is required"
  ),
  recruitDetailRelativesName: preprocessString("Relatives' name is required")
    .optional()
    .nullable(),
  recruitDetailRef1Name: preprocessString("Reference 1 name is required"),
  recruitDetailRef2Name: preprocessString("Reference 2 name is required"),
  recruitDetailSelfIntro: preprocessString("Self-introduction is required"),
  recruitDetailSignatureImage: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),
  recruitDetailProfileImage: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),
  recruitDetailAttachIdCard: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),
  recruitDetailAttachHouseReg: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),
  recruitDetailAttachEducation: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),

  recruitDetailAttachMedicalCert: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),

  recruitDetailAttachMilitaryDoc: preprocessAny({
    url: z.string(),
    description: z.string(),
  }),

  recruitDetailConsentGeneral: preprocessEnum(
    ["Yes", "No"],
    "Consent for general data is required"
  ),
  recruitDetailConsentSensitive: preprocessEnum(
    ["Yes", "No"],
    "Consent for sensitive data is required"
  ),
  recruitDetailConsentPdpa: preprocessEnum(
    ["Yes", "No"],
    "PDPA consent is required"
  ),
});

export const recruitPostSchema = z.object({
  recruitPerReqId: preprocessInt("PerReq ID is required"),
});

export const recruitPutSchema = z.object({
  recruitId: preprocessInt("Recruit ID is required"),
  recruitStatus: preprocessEnum(
    [
      "Pending",
      "Submitted",
      "Interviewing",
      "PassedInterview",
      "FailedInterview",
      "Considered",
      "Rejected",
      "Hired",
    ],
    "Recruit status is required"
  ),
  recruitDetail: recruitDetailSchema,
  recruitFamilyMembers: z.array(recruitFamilyMembersSchema, {
    required_error: "Family members are required",
  }),
  recruitEducations: z.array(recruitEducationsSchema, {
    required_error: "Educations are required",
  }),
  recruitLanguageSkills: z.array(recruitLanguageSkillsSchema, {
    required_error: "Language skills are required",
  }),
  recruitWorkExperiences: z.array(recruitWorkExperiencesSchema, {
    required_error: "Work experience is required",
  }),

  recruitUpdateBy: preprocessInt("Updater ID is required")
    .optional()
    .nullable(),
});
