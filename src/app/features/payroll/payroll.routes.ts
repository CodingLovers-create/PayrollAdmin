import { Routes } from '@angular/router';

export const PAYROLL_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'runs',
    pathMatch: 'full'
  },

  {
    path: 'runs',
    loadComponent: () =>
      import('./payroll-runs/payroll-runs.component')
        .then(m => m.PayrollRunsComponent)
  },

  {
    path: 'details/:id',
    loadComponent: () =>
      import('./payroll-details/payroll-details.component')
        .then(m => m.PayrollDetailsComponent)
  },

  {
    path: 'process',
    loadComponent: () =>
      import('./payroll-process/payroll-process.component')
        .then(m => m.PayrollProcessComponent)
  },

  {
    path: 'exceptions',
    loadComponent: () =>
      import('./payroll-exceptions/payroll-exceptions.component')
        .then(m => m.PayrollExceptionsComponent)
  },

  {
    path: 'approvals',
    loadComponent: () =>
      import('./payroll-approvals/payroll-approvals.component')
        .then(m => m.PayrollApprovalsComponent)
  },

  {
    path: 'salary-components',
    loadComponent: () =>
      import('./salary-components/salary-components.component')
        .then(m => m.SalaryComponentsComponent)
  }

];