import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';

const models = TypegooseModule.forFeature([User])

@Global()     // 标记为全局，在这里引用，其他地方都可以使用
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/topfullstack', {     // 连接数据库，需要先启动数据库
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
