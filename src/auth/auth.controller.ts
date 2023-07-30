import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { request } from "express";
import { AuthService } from "./auth.service";
import{authDto}from '../dto'

@Controller('auth')
export class AuthController{
    constructor(private auth:AuthService){

    }
    @Post('signin')
    signIn( @Body() body:authDto){
        console.log("body is.....",body)
        return this.auth.signIn()
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