import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('PACER')
    .setDescription('PACER project API description')
    .setVersion('0.14.6')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe(
      {
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true
      }
    )
  )

  await app.listen(3000);
}
bootstrap();
