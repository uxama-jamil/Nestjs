import { Injectable } from '@nestjs/common';
import {PrismaClient} from  '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url:"mysql://root:07b070ee@localhost:3306/usamadb?schema=public"
                }
            }
        })
    }
}
