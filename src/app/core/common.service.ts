import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IBudget } from './types/budget';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private store: AngularFirestore) {}
  currentMonth: number = new Date().getMonth() + 1;
  currentBudget: number = 0;
  setCurrentBudget(month: number) {
    this.currentMonth = month;
    this.getBudgetByMonthService(month).subscribe((budget) => {
      if (budget.length) {
        this.currentBudget = budget[0].amount;
      }
    });
  }

  getCurrentBudget() {
    this.getBudgetByMonthService(this.currentMonth).subscribe((budget) => {
      if (budget.length) {
        this.currentBudget = budget[0].amount;
      }
    });
  }

  addMoneyToBudget(amount: number){

  }
  getBudgetByMonthService(month: number): Observable<IBudget[]> {
    return this.store
      .collection('budget', (ref) => ref.where('month', '==', month))
      .valueChanges() as Observable<IBudget[]>;
  }
}
