import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriteriaModule,  } from './criteria/criteria.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  
  imports: [TypeOrmModule.forRoot({
    autoLoadEntities: true,
  }), CriteriaModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
