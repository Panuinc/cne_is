import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  preprocessDate,
  preprocessBoolean,
  formatData,
} from "@/lib/zodSchema";

export const formatRecruitData = (recruits) =>
  formatData(
    recruits,
    ["recruitCreatedAt", "recruitUpdatedAt"],
    [
      "recruitDetailBirthDay",
      "recruitDetailIdCardIssuedDate",
      "recruitDetailIdCardEndDate",
    ]
  );

export const recruitPostSchema = z.object({
  recruitPerReqId: preprocessInt("Please provide the related perReqId"),
  recruitFullNameTh: preprocessString("Please provide the full name (TH)"),
  recruitFullNameEn: preprocessString("Please provide the full name (EN)"),
  recruitNickName: preprocessString("Please provide the nickname"),

  recruitStatus: preprocessEnum(
    ["Pending", "Submitted", "Interviewing", "Rejected", "Hired"],
    "Please provide a valid recruit status"
  ).optional(),

  recruitDetail: z
    .object({
      recruitDetailSalary: preprocessInt("Please provide the expected salary"),
      recruitDetailBirthDay: preprocessDate.refine(
        (date) => date === null || date instanceof Date,
        { message: "Please provide the birth date" }
      ),
      recruitDetailGender: preprocessEnum(
        ["Male", "FeMale", "Other"],
        "Please provide gender"
      ),
      recruitDetailAge: preprocessInt("Please provide the age"),
      recruitDetailNationality: preprocessString(
        "Please provide the nationality"
      ),
      recruitDetailReligion: preprocessString("Please provide the religion"),
      recruitDetailWright: preprocessInt("Please provide the weight"),
      recruitDetailHeight: preprocessInt("Please provide the height"),
      recruitDetailBloodGroup: preprocessEnum(
        ["A", "B", "AB", "O", "Unknown"],
        "Invalid blood group"
      ),
      recruitDetailIdCardNumber: preprocessString(
        "Please provide ID card number"
      ),
      recruitDetailIdCardIssuedAt: preprocessString(
        "Please provide ID card issued at"
      ),
      recruitDetailIdCardIssuedDate: preprocessDate.refine(
        (date) => date === null || date instanceof Date,
        { message: "Please provide issued date" }
      ),
      recruitDetailIdCardEndDate: preprocessDate.refine(
        (date) => date === null || date instanceof Date,
        { message: "Please provide expiration date" }
      ),
      recruitDetailPhone: preprocessString("Please provide phone number"),
      recruitDetailEmail: preprocessString("Please provide email"),
      recruitDetailLine: preprocessString("Please provide Line ID"),
      recruitDetailPresentAddress: preprocessString(
        "Please provide present address"
      ),
      recruitDetailRegisteredAddress: preprocessString(
        "Please provide registered address"
      ),
      recruitDetailMaritalStatus: preprocessEnum(
        ["Single", "Married", "Divorced", "Widowed"],
        "Please provide marital status"
      ),
      recruitDetailSpouseEarnIncome: preprocessEnum(
        ["Yes", "No"],
        "Please specify spouse income"
      ).optional(),
      recruitDetailSpouseIncomeAmount: preprocessInt().optional(),
      recruitDetailNumberOfChildren: preprocessInt().optional(),
      recruitDetailMilitaryStatus: preprocessEnum(
        ["Exempted", "Completed", "NotYetServed", "InProgress", "NotRequired"],
        "Please provide military status"
      ),
      recruitDetailOwnCar: preprocessEnum(["Yes", "No"], "Own a car?"),
      recruitDetailOwnMotorcycle: preprocessEnum(
        ["Yes", "No"],
        "Own a motorcycle?"
      ),
      recruitDetailHaveCarLicense: preprocessEnum(
        ["Yes", "No"],
        "Have car license?"
      ),
      recruitDetailHaveMotorcycleLicense: preprocessEnum(
        ["Yes", "No"],
        "Have motorcycle license?"
      ),
      recruitDetailAllowReferenceCheck: preprocessBoolean(
        "Allow reference check?"
      ),
      recruitDetailAllowReferenceCheckReason: preprocessString().optional(),
      recruitDetailEverFired: preprocessBoolean("Ever fired?"),
      recruitDetailEverFiredReason: preprocessString().optional(),
      recruitDetailSevereIllnessHistory: preprocessBoolean(
        "Severe illness history?"
      ),
      recruitDetailSevereIllnessDetail: preprocessString().optional(),
      recruitDetailCriminalRecord: preprocessBoolean("Any criminal record?"),
      recruitDetailCriminalRecordDetail: preprocessString().optional(),
      recruitDetailIsPregnant: preprocessBoolean("Is pregnant?"),
      recruitDetailPregnancyDetail: preprocessString().optional(),
      recruitDetailHasFriendInCompany: preprocessBoolean(
        "Has friend in company?"
      ),
      recruitDetailFriendInCompanyName: preprocessString().optional(),
      recruitDetailRef1Name: preprocessString(
        "Please provide reference 1 name"
      ),
      recruitDetailRef1Address: preprocessString(
        "Please provide reference 1 address"
      ),
      recruitDetailRef1Phone: preprocessString(
        "Please provide reference 1 phone"
      ),
      recruitDetailRef1Occupation: preprocessString(
        "Please provide reference 1 occupation"
      ),
      recruitDetailRef2Name: preprocessString(
        "Please provide reference 2 name"
      ),
      recruitDetailRef2Address: preprocessString(
        "Please provide reference 2 address"
      ),
      recruitDetailRef2Phone: preprocessString(
        "Please provide reference 2 phone"
      ),
      recruitDetailRef2Occupation: preprocessString(
        "Please provide reference 2 occupation"
      ),
      recruitDetailSelfIntro: preprocessString().optional(),
      recruitDetailHomeMapUrl: preprocessString().optional(),
      recruitDetailAttachIdCard: preprocessString().optional(),
      recruitDetailAttachHouseReg: preprocessString().optional(),
      recruitDetailAttachEducation: preprocessString().optional(),
      recruitDetailAttachMedicalCert: preprocessString().optional(),
      recruitDetailAttachMilitaryDoc: preprocessString().optional(),
      recruitDetailConsentGeneral: preprocessBoolean(
        "Consent for general data?"
      ),
      recruitDetailConsentSensitive: preprocessBoolean(
        "Consent for sensitive data?"
      ),
      recruitDetailSignatureImage: preprocessString().optional(),
    })
    .optional(),

  recruitFamilyMembers: z.array(z.any()).optional(),
  recruitEmergencyContacts: z.array(z.any()).optional(),
  recruitEducations: z.array(z.any()).optional(),
  recruitProfessionalLicenses: z.array(z.any()).optional(),
  recruitLanguageSkills: z.array(z.any()).optional(),
  recruitOtherSkills: z.array(z.any()).optional(),
  recruitSpecialAbilities: z.array(z.any()).optional(),
  recruitEnglishScores: z.array(z.any()).optional(),
  recruitWorkExperiences: z.array(z.any()).optional(),
});

export const recruitPutSchema = z.object({
  recruitId: preprocessInt("Please provide recruit ID to update"),
  recruitStatus: preprocessEnum(
    ["Pending", "Submitted", "Interviewing", "Rejected", "Hired"],
    "Please provide a valid status"
  ),
  recruitUpdateBy: preprocessInt("Please provide the updater's user ID"),
});
