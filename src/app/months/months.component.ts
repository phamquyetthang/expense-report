import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';
import { MONTH_ARR } from '../core/constants';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.scss'],
})
export class MonthsComponent implements OnInit {
  constructor(public commonService: CommonService) {}
  selectedMonth: number = this.commonService.currentMonth;
  months = MONTH_ARR.slice(0, this.commonService.currentMonth);
  budget = 0;
  onSelectMonth(month: number): void {
    this.selectedMonth = month;
  }
  ngOnInit(): void {}
}
