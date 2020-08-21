import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorReportComponent } from './paginator-report.component';

describe('PaginatorReportComponent', () => {
  let component: PaginatorReportComponent;
  let fixture: ComponentFixture<PaginatorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
