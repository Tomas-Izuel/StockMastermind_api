import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
  UsePipes,
  Query,
  Delete,
} from '@nestjs/common';
import { CreateArticleDto, UpdateArticleDto } from 'src/data/dtos/article.dto';
import { paginateParams } from 'src/lib/utils/params.common';
import { ArticleQueryParams } from 'src/lib/validators/article.validator';
import { ArticleService } from 'src/services/article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )
  async getArticlesController(@Query() filter: ArticleQueryParams) {
    return this.articleService.getArticles(
      paginateParams({
        ...filter,
        sort_dir: filter.sort_dir as 'asc' | 'desc',
        family_id: Number(filter.family_id),
      }),
    );
  }

  @Get(':id')
  async getArticleController(@Param() id: number) {
    return this.articleService.getArticleById(id);
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createArticleController(@Body() data: CreateArticleDto) {
    const existingArticle = await Promise.all([
      this.articleService.getArticleByCode(data.code),
      this.articleService.getArticleByName(data.name),
    ]);

    if (existingArticle[0] || existingArticle[1]) {
      return new Response(
        JSON.stringify({
          message: 'Ya existe un articulo con el mismo nombre o codigo.',
          data: existingArticle,
        }),
        { status: 400 },
      );
    }

    return this.articleService.createArticle(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updateArticleController(
    @Param() id: number,
    @Body() data: UpdateArticleDto,
  ) {
    return this.articleService.updateArticle(id, data);
  }

  @Delete(':id')
  async deleteArticleController(@Param() id: number) {
    return this.articleService.deleteArticle(id);
  }
}
