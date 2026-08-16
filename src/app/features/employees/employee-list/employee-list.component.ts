import { Component } from '@angular/core';
import { Employee, employees } from '../models/employee.model';
import { SalaryFormatPipe } from '../../../shared/pipes/salary-format.pipe';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { DropdownComponent } from "../../../shared/components/dropdown/dropdown.component";
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { ValueChangeEvent } from '@angular/forms';
import { ActionMenuComponent } from "../../../shared/components/action-menu/action-menu.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [SalaryFormatPipe, ButtonComponent, DropdownComponent, PaginationComponent, ActionMenuComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})


export class EmployeeListComponent {

constructor(private router: Router){}
  viewEmployee(employee: Employee) {
    this.router.navigate([
      'employees',
      'details',
      employee.id
    ]);
  }
  deleteEmployee(employee: Employee) {
    console.log('Deleting:', employee);
  }
  exportEmployees() {
  throw new Error('Method not implemented.');
  }
  openFilters() {
    throw new Error('Method not implemented.');
  }
  addEmployee() {
  console.log("Clicked");
  }

  mockEmployees = employees;


  countryOptions = [
    { label: 'All Countries', value: 'all' },
    { label: 'India', value: 'India' },
    { label: 'USA', value: 'USA' },
    { label: 'UK', value: 'UK' }
  ];

  departmentOptions = [
    { label: 'All Departments', value: 'all' },
    { label: 'IT', value: 'IT' },
    { label: 'Finance', value: 'Finance' },
    { label: 'Graphic Design', value: 'Graphic Design' }
  ];

  statusOptions = [
    { label: 'All Statuses', value: 'all' },
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' }
  ];

  selectedCountry = 'all';
  selectedDepartment = 'all';
  selectedStatus = 'all';

  currentPage = 1;
  totalPages = 5;

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Loading page:', page);
  }

  actionOptions = [
    {
      label: 'Edit',
      value: 'edit'
    },
    {
      label: 'Delete',
      value: 'delete',
      danger: true
    }
  ];
  handleAction(action: string, employee: Employee) {
    switch (action) {

    case 'edit':
      this.viewEmployee(employee);
      break;

    case 'delete':
      this.deleteEmployee(employee);
      break;
  }
}
}
