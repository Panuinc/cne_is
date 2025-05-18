// lib/zodSchema.js
import { z } from "zod";

export const formatDate = (value) => {
  if (!value) return null;
  return new Date(value).toISOString().replace("T", " ").slice(0, 19);
};

export const formatDateWithoutTime = (value) => {
  if (!value) return null;
  return new Date(value).toISOString().split("T")[0];
};

export const preprocessInt = (msg, intMsg = msg) =>
  z.preprocess((val) => {
    const parsed = parseInt(val, 10);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number({ required_error: msg }).int({ message: intMsg }));

export const preprocessDouble = (msg, doubleMsg = msg) =>
  z.preprocess(
    (val) => {
      const parsed = parseFloat(val);
      return isNaN(parsed) ? undefined : parsed;
    },
    z.number({ required_error: msg }).refine((val) => !isNaN(val), {
      message: doubleMsg,
    })
  );

export const preprocessString = (msg, minMsg = msg) =>
  z.string({ required_error: msg }).min(1, { message: minMsg });

export const preprocessEnum = (values, msg) =>
  z.enum(values, {
    required_error: msg,
    invalid_type_error: msg,
  });

export const preprocessAny = (validValues) =>
  z
    .union([
      z.string(),
      z.string().url("Must be a valid URL"),
      z.object(validValues || {}).partial(),
    ])
    .nullable()
    .optional();

export const preprocessDate = z.preprocess((val) => {
  if (!val) return undefined;
  const date =
    typeof val === "string" || val instanceof Date ? new Date(val) : null;
  return date instanceof Date && !isNaN(date.getTime()) ? date : undefined;
}, z.date().optional());

export const formatData = (data, dateFields = [], dateTimeFields = []) =>
  data.map((item) => ({
    ...item,
    ...Object.fromEntries(
      dateFields.map((field) => [field, formatDateWithoutTime(item[field])])
    ),
    ...Object.fromEntries(
      dateTimeFields.map((field) => [field, formatDate(item[field])])
    ),
  }));
