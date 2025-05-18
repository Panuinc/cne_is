import { z } from "zod";
import {
  preprocessInt,
  preprocessString,
  preprocessEnum,
  formatData,
} from "@/lib/zodSchema";

export const formatPosJobDesData = (posJobDes) =>
  formatData(posJobDes, [], ["posJobDesCreateAt", "posJobDesUpdateAt"]);

export const posJobDesPutSchema = z.object({
  posJobDesId: preprocessInt("Please provide the position job des ID to update"),
  posJobDesAge: preprocessString("Please provide the position job des age"),
  posJobDesSex: preprocessEnum(
    ["Male", "FeMale" , "Male/FeMale"],
    "Please provide the sex as 'Male' or 'FeMale' or 'Male/FeMale'"
  ),
  posJobDesEducations: preprocessString("Please provide the position job des educations"),
  posJobDesSkill: preprocessString("Please provide the position job des skill"),
  posJobDesExperience: preprocessString("Please provide the position job des experience"),
  posJobDesResponsibility: preprocessString("Please provide the position job des responsibility"),
});
