import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable({})
export class AuthService{
    constructor(private prisma:PrismaService){
        
    }
    async signIn(body:AuthDto){
        try {
            const hash = await argon.hash(body.password)
    
            //save the user in the db where we already created user model
            const user = await this.prisma.user.create({data:{
                email:body.email,
                hash
            }
        })
        delete user.hash
    
            //return the user
            return user
            
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){ //error handling from prisma doc
                if(error.code == 'P2002'){ //P2002 code indicate duplicate entry on enique record, use prisma doc for more ifo
                    throw new ForbiddenException('Credential taken, duplicate')
                }
            }
            
        }
        //generate the password note: argon return promise
    }
    signUp(){
        return {msg:'message for sign Un'}
    }
}