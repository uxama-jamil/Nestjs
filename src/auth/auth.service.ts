import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signIn(){
        return {msg:'message for sign in'}
    }
    signUp(){
        return {msg:'message for sign Un'}
    }
}