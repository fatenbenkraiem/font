import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/user/user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors = {
    name:null,
    email:null,
    password:null,
  }
  constructor(private auth:AuthenticationService, private router:Router ,private userDataService: UserDataService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;

    this.auth.register(name,email,password,password_confirmation).subscribe((res)=>{
      // console.log(res);
       // redirect to dashboard
       this.router.navigate(['/login']);
    },
    (err)=>{
      this.errors = err.error.errors;
      // console.log(err.error.errors);
    })
  }
   /** on clicking sign up with google */
   onSignUpWithGoogle() {
    this.auth
      .authenticateWithGoogle()
      .then((result) => {
        // save user data only the first time
        if (result.additionalUserInfo.isNewUser == true) {
          this.userDataService.createNewUser(
            result.user.displayName,
            result.user.email,
            result.user.uid
          );
        }

        setTimeout(() => {
          this.router.navigate(['']);
        }, 1500);
      })
      /*.catch((error) => {
        this.authErrorHandler.handleAuthError(error, 'signUp');
      });*/
  }

}
