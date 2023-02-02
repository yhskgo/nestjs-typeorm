import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
  .setTitle('API DOCS EXAMPLE')
  .setDescription('IMS API DOC...')
  .setVersion('1.0')
  .addTag('IMS')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('imsapi', app, document);
  await app.listen(3000);
}
bootstrap();
