// src/app.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { AppModule } from './app.module';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('shoudl return https://example.com', () => {
    const result = service.getApiUrlNotTypesafe();

    console.log('result =>', result);

    expect(result).toBe('https://example.com');
  });

  it('shoudl return thisISanAPIkey', () => {
    const result = service.getApiKeyNotTypesafe();

    console.log('result =>', result);

    expect(result).toBe('thisISanAPIkey');
  });

  it('shoudl return https://example.com', () => {
    const result = service.getApiUrlTypesafe();

    console.log('result =>', result);

    expect(result).toBe('https://example.com');
  });

  it('shoudl return thisISanAPIkey', () => {
    const result = service.getApiKeyTypesafe();

    console.log('result =>', result);

    expect(result).toBe('thisISanAPIkey');
  });
});
