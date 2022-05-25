import { Component, OnInit } from '@angular/core';
import { MONTH_ARR } from '../core/constants';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.scss'],
})
export class MonthsComponent implements OnInit {
  constructor() {}
  currentMonth: number = new Date().getMonth() + 1;
  selectedMonth: number = this.currentMonth;
  months = MONTH_ARR.slice(0, this.currentMonth);
  budget = 0
  onSelectMonth(month: number): void {
    this.selectedMonth = month;
  }
  ngOnInit(): void {}
}
