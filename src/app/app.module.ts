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

import { UserService } from './services/user.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {SignupService} from './services/signup.service';

import { ExpenseEditComponent } from './expense-list/expense-edit/expense-edit.component'
import { ExpenseListComponent } from './expense-list/expense-list.component';


import { AuthGuard } from './shared/auth.guard';
import { TokenInterceptorService } from './services/token.interceptors.service';
import { FriendListComponent } from './friend-list/friend-list.component';

const appRoutes: Routes=[
 {path:'',component:CarousalComponent},
  {path: 'login',component:AuthComponent},
  {path: 'signup',component:SignupComponent},
  { path: 'expense-list', component: ExpenseListComponent,canActivate: [AuthGuard] },
  { path: 'friend-list', component: FriendListComponent,canActivate: [AuthGuard] }

  
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
    ExpenseEditComponent,
    FriendListComponent
    
    
  ],
  imports: [
    BrowserModule,NgbModule,
    RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [UserService,SignupService,[

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }

  ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
