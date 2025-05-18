import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  formatData,
} from "@/lib/zodSchema";

export const formatPositionData = (positions) =>
  formatData(positions, [], ["positionCreateAt", "positionUpdateAt"]);

export const positionPostSchema = z.object({
  positionDivisionId: preprocessInt("Please provide the division name"),
  positionDepartmentId: preprocessInt("Please provide the division name"),
  positionNameTH: preprocessString("Please provide the position name th"),
  positionNameEN: preprocessString("Please provide the position name en"),
  positionCreateBy: preprocessInt("Please provide the creator's user ID"),
});

export const positionPutSchema = z.object({
  positionId: preprocessInt("Please provide the position ID to update"),
  positionNameTH: preprocessString("Please provide the position name th"),
  positionNameEN: preprocessString("Please provide the position name en"),
  positionStatus: preprocessEnum(
    ["Active", "InActive"],
    "Please provide the status as 'Active' or 'InActive'"
  ),
  positionUpdateBy: preprocessInt("Please provide the updater's user ID"),
});
