import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/user/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor( private router:Router, private auth:AuthenticationService , private userDataService: UserDataService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;

    // console.log(email, password);
    this.auth.login(email, password).subscribe((res:any)=>{
      // console.log(res);
      localStorage.setItem('user', JSON.stringify(res))

      // redirect to dashboard
      this.router.navigate(['/dashboard']);
    },
    err=>{
      console.log(err);
    })

  }
    /** on clicking log in with google */
    onLogInWithGoogle() {
      this.auth
        .authenticateWithGoogle()
        .then((result) => {
          // save user data for a first time user only
          if (result.additionalUserInfo.isNewUser == true) {
            this.userDataService.createNewUser(
              result.user.displayName,
              result.user.email,
              result.user.uid
            );
          }
  
          this.router.navigate(['']);
        })
       /* .catch((error) => {
          console.log(error);
          this.authErrorHandler.handleAuthError(error, 'logIn');
        });*/
    }

}
