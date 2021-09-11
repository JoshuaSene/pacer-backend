import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ProjectModule } from './project/project.module';
import { CriteriaModule } from './criteria/criteria.module';
import { CriteriaProjectModule } from './criteria-project/criteria-project.module';

@Module({  
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'fatec',
    database: 'pacer',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false
  }), CriteriaModule, CriteriaProjectModule, ProjectModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
