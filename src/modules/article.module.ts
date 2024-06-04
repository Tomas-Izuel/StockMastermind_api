import { Module } from '@nestjs/common';
import { ArticleController } from 'src/controllers/article.controller';
import { PrismaArticleRepository } from 'src/repositories/article.repository';
import { ArticleService } from 'src/services/article.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports: [PrismaArticleRepository],
})
export class ArticleModule {}
