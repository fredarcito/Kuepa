import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {

  dataReport: any;
  report:any[] = [];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.getData('all', 'all');
    
  }

  getData(idCampus:string = 'all', idCourse:string = 'all', dateRange?){
    this.filterService.getData().subscribe(res => {
      this.dataReport = [...res];
      this.getReport(idCampus, idCourse);
    })
  }

  getReport(idCampus:string, idCourse:string, dateRange?){

      let dataProcess = [...this.dataReport];
      let resultFilter:any;
      this.report = [];

      if(idCampus != 'all') resultFilter = dataProcess.filter( (element:any) =>  element.campus.id === idCampus);
      if(idCampus == 'all') resultFilter = dataProcess;

    
      if(idCourse != 'all'){

        resultFilter.forEach((element, index) => { 
          resultFilter[index].campus.courses = resultFilter[index].campus.courses.filter(course => course.id == idCourse)
        });
  
      } 

    let student : any ;

    resultFilter.forEach(element => {
       
        element.campus.courses.forEach(course => {   
          course.assistance.forEach(assis => {
            student = {campusName: element.campus.name};
            student.course = course.name;
            student.studentName = assis.studend;
            student.assists = assis.assists;
            student.absences = assis.absences;
            
            this.report.push(student);

          });
        
        })

      });

  }

  getFilters({campus, course}){
    this.getData(campus, course)
  }

}
