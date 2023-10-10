import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { connectToDatabase } from './services/db-connection';
@Module({
  imports: [
    ConfigModule.forRoot(),
    connectToDatabase()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
