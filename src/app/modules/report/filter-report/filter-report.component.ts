import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-report',
  templateUrl: './filter-report.component.html',
  styleUrls: ['./filter-report.component.sass']
})
export class FilterReportComponent implements OnInit {

  @Output() filters : EventEmitter<{}> = new EventEmitter();

  public daterange: any = {};

 
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };

  campus: {}[] = [
    {name:'Todos', id: 'all'},
    {name:'Sede A', id: '1'},
    {name: 'Sede B', id: '2'}
  ]

  courses: {}[] = [
    {name:'Todos', id: 'all'},
    {name: 'Bachillerato', id: 1},
    {name: 'Ingles', id: 2},
    {name: 'Tecnico desarrollo de software', id: 3}
  ]

  formFilters: FormGroup;

  showErrors: boolean = false;


  constructor(private fb:  FormBuilder) { }

  ngOnInit(): void {
    this.formFilters  = this.fb.group({
      campus: ['all', Validators.required],
      date: [''],
      course: ['all', Validators.required]

    });
  }

  public selectedDate(value: any, datepicker?: any) {

    datepicker.start = value.start;
    datepicker.end = value.end;
 
    this.daterange.start = value.start;
    this.daterange.end = value.end;

    this.formFilters.controls['date'].setValue(`${this.daterange.start} to ${this.daterange.end}`)
  }

  submit(){
    this.showErrors = true;

    if(this.formFilters.valid) this.filters.emit(this.formFilters.value);

  }


}
