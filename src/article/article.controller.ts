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
  ParseIntPipe,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import {
  ArticleQueryParams,
  CreateArticleDto,
  UpdateArticleDto,
} from './data/article.dto';
import { ZodValidationPipe } from 'src/lib/validators/common.validator';
import {
  CreateArticleSchema,
  UpdateArticleSchema,
} from './data/article.schema';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getArticlesController(@Query() filter: ArticleQueryParams) {
    return this.articleService.getArticles(filter);
  }

  @Get(':id')
  async getArticleController(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.getArticleById(id);
  }

  @Post('/create')
  @UsePipes(new ZodValidationPipe(CreateArticleSchema))
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
  @UsePipes(new ZodValidationPipe(UpdateArticleSchema))
  async updateArticleController(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateArticleDto,
  ) {
    return this.articleService.updateArticle(id, data);
  }

  @Delete(':id')
  async deleteArticleController(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.deleteArticle(id);
  }
}
