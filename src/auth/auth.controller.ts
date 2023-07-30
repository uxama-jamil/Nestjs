import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { request } from "express";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private auth:AuthService){

    }
    @Post('signin')
    signIn( @Body() body:any){
        console.log("body is.....",{dto:body})
        this.auth.signIn()
    }
    @Post('signup')
    signUp(){
        this.auth.signUp()
    }
    @Get('data')
    data(){
        return 'Data is ....'
    }
}