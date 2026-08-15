import { Routes } from '@angular/router';

export const REPORT_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'payroll',
    pathMatch: 'full'
  },

  {
    path: 'payroll',
    loadComponent: () =>
      import('./payroll-report/payroll-report.component')
        .then(m => m.PayrollReportComponent)
  },

  {
    path: 'tax',
    loadComponent: () =>
      import('./tax-report/tax-report.component')
        .then(m => m.TaxReportComponent)
  },

  {
    path: 'salary',
    loadComponent: () =>
      import('./salary-report/salary-report.component')
        .then(m => m.SalaryReportComponent)
  }

];