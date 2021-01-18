import { Employee } from './../../shared/interfaces/employee';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../service/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/interfaces/project';

@Component({
  selector: 'app-employee-projects',
  templateUrl: './employee-projects.component.html',
  styleUrls: ['./employee-projects.component.scss']
})
export class EmployeeProjectsComponent implements OnInit {

  projects: Project[] = [];
  employee: Employee;

  constructor(
    private _projectService: ProjectsService,
    private _router: ActivatedRoute
  ) { 
    this._router.params.subscribe(param => {
      this.getEmployeeProjects(param.employeeId)
    })
  }

  ngOnInit(): void {

  }

  getEmployeeProjects(id:string) {
    let params = new HttpParams().set("id",id);
    this._projectService.getEmployeeProjects(params).subscribe(res=>{
      this.projects = res;
      this.employee = this.projects[0].employees.find(e=> e.id.toString() == id);
    })
  }

}
