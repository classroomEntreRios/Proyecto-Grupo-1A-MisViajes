import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({   providedIn: 'root', })

export class AuthService implements CanActivate {
 
  constructor(public router: Router) {}
  // ...

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  private isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !!token;
  }

  public setAuth(email: string) {
    localStorage.setItem('token', email);
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
