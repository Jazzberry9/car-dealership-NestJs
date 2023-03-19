import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Si no esta en el DTO, lo remueve pero sigue
      forbidNonWhitelisted: true, // Si no esta en el DTO, da error y detiene
    }),
    // aqui se pueden seguir colocando globalpipes
   );
  await app.listen(3000);
}
main();
