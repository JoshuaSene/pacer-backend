import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriteriaModule,  } from './criteria/criteria.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pacer',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false
  }), CriteriaModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
