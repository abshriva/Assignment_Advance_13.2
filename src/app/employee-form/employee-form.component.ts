

import { Employee } from '../models/Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { EmployeeDropDownService } from '../services/employee-drop-dow.service';
import { EmployeeType } from '../models/Employee-type';
import { CommonFunction } from '../common';
import { Router} from '@angular/router';

/**
 * 
 * 
 * @export
 * @class EmployeeFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
  
})


export class EmployeeFormComponent implements OnInit {

  employee:Employee = new Employee();
  employeeType: EmployeeType[] = [];

  /**
   * Creates an instance of EmployeeFormComponent.
   * @param {EmployeeService} employeeService 
   * @param {EmployeeDropDownService} empDropDownService 
   * @memberof EmployeeFormComponent
   */
  constructor(private employeeService: EmployeeService,
    private empDropDownService: EmployeeDropDownService,
  private router:Router) { }

  ngOnInit() {

    this.employee={
      id:null,
      name:'',
      age:null,
      title:'',
      dob: new CommonFunction().getCurrentDate()
    }
    this.employeeType = this.empDropDownService.getEmployeeType();
  }
  
  /**
   * 
   * 
   * @param {any} values 
   * @memberof EmployeeFormComponent
   */
  onSave(values)
  {
    this.employee={
      id:values.id,
      name:values.name,
      age:values.age,
      dob:values.dob,
      title:values.employeeType,
     
    };
    console.log(this.employee)
    
    this.employeeService.createEmployee(this.employee);
    this.router.navigate(['/employeeList'])
    debugger

  }
    /**Reset a form */
    // resetForm(f) {
    //   f.reset();
    // };
   

}
