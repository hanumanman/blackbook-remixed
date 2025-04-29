import { z } from 'zod';

const envSchema = z.object({
  TURSO_CONNECTION_URL: z.string().url(),
  TURSO_AUTH_TOKEN: z.string().min(1),
});

function validateEnv() {
  const parsedEnv = envSchema.safeParse(process.env);

  if (!parsedEnv.success) {
    console.error('❌ Invalid environment variables:', parsedEnv.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return parsedEnv.data;
}

export const env = validateEnv();
