import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import crypto from "crypto";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API DESCRIPTION')
    .setVersion('1.0')
    .build();

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // strip properties that do not have any decorators
    forbidNonWhitelisted: true, // throw error if unknown properties found
    transform: true,        // transform payload to DTO instance automatically
  }));
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI at /api
  
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
