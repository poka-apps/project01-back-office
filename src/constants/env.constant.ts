export const ENV = {
  name: import.meta.env.VITE_ENVIRONMENT_NAME as ('development' | 'production' | 'test'),
  baseApi: import.meta.env.VITE_BASE_API as string,
};
