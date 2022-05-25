import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  constructor(public commonService: CommonService) {}
  amount: number = 0;

  ngOnInit(): void {
    this.commonService.getCurrentBudget();
  }

  onIncrease() {
    this.commonService.addMoneyToBudget(
      this.amount + this.commonService.currentBudget
    );
    this.amount = 0;
  }

  onUpdate() {
    this.commonService.addMoneyToBudget(this.amount);
    this.amount = 0;
  }

  get canEdit(): boolean {
    return  this.commonService.currentMonth === new Date().getMonth() + 1;
  };
}
