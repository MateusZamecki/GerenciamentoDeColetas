import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { LoginController } from './controllers/Usuario/Login';
import './Util/Module-alias';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const loginController = new LoginController();
    this.addControllers([loginController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
