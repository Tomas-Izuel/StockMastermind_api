import { Module } from '@nestjs/common';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';
import { ProviderArticleModule } from 'src/provider-article/provider-article.module'; // Importa el módulo necesario
import { ProviderArticleService } from 'src/provider-article/provider-article.service';
import { Provider } from './provider';
import { ProviderArticle } from 'src/provider-article/provider-article';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Module({
  imports: [ProviderArticleModule], // Asegúrate de importar el módulo
  controllers: [ProviderController],
  providers: [
    ProviderService,
    ProviderArticleService,
    Provider,
    ProviderArticle,
    PrismaService,
  ],
  exports: [ProviderService],
})
export class ProviderModule {}
