import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee.routing';
import { SaveComponent } from './save/save.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './service/employee.service';
import { AllComponent } from './all/all.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    SaveComponent,
    AllComponent,
    ProjectsComponent
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
