import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.sass']
})
export class ListReportComponent implements OnInit {

  @Input() report:[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
