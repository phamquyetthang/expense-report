import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IBudget, IExpense } from './types/budget';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  initBudget = {
    amount: 0,
    id: '',
    month: 0,
  };

  constructor(private store: AngularFirestore) {}
  currentMonth: number = new Date().getMonth() + 1;
  currentBudget: number = 0;
  currentBudgetObj: IBudget = {
    ...this.initBudget,
  };

  expenses: IExpense[] = [];

  totalSpentAmount = 0;
  totalEarnAmount = 0;

  private  setBudget(budget: IBudget[]) {
    if (budget.length) {
      this.currentBudget = budget[0].amount;
      this.currentBudgetObj = budget[0];
    } else {
      this.currentBudget = 0;
      this.currentBudgetObj = {
        ...this.initBudget,
      };
    }
  }

  private getBudgetByMonthService(month: number): Observable<IBudget[]> {
    return this.store
      .collection('budget', (ref) => ref.where('month', '==', month))
      .valueChanges({ idField: 'id' }) as Observable<IBudget[]>;
  }
  private getExpenseByMonth(month: number): Observable<IExpense[]> {
    return this.store
      .collection('expense', (ref) => ref.where('month', '==', month))
      .valueChanges({ idField: 'id' }) as Observable<IExpense[]>;
  }

  private setExpense(expenses: IExpense[]){
    this.expenses = expenses;
      const calc = expenses.reduce(
        (pre, cur) => {
          if (cur.action === 'spend') {
            pre.totalSpentAmount += cur.amount;
          } else {
            pre.totalEarnAmount += cur.amount;
          }
          return pre;
        },
        {
          totalSpentAmount: 0,
          totalEarnAmount: 0,
        }
      );

      this.totalSpentAmount = calc.totalSpentAmount;
      this.totalEarnAmount = calc.totalEarnAmount;
  }
  setMonth(month: number) {
    this.currentMonth = month;
    this.getBudgetByMonthService(month).subscribe((budget) => {
      this.setBudget(budget);
    });
    this.getExpenseByMonth(month).subscribe((data) => {
      this.setExpense(data)
    });
  }

  getCurrentBudget() {
    this.getBudgetByMonthService(this.currentMonth).subscribe((budget) => {
      this.setBudget(budget);
    });
    this.getExpenseByMonth(this.currentMonth).subscribe((data) => {
      this.setExpense(data)
    });
  }

  addMoneyToBudget(amount: number) {
    return this.store
      .collection('budget')
      .doc(this.currentBudgetObj.id)
      .update({
        amount: amount,
      });
  }
}
