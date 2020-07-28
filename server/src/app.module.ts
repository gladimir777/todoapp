import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './appcontrollers/user.controller';
import { UserService } from './appservices/user.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://agilsoft:admin123@cluster0.tclsi.mongodb.net/todocolections?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    UserModule,
    TaskModule,
    AuthModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
