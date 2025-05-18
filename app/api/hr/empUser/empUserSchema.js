import { z } from "zod";
import { preprocessInt, preprocessString, formatData } from "@/lib/zodSchema";

export const formatEmpUserData = (empUsers) =>
  formatData(empUsers, [], ["empUserCreateAt", "empUserUpdateAt"]);

export const empUserPutSchema = z.object({
  empUserId: preprocessInt("Please provide the empUser ID to update"),
  empUserUsername: preprocessString("Please provide the empUser username"),
  empUserPassword: preprocessString("Please provide the empUser password"),
  empUserUpdateBy: preprocessInt("Please provide the updater's user ID"),
});
