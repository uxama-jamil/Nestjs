import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CustomMiddlewareService implements NestMiddleware  {
    use(req: any, res: any, next: (error?: any) => void) {
        console.log("middleware executed....")
        next()
    }

}
