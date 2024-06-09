import { Module } from '@nestjs/common';
import { ArticleModule } from './modules/article.module';
import { ProviderModule } from './modules/provider.module';
import { FamilyModule } from './modules/family.module';

@Module({
  imports: [ArticleModule, ProviderModule,FamilyModule],
  providers: [],
})
export class AppModule {}
