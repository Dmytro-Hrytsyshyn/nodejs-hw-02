import dotenv from 'dotenv';

dotenv.config();

export const getEnvVar = (name, defaultValue) => {
  // if (!name) {
  //   throw new Error('Environment variable name must be provided.');
  // }

  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing environment variable: process.env['${name}']`);
};
