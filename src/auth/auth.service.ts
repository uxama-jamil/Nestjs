import { Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService{
    constructor(private prisma:PrismaService){
        
    }
    signIn(body:AuthDto){
        return {msg:'message for sign in'}
    }
    signUp(){
        return {msg:'message for sign Un'}
    }
}