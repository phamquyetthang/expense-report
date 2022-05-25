import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  constructor(public commonService: CommonService) { }
  amount = 0

  ngOnInit(): void {
    this.commonService.getCurrentBudget()
  }

}
