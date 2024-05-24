import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/')
  async getArticlesController() {
    return this.articleService.getArticles();
  }

  @Get(':id')
  async getArticleController(@Param() id: number) {
    return this.articleService.getArticleById(id);
  }

  @Post('/create')
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
}
