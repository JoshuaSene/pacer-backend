import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { NotesStoreModule } from './notes-store/notes-store.module';
=======
import { AppController } from './app.controller';
import { ProjectModule } from './project/project.module';
import { CriteriaModule } from './criteria/criteria.module';
import { CriteriaProjectModule } from './criteria-project/criteria-project.module';
>>>>>>> 5a631494ef670b9b1d00bb8cfcb5fe92ddd54343

@Module({  
  imports: [TypeOrmModule.forRoot({
<<<<<<< HEAD
    autoLoadEntities: true,
  }), ProjectCriteriaModule, NotesStoreModule], 
=======
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'fatec',
    database: 'pacer',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false
  }), CriteriaModule, CriteriaProjectModule, ProjectModule], 
>>>>>>> 5a631494ef670b9b1d00bb8cfcb5fe92ddd54343
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
