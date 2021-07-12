import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
/**
 *引入mongoose模块
 */
@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost:27017/user')],
  /**
   * 这里是测试文件。这个数据库可以是任何数据库的链接
   */
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}