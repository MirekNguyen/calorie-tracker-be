import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealModule } from './meal/meal.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { MealEntryModule } from './meal-entry/meal-entry.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [MealModule, PrismaModule, MealEntryModule],
})
export class AppModule {}
