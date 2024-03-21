import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  private token: string='';
  // private token: string;

  public setToken(token: string): void {
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }
}
