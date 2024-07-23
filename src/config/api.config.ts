import { registerAs } from '@nestjs/config';

export default registerAs('apiConfig', () => ({
  apiUrl: process.env.API_URL,
  apiKey: process.env.API_KEY,
}));
