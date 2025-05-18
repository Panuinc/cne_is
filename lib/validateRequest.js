import logger from "@/lib/logger";
import { RateLimiterMemory } from "rate-limiter-flexible";

export function getRequestIP(request) {
  return request.headers.get("x-forwarded-for") || request.ip || "unknown";
}

export function verifySecretToken(headers) {
  const secretToken = headers.get("secret-token");
  if (!secretToken || secretToken !== process.env.SECRET_TOKEN) {
    const error = new Error("Access Denied Due To An Invalid Or Missing Token");
    error.status = 401;
    logger.warn({
      message: "Access Denied Due To An Invalid Or Missing Token",
    });
    throw error;
  }
}

const rateLimiter = new RateLimiterMemory({
  points: 1000000,
  duration: 60,
});

export const checkRateLimit = async (ip) => {
  try {
    await rateLimiter.consume(ip);
  } catch (error) {
    if (error?.msBeforeNext) {
      throw new Error("RateLimitExceeded");
    }
    throw error;
  }
};

export async function validateRequest(request) {
  const ip = getRequestIP(request);
  verifySecretToken(request.headers);
  await checkRateLimit(ip);
  return ip;
}
