import { Component, OnInit } from '@angular/core';


import { UserService } from 'src/app/services/user.service';
import { ExpenseListService } from '../expense-list/expense-list.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  
  firstname:string[]=[];
  friendlist:string[]=[]
   flag=true;
    constructor(private userservice:UserService,private expenselistservice:ExpenseListService) { }

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


  onaddtolist(name: string){
    // console.log(this.friendlist)
       
          this.friendlist.forEach(function(element){
            let flag=true;
              if(element===name){
                console.log(this.flag)
                this.flag=false
                alert("User is already added to list")
                
                
              }
             })
             if(this.flag=true){
              this.expenselistservice.addfriendtolist(name);
              this.expenselistservice.friendlistchanged.subscribe((data: string[])=>{
               this.friendlist=data;
               this.flag=false
            })
            
          }
             
          
          
      
                
      }
  


}
