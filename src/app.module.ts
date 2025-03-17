import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoUri } from './config';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot(getMongoUri()), DatabaseModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
