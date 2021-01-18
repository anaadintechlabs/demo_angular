import { ProjectsService } from './../service/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  constructor(
    private _projectService: ProjectsService
  ) {
    this._projectService.getAllProjectList();
  }

  ngOnInit(): void {
    this._projectService.projectList$.subscribe(res => {
      this.projects = res;
    }, error => {
      console.log("error is", error);
    })
  }

}
