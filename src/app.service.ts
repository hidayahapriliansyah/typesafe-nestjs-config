/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import apiConfig from './config/api.config';
import { ConfigService, ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    @Inject(apiConfig.KEY) private API_CONF: ConfigType<typeof apiConfig>,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  getApiUrlNotTypesafe(): string {
    // get an environment variable
    return this.configService.get<string>('apiConfig.apiUrl');

    // get a custom configuration value
    // return this.configService.get<string>('API_URL');
  }

  getApiKeyNotTypesafe(): string {
    // get an environment variable
    // return this.configService.get<string>('apiConfig.apiKey');

    // get a custom configuration value
    return this.configService.get<string>('API_KEY');
  }

  getApiUrlTypesafe(): string {
    return this.API_CONF.apiUrl;
  }

  getApiKeyTypesafe(): string {
    return this.API_CONF.apiKey;
  }
}
