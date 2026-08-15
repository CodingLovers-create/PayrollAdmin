import { Routes } from '@angular/router';

export const EMPLOYEE_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },

  {
    path: 'list',
    loadComponent: () =>
      import('./employee-list/employee-list.component')
        .then(m => m.EmployeeListComponent)
  },

  {
    path: 'details/:id',
    loadComponent: () =>
      import('./employee-details/employee-details.component')
        .then(m => m.EmployeeDetailsComponent)
  }

];