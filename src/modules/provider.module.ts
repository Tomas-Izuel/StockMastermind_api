import { Module } from '@nestjs/common';
import { ProviderController } from 'src/controllers/provider.controller';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { ProviderArticleService } from 'src/services/provider-article.service';
import { ProviderService } from 'src/services/provider.service';

@Module({
  controllers: [ProviderController],
  providers: [ProviderService, PrismaService, ProviderArticleService],
})
export class ProviderModule {}
