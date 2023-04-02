import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart } from '../shared/models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class HandleLocalStorageService {
  cartDataSub = new BehaviorSubject<cart>(null);

  constructor() {}

  setUser(value: string) {
    localStorage.setItem('user', value);
  }

  getUser() {
    return localStorage.getItem('user');
  }

  setIsAuthenticated(value: string) {
    localStorage.setItem('isAuthenticated', value);
  }

  getIsAuthenticated(): string {
    return localStorage.getItem('isAuthenticated');
  }

  setIsAdmin(value: string) {
    localStorage.setItem('isAdmin', value);
  }

  getIsAdmin() {
    return localStorage.getItem('isAdmin');
  }

  setUserName(value: string) {
    localStorage.setItem('name', value);
  }

  getUserName() {
    return localStorage.getItem('name');
  }

  clearDataOnLogOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('name');
  }

 

  
}    