import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id/code/:user_code')
  getHello(@Param('id') userId:number, @Param('user_code') code:String  ): string {    
    console.log("el id: ", userId);
    console.log("code: ", code);
    return this.appService.getHello();

  }

  @Post(':id')
  postData(@Param('id') userId:number, @Body() data:any):String {
    console.log("data", data)
    return `metodo post good ${userId}`;
  }
}

