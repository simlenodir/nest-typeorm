import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CustomExceptionFilter } from './filter/custom.exception.filter';
import { HttpException } from '@nestjs/common/exceptions';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  const host = config.getOrThrow<string>('app.host');
  const port = config.getOrThrow<number>('app.port');

  // app.useGlobalPipes(new ValidationPipe())
  // app.useGlobalFilters(new CustomExceptionFilter())

  await app.listen(port, host);
}
bootstrap();
