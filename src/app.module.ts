import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import apiConfig from './config/api.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [apiConfig],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
