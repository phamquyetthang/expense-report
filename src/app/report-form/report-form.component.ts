import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {

  constructor() { }
  isShowForm:Boolean = true
  onToggleForm(): void{
    this.isShowForm = !this.isShowForm
  } 
  ngOnInit(): void {
  }

}
