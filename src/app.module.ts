import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CustomMiddlewareService } from './custom-middleware/custom-middleware.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CustomInterceptor } from './custom/custom.interceptor';

@Module({
  imports: [AuthModule, BookmarkModule, UserModule, PrismaModule],
  providers: [CustomMiddlewareService,
    {
      provide:APP_INTERCEPTOR,
      useClass:CustomInterceptor
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomMiddlewareService).forRoutes('*')
  }
}
