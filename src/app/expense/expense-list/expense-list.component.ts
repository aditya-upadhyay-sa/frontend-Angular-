import { Component, OnInit, OnDestroy } from '@angular/core';

import { ExpenseListService } from './expense-list.service';
import { Subscription } from 'rxjs';
import { ExpenseData } from 'src/app/shared/models/expensedata.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit,OnDestroy {

  expensedata: ExpenseData[];
  perperson:number[]=[]
  friendlist:string[]=[]
  amountperperson:number;
  private subscription: Subscription;

  constructor(private expenseservice: ExpenseListService) { }

  ngOnInit() {
    this.expensedata = this.expenseservice.getExpenses();
    this.subscription = this.expenseservice.expenseChanged
      .subscribe(
        (expenses: ExpenseData[]) => {
          
          this.expensedata = expenses;
          // console.log(this.perperson[1]=this.expensedata[1].amount/this.expensedata[1].nooffriends)
           
          //  for(let i=0;i<this.friendlist.length;i++){
            
          //    this.perperson[i]=this.expensedata[i].amount/
            
          //  }
          this.amountperperson=this.expensedata[0].amount/this.friendlist.length;
            console.log(this.perperson)
          

        }
      );
      this.expenseservice.friendlistchanged.subscribe((data: string[])=>{
        this.friendlist=data;
        // console.log(this.friendlist);

      })
  }
  
  onEditexpense(index: number) {
    this.expenseservice.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
