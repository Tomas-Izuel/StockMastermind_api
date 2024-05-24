import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FamilyModule } from './family/family.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [FamilyModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
