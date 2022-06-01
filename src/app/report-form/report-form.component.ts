import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
})
export class ReportFormComponent implements OnInit {
  constructor() {}
  @Input() isShowForm?: Boolean;
  @Output() onToggleForm = new EventEmitter();
  action: 'spend' | 'revenue' = 'spend';

  ngOnInit(): void {}
  handleToggleForm(event: MouseEvent) {
    event.stopPropagation();
  }
}
