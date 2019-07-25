import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({ templateUrl: 'auth.component.html' })
export class AuthComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userservice: UserService,
        private alertService: AlertService) {
                        if(this.userservice.loggedIn()){
                            this.router.navigate(["/expense-list"])
                        }    
         }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        });




        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.loading = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.loading=false;
            return;
        }
        else {
            const email = this.loginForm.value.email;
            const password = this.loginForm.value.password;
            this.userservice.authenticateuser(email, password).subscribe((resdata) => {
                
            

                if (resdata) {
                    this.loading=false;
                    // console.log(resdata);
                    localStorage.setItem('token',resdata.token)
                    this.router.navigate(['/expense-list'])
                } else {
                    this.loading=false;
                    alert("Login Failed!")
                }

            }, (err) => {
                this.loading=false;
                alert("Login Failed!")
                console.log(err);
            }

            );


        }


    }
}
