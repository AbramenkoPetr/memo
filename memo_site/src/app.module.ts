import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoListModule } from './memo_list/memo_list.module';

@Module({
  
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'my_memo_list',
        entities: ["dist/**/*.entity{.ts, .js}"],
        synchronize: true,
        autoLoadEntities: true,
      }),
      ServeStaticModule.forRoot({
      
        rootPath: join(__dirname, '../', 'public'),
      }),
  MemoListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
