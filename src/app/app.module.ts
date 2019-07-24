import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarousalComponent } from './carousal/carousal.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertComponent } from './directives';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {SignupService} from './services/signup.service';

import { ExpenseEditComponent } from './expense-list/expense-edit/expense-edit.component'
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ErrorInterceptor } from './shared/error.interceptors';
import { JwtInterceptor } from './shared/jwt.interceptors';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes=[
 {path:'',component:CarousalComponent},
  {path: 'login',component:AuthComponent},
  {path: 'signup',component:SignupComponent},
  { path: 'expense-list', component: ExpenseListComponent,canActivate: [AuthGuard] }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarousalComponent,
    AuthComponent,
    SignupComponent,
    AlertComponent,
    ExpenseListComponent,
    ExpenseEditComponent
    
    
  ],
  imports: [
    BrowserModule,NgbModule,
    RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [UserService,SignupService,[

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
