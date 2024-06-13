import { Module } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { ProviderArticle } from './provider-article';
import { ProviderArticleService } from './provider-article.service';

@Module({
  providers: [ProviderArticleService, PrismaService, ProviderArticle],
  exports: [ProviderArticleService],
})
export class ProviderArticleModule {}
