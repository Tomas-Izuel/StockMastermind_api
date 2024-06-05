import { Module } from '@nestjs/common';
import { ArticleModule } from './modules/article.module';
import { ProviderModule } from './modules/provider.module';

@Module({
  imports: [ArticleModule, ProviderModule],
  providers: [],
})
export class AppModule {}
