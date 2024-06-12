import { Module } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Article } from './article';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, PrismaService, Article],
  exports: [ArticleService],
})
export class ArticleModule {}
