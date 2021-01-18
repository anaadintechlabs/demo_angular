import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/interfaces/employee';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  emplloyees: Employee[] = [];

  constructor(
    private _employeeService: EmployeeService
  ) {
    this._employeeService.getAllEmployeesList();
  }

  ngOnInit(): void {
    this._employeeService.employeeList$.subscribe(res => {
      this.emplloyees = res;
    })
  }

}
