import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  preprocessDate,
  formatData,
} from "@/lib/zodSchema";

export const formatEmpData = (emps) =>
  formatData(emps, ["empBirthday"], ["empCreateAt", "empUpdateAt"]);

export const empPostSchema = z.object({
  empTitle: preprocessEnum(
    ["Mr", "Mrs", "Ms"],
    "Please provide the title as 'Mr' or 'Mrs' or 'Ms'"
  ),
  empFirstNameTH: preprocessString("Please provide the emp first name th"),
  empLastNameTH: preprocessString("Please provide the emp last name th"),
  empFirstNameEN: preprocessString("Please provide the emp first name en"),
  empLastNameEN: preprocessString("Please provide the emp last name en"),
  empEmail: preprocessString("Please provide the emp last name en"),
  empTel: preprocessString("Please provide the emp telephone"),
  empIdCard: preprocessString("Please provide the emp email"),
  empBirthday: preprocessDate.refine(
    (date) => date === null || date instanceof Date,
    { message: "Please provide the emp birth day" }
  ),
  empCitizen: preprocessEnum(
    ["Thai", "Cambodian", "Lao", "Burmese", "Vietnamese"],
    "Please provide the citizen as 'Thai' or 'Cambodian' or 'Lao' or 'Burmese' or 'Vietnamese'"
  ),
  empGender: preprocessEnum(
    ["Male", "FeMale"],
    "Please provide the gender as 'Male' or 'FeMale'"
  ),
  empCreateBy: preprocessInt("Please provide the creator's user ID"),
});

export const empPutSchema = z.object({
  empId: preprocessInt("Please provide the emp ID to update"),
  empFirstNameTH: preprocessString("Please provide the emp first name th"),
  empLastNameTH: preprocessString("Please provide the emp last name th"),
  empFirstNameEN: preprocessString("Please provide the emp first name en"),
  empLastNameEN: preprocessString("Please provide the emp last name en"),
  empEmail: preprocessString("Please provide the emp last name en"),
  empTel: preprocessString("Please provide the emp telephone"),
  empIdCard: preprocessString("Please provide the emp email"),
  empBirthday: preprocessDate.refine(
    (date) => date === null || date instanceof Date,
    { message: "Please provide the emp birth day" }
  ),
  empCitizen: preprocessEnum(
    ["Thai", "Cambodian", "Lao", "Burmese", "Vietnamese"],
    "Please provide the citizen as 'Thai' or 'Cambodian' or 'Lao' or 'Burmese' or 'Vietnamese'"
  ),
  empGender: preprocessEnum(
    ["Male", "FeMale"],
    "Please provide the gender as 'Male' or 'FeMale'"
  ),
  empStatus: preprocessEnum(
    ["Active", "InActive"],
    "Please provide the status as 'Active' or 'InActive'"
  ),
  empUpdateBy: preprocessInt("Please provide the updater's user ID"),
});
