import { Module } from '@nestjs/common';
import { ArticleController } from 'src/controllers/article.controller';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { ArticleService } from 'src/services/article.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, PrismaService],
})
export class ArticleModule {}
