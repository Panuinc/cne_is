import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  preprocessDate,
  preprocessAny,
  formatData,
} from "@/lib/zodSchema";

export const formatEmpCvData = (empCv) =>
  formatData(empCv, [], ["empCvCreateAt", "empCvUpdateAt"]);

const dateRefine = (message) =>
  preprocessDate.refine((date) => date === null || date instanceof Date, {
    message,
  });

const empCvEducationSchema = z.object({
  empCvEducationId: preprocessInt(
    "Emp Cv Education ID must be an integer."
  ).optional(),
  empCvEducationEmpCvId: preprocessInt(
    "Emp Cv Education Emp ID must be an integer."
  ).optional(),
  empCvEducationDegreeTH: preprocessString(
    "Emp Cv Education Degree (TH)."
  ).optional(),
  empCvEducationDegreeEN: preprocessString(
    "Emp Cv Education Degree (EN)."
  ).optional(),
  empCvEducationInstitutionTH: preprocessString(
    "Emp Cv Education Institution (TH)."
  ).optional(),
  empCvEducationInstitutionEN: preprocessString(
    "Emp Cv Education Institution (EN)."
  ).optional(),
  empCvEducationStartDate: dateRefine(
    "Please Enter Cv Education Start Date"
  ).optional(),
  empCvEducationEndDate: dateRefine(
    "Please Enter Cv Education End Date"
  ).optional(),
});

const empCvProfessionalLicenseSchema = z.object({
  empCvLicenseId: preprocessInt(
    "Professional License ID must be an integer."
  ).optional(),
  empCvLicenseEmpCvId: preprocessInt(
    "Professional License Emp Cv ID must be an integer."
  ).optional(),
  empCvLicenseNameTH: preprocessString(
    "Professional License Name (TH)."
  ).optional(),
  empCvLicenseNameEN: preprocessString(
    "Professional License Name (EN)."
  ).optional(),
  empCvLicenseNumber: preprocessString(
    "Professional License Number."
  ).optional(),
  empCvLicenseStartDate: dateRefine(
    "Please Enter License Start Date"
  ).optional(),
  empCvLicenseEndDate: dateRefine("Please Enter License End Date").optional(),
});

const empCvProjectSchema = z.object({
  empCvProjectId: preprocessInt("Project ID must be an integer.").optional(),
  empCvProjectWorkHistoryId: preprocessInt(
    "Project Work History ID must be an integer."
  ).optional(),
  empCvProjectNameTH: preprocessString("Project Name (TH).").optional(),
  empCvProjectNameEN: preprocessString("Project Name (EN).").optional(),
  empCvProjectDescriptionTH: preprocessString(
    "Project Description (TH)."
  ).optional(),
  empCvProjectDescriptionEN: preprocessString(
    "Project Description (EN)."
  ).optional(),
});

const empCvWorkHistorySchema = z.object({
  empCvWorkHistoryId: preprocessInt(
    "Work History ID must be an integer."
  ).optional(),
  empCvWorkHistoryEmpCvId: preprocessInt(
    "Work History Emp Cv ID must be an integer."
  ).optional(),
  empCvWorkHistoryCompanyNameTH:
    preprocessString("Company Name (TH).").optional(),
  empCvWorkHistoryCompanyNameEN:
    preprocessString("Company Name (EN).").optional(),
  empCvWorkHistoryPositionTH: preprocessString("Position (TH).").optional(),
  empCvWorkHistoryPositionEN: preprocessString("Position (EN).").optional(),
  empCvWorkHistoryStartDate: dateRefine(
    "Please Enter Work Start Date"
  ).optional(),
  empCvWorkHistoryEndDate: dateRefine("Please Enter Work End Date").optional(),
  empCvProjects: z.array(empCvProjectSchema).optional(),
});

const empCvLanguageSkillSchema = z.object({
  empCvLanguageSkillId: preprocessInt(
    "Language Skill ID must be an integer."
  ).optional(),
  empCvLanguageSkillEmpCvId: preprocessInt(
    "Language Skill Emp Cv ID must be an integer."
  ).optional(),
  empCvLanguageSkillNameTH: preprocessString("Language Name (TH).").optional(),
  empCvLanguageSkillNameEN: preprocessString("Language Name (EN).").optional(),
  empCvLanguageSkillProficiency: preprocessEnum(
    ["Basic", "Intermediate", "Advance"],
    "Proficiency must be 'Basic', 'Intermediate', or 'Advance'."
  ).optional(),
});

export const empCvPutSchema = z.object({
  empCvId: preprocessInt("Emp Cv ID must be an integer."),
  empCvEmpId: preprocessInt("Emp Cv Emp ID must be an integer.").optional(),
  empCvUpdateBy: preprocessInt("Emp Cv updater ID must be an integer."),
  empCvEducations: z.array(empCvEducationSchema).optional(),
  empCvLicenses: z.array(empCvProfessionalLicenseSchema).optional(),
  empCvWorkHistories: z.array(empCvWorkHistorySchema).optional(),
  empCvLanguageSkills: z.array(empCvLanguageSkillSchema).optional(),
});
