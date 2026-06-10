export const log = {
  info: (message: string, meta?: Record<string, any>) => {
    console.log(`INFO: ${message}`, meta || "");
  },
  error: (message: string, meta?: Record<string, any>) => {
    console.error(`ERROR: ${message}`, meta || "");
  },
};
