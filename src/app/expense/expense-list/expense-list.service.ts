import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { ExpenseData } from 'src/app/shared/models/expensedata.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseListService {
 
  expenseChanged = new Subject<ExpenseData[]>();
  startedEditing = new Subject<number>();
  
  public friendlist:string[]=[]
  friendlistchanged=new Subject<string[]>();
  private expensedata: ExpenseData[] = [
    // new ExpenseData('party', 100,5),
    // new ExpenseData('tour', 1000,10),
  ];

  constructor() { }

 

  getExpenses() {
    return this.expensedata.slice();
  }

  getExpense(index: number) {
    return this.expensedata[index];
  }


  addexpense(expense: ExpenseData) {
    this.expensedata.push(expense);
    this.expenseChanged.next(this.expensedata.slice());
  }

  addexpenses(expenses: ExpenseData[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.expensedata.push(...this.expensedata);
    this.expenseChanged.next(this.expensedata.slice());
  }

  updateexpense(index: number, newexpense: ExpenseData) {
    this.expensedata[index] = newexpense;
    this.expenseChanged.next(this.expensedata.slice());
  }

  deleteexpense(index: number) {
    this.expensedata.splice(index, 1);
    this.expenseChanged.next(this.expensedata.slice());
  }

  addfriendtolist(name:string){
    this.friendlist.push(name);
    
    this.friendlistchanged.next(this.friendlist.slice())

  }

}
