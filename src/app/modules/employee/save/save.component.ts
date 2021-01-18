import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  public employeeForm: FormGroup;
  public projectList: any[];
  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute
  ) {
    this._route.data.subscribe(data => {
      this.projectList = data['projects'];
    })
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.employeeForm = this._fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3000)]),
      project: new FormControl('', [Validators.required])
    })
  }

}
