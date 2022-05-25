import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {

  constructor() { }
  isShowForm:Boolean = false
  action: 'spend' | 'revenue' = 'spend'
  onToggleForm(): void{
    this.isShowForm = !this.isShowForm
  } 
  ngOnInit(): void {
  }

}
