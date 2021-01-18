import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './service/employee.service';
import { AllComponent } from './all/all.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    AllComponent,
    ProjectsComponent,
    EmployeeProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ],
})
export class EmployeeModule { }
