import { Controller, Get, Post, Body, Render, UseInterceptors, Param, } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { HelperFileLoader } from '../utils/HelperFileLoader';
import  { MemoList }    from  './memo_list.interface';
import  { MemoListService } from    './memo_list.service';
//import { News, NewsEdit, MemoListService } from './memo_list.service';
import { MemoEntity } from './memo.entity';

//const PATH_NEWS = '/news-static/';
//HelperFileLoader.path = PATH_NEWS;

@Controller('memo-list')

export class MemoListController {
    constructor(
        private readonly MemoListService: MemoListService,
    ){}
// @Get()
// getMemoList(){
//     return  {
//         title: 'Лист заметок',
//         description: 'Названия',
//         createdAt: new Date(),
//     }
// }

@Get('/')
  @Render('memo-list')
  async getAllView() {
    
    const memo = await this.MemoListService.findAll();
    
    //console.log('memo ', memo);
    return { memo, title: 'Список заметок!' };
  }

@Get('/add')
@Render('add-memo')
funFic(){}

@Post()
@UseInterceptors(FileInterceptor(''))
   async create(
        @Body()  data
    )   {
        console.log('memolistcontr memo', data);
        const _memoEntity = new MemoEntity();
        _memoEntity.title = data.title;
        _memoEntity.description = data.description;
        const _memo = await this.MemoListService.create(_memoEntity);
        return _memo;
    }

    @Get('delete/:id')
      //@Render('news-delete')
      async delete(@Param('id') id: string) {
      const idInt = parseInt(id);
      const remove = await this.MemoListService.remove(idInt)/*new NewsEntity()*/;
      //console.log('memo-list contr ' _newsEntity);
      return remove;
    }
  
    @Get('/detail/:id')
    @Render('memo-detail')
    async getid(@Param('id') id: string) {
      const idInt = parseInt(id);
      const memo = await this.MemoListService.findById(idInt);
      
      //console.log('detailmemo ', memo);
      return  memo ;
    }

    @Get('/edit/:id')
    @Render('memo-edit')
    async edit(@Param('id') id: string) {
      const idInt = parseInt(id);
      const memo = await this.MemoListService.findById(idInt);
      //console.log('controller news edit ', news);
      //const users = await this.usersService.getusers();
      //console.log('controller news edit ', users);
      
      return  {memo/*, users*/} ;
    }
  
    @Post('/edit')
    @UseInterceptors(
      FileInterceptor('cover', {
        storage: diskStorage({
          destination: HelperFileLoader.destinationPath,
          filename: HelperFileLoader.customFileName,
        }),
      }),
    )
    async edit1(
      @Body() memo/*: CreateNewsDto*/,
         ) {
      
      const _memoEntity = await this.MemoListService.findById(memo.id)/*new NewsEntity()*/;
      //console.log('cover.filename ', cover.filename);
      //  console.log('news ', news);
      //  console.log('cover ', cover);
      
      //_newsEntity.cover = news.cover;
      _memoEntity.title = memo.title;
      _memoEntity.description = memo.description;
      // Добавление пользователя в связь
      //_newsEntity.user = _user;
      // Добавление категории в связь
      //_newsEntity.category = _category;
      //console.log('_newsEntity ', _newsEntity);
      const _memo = await this.MemoListService.edit(_memoEntity);
      // await this.mailService.sendEdit(
      // ['abram1312@yandex.ru'],
      // JSON.stringify(_newsEntity),
      // );
      return _memo;
      }
  
  }
