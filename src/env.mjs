import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    // NEXTAUTH_URL: z.preprocess(
    //   // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    //   // Since NextAuth.js automatically uses the VERCEL_URL if present.
    //   (str) => process.env.VERCEL_URL ?? str,
    //   // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    //   process.env.VERCEL ? z.string().min(1) : z.string().url()
    // ),
    NEXTAUTH_URL: z.string(),
    GITHUB_ID_DEV: z.string(),
    GITHUB_SECRET_DEV: z.string(),
    GITHUB_ID_PROD: z.string(),
    GITHUB_SECRET_PROD: z.string(),
    VERCEL_URL: z.string(),
  },

  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GITHUB_ID_DEV: process.env.GITHUB_ID_DEV,
    GITHUB_SECRET_DEV: process.env.GITHUB_SECRET_DEV,
    GITHUB_ID_PROD: process.env.GITHUB_ID_PROD,
    GITHUB_SECRET_PROD: process.env.GITHUB_SECRET_PROD,
    VERCEL_URL: process.env.VERCEL_URL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
