import { Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'

@Injectable({})
export class AuthService{
    constructor(private prisma:PrismaService){
        
    }
    async signIn(body:AuthDto){
        //generate the password note: argon return promise
        const hash = await argon.hash(body.password)

        //save the user in the db where we already created user model
        const user = await this.prisma.user.create({data:{
            email:body.email,
            hash
        }})

        //return the user
        return user
    }
    signUp(){
        return {msg:'message for sign Un'}
    }
}