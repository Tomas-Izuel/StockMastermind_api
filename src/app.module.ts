import { Module } from '@nestjs/common';
import { ArticleModule } from './modules/article.module';

@Module({
  imports: [ArticleModule],
  providers: [],
})
export class AppModule {}
