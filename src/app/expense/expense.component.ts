import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent implements OnInit {
  constructor(public commonService: CommonService) {}
  isShowForm: Boolean = false;
  onToggleForm(): void {
    this.isShowForm = !this.isShowForm;
  }

  ngOnInit(): void {}
}
