import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  imports: [DatabaseModule],
  exports: [DatabaseService],
})
export class DatabaseModule {}
