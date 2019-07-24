import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/users.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   currentuser:User;
   username:string;
   constructor(private userservice:UserService,private router:Router) {

    this.userservice.currentUser.subscribe(x => 
      {
        
        this.currentuser = x
        console.log(this.currentuser)
        // this.username= x.username
      }
      );
    }

  ngOnInit() {
   
  }
   
  logout() {
    this.userservice.logout();
    this.router.navigate(['/login']);
}
}
