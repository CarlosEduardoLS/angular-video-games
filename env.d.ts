declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      API_KEY: string;
      RAPID_API_KEY: string;
    }
  }
}

export {}
