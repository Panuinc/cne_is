import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  formatData,
} from "@/lib/zodSchema";

export const formatDivisionData = (divisions) =>
  formatData(divisions, [], ["divisionCreateAt", "divisionUpdateAt"]);

export const divisionPostSchema = z.object({
  divisionName: preprocessString("Please provide the division name"),
  divisionCreateBy: preprocessInt("Please provide the creator's user ID"),
});

export const divisionPutSchema = z.object({
  divisionId: preprocessInt("Please provide the division ID to update"),
  divisionName: preprocessString("Please provide the division name"),
  divisionStatus: preprocessEnum(
    ["Active", "InActive"],
    "Please provide the status as 'Active' or 'InActive'"
  ),
  divisionUpdateBy: preprocessInt("Please provide the updater's user ID"),
});
