import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
@Controller('login')
export class LoginController {
  @Get('idDoUsuario')
  public obterInformacoesDoUsuarioLogado(req: Request, res: Response): void {
    
    res.send();
  }
}
