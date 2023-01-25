import { Controller, Get, Patch, Post, Put, Query, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('index')
  root(): any {
    return  "ok";
  }
}
