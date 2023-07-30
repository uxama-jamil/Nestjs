import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { request } from "express";
import { AuthService } from "./auth.service";
import{AuthDto}from '../dto'

@Controller('auth')
export class AuthController{
    constructor(private auth:AuthService){

    }
    @Post('signin')
    signIn( @Body() body:AuthDto ){
        console.log({body})
        // return {
        //     email:body.email,password:body.password
        // }
        return this.auth.signIn(body)
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