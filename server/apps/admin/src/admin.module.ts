import { Module } from '@nestjs/common';
import { DbModule } from 'libs/db';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CourseModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    CourseModule,
    EpisodesModule    // 引用数据库模块
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
