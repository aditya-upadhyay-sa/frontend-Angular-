import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpenseData } from '../shared/models/expensedata.model';
import { ExpenseListService } from './expense-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit,OnDestroy {

  expensedata: ExpenseData[];
  perperson:number[]=[]
  private subscription: Subscription;

  constructor(private expenseservice: ExpenseListService) { }

  ngOnInit() {
    this.expensedata = this.expenseservice.getExpenses();
    this.subscription = this.expenseservice.expenseChanged
      .subscribe(
        (expenses: ExpenseData[]) => {
          
          this.expensedata = expenses;
          // console.log(this.perperson[1]=this.expensedata[1].amount/this.expensedata[1].nooffriends)
           
           for(let i=0;i<this.expensedata.length;i++){
            
             this.perperson[i]=this.expensedata[i].amount/this.expensedata[i].nooffriends
            
           }
            console.log(this.perperson)
          

        }
      );
  }
  
  onEditexpense(index: number) {
    this.expenseservice.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
