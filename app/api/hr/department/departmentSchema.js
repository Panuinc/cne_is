import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  formatData,
} from "@/lib/zodSchema";

export const formatDepartmentData = (departments) =>
  formatData(departments, [], ["departmentCreateAt", "departmentUpdateAt"]);

export const departmentPostSchema = z.object({
  departmentDivisionId: preprocessInt("Please provide the division name"),
  departmentName: preprocessString("Please provide the department name"),
  departmentCreateBy: preprocessInt("Please provide the creator's user ID"),
});

export const departmentPutSchema = z.object({
  departmentId: preprocessInt("Please provide the department ID to update"),
  departmentName: preprocessString("Please provide the department name"),
  departmentStatus: preprocessEnum(
    ["Active", "InActive"],
    "Please provide the status as 'Active' or 'InActive'"
  ),
  departmentUpdateBy: preprocessInt("Please provide the updater's user ID"),
});
