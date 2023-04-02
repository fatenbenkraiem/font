import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';
import { HandleLocalStorageService } from '../handle-local-storage.service';


@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  url:string ='http://localhost:8000';
  
  private userData: User = {
    id: null,
    email: null,
    name: null,
    phone: null,
    address: null,
    role: {
      val: 'utilisateur',
    },
  };
  userDataSub = new BehaviorSubject<User>(this.userData);
  isAdminSub = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private handleLocalStorageService: HandleLocalStorageService) {}

  /** saves new user data in  DB */
  createNewUser(name: string, email: string, id: string) {
    this.userData.name = name;
    this.userData.email = email;
    this.userData.id = id;

    this.url = this.object('users/' + this.userData.id);
    this.url.set(this.userData).then(() => {
      this.getUserDataFromFirebase();
    });

    this.userDataSub.next(this.userData);
  }
  object(arg0: string): string {
    throw new Error('Method not implemented.');
  }

  getUserDataObservable() {
    return this.userDataSub.asObservable();
  }

  // --- replace this with an async method
  getUserDataFromFirebase() {
    if (this.handleLocalStorageService.getUser() != null) {
      //console.log('getting user data from firebase');
      this.http
        .get(
          environment.firebase.databaseURL +
            '/users/' +
            localStorage.getItem('user') +
            '.json'
        )
        .subscribe((data: User) => {
          this.userData = data;
          this.userDataSub.next(this.userData);
          this.setUserName(this.userData.name);

          // set isAdmin value
          if (data.role.val == 'admin') {
            this.handleLocalStorageService.setIsAdmin('true');
            this.isAdminSub.next(true);
          } else if (data.role.val == 'utilisateur') {
            this.isAdminSub.next(false);
            this.handleLocalStorageService.setIsAdmin('false');
          }
        });
    }
  }

  getIsAdminObservable() {
    this.isAdminSub.next(this.userData.role.val == 'true' ? true : false);
    return this.isAdminSub.asObservable();
  }

  updateUserData(userDataParam: User): Promise<void> {
    this.handleLocalStorageService.setUserName(userDataParam.name);
    this.userDataSub.next(userDataParam);

    this.url = this.afdb.object('users/' + userDataParam.id);
    return this.url.update(userDataParam);
  }

  async checkAddressPresentOrNot() {
    if (this.handleLocalStorageService.getUser() != null) {
      return await this.getAddressFromFirebase();
    }
  }

  async getAddressFromFirebase() {
    return await this.http
      .get(
        environment.firebase.databaseURL +
          '/users/' +
          localStorage.getItem('user') +
          '/address' +
          '.json'
      )
      .toPromise();
  }

  async getAllUsersData() {
    const path = environment.firebase.databaseURL + '/users.json';
    return await this.http.get(path).toPromise();
  }

  clearUserDataLocally() {
    Object.entries(this.userData).forEach(([key, val]) => {
      if (key === 'role') {
        this.userData.role.val = 'utilisateur';
      } else {
        this.userData[key] = null;
      }
    });
  }

  public set setid(v: string) {
    this.userData.id = v;
  }

  public get getid() {
    return this.userData.id;
  }

  public set setEmail(v: string) {
    this.userData.email = v;
  }

  public set setName(v: string) {
    this.userData.name = v;
  }

  public get getName() {
    return this.userData.name;
  }

  public set setPhone(v: string) {
    this.userData.phone = v;
  }

  public set setAddress(v: string) {
    this.userData.address = v;
  }
}