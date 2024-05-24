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
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { filter } from 'rxjs';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/')
  async getArticlesController(@Query() filter: URLSearchParams) {
    console.log(filter);
    return this.articleService.getArticles(
      filter.toString() ? JSON.parse(filter.toString()) : {},
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
