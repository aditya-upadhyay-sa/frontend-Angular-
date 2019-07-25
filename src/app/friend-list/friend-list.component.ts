import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  firstname:string[]=[];
    constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getUsers().subscribe((data) =>
      {
        console.log(data.length);
        for(let i=0;i<data.length;i++){
          this.firstname[i]=data[i]["firstName"]
        }
        
        
      }


    );
  }

}
