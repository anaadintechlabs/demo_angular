import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';
import { ProjectsComponent } from './projects/projects.component';
import { AllComponent } from './all/all.component';
import { EmployeeComponent } from './employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './service/employee.service';
import { ProjectsService } from './service/projects.service';


const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        children: [
            {
                path: "all",
                component: AllComponent,
            },
            {
                path: "projects",
                component: ProjectsComponent
            },
            {
                path: "projects/:employeeId",
                component: EmployeeProjectsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
