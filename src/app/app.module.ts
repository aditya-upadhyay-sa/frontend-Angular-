import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarousalComponent } from './carousal/carousal.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './directives';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http'
import {SignupService} from './services/signup.service'

const appRoutes: Routes=[
 {path:'',component:CarousalComponent},
  {path: 'login',component:AuthComponent},
  {path: 'signup',component:SignupComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarousalComponent,
    AuthComponent,
    SignupComponent,
    AlertComponent,
    
    
  ],
  imports: [
    BrowserModule,NgbModule,
    RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule
  ],
  providers: [AlertService,UserService,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
