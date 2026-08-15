import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component')
        .then(m => m.LoginComponent)
  },

  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component')
        .then(m => m.MainLayoutComponent),

    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },

      {
        path: 'employees',
        loadChildren: () =>
          import('./features/employees/employee.routes')
            .then(m => m.EMPLOYEE_ROUTES)
      },

      {
        path: 'payroll',
        loadChildren: () =>
          import('./features/payroll/payroll.routes')
            .then(m => m.PAYROLL_ROUTES)
      },

      {
        path: 'reports',
        loadChildren: () =>
          import('./features/reports/reports.routes')
            .then(m => m.REPORT_ROUTES)
      },

      {
        path: 'administration',
        loadChildren: () =>
          import('./features/administration/administration.routes')
            .then(m => m.ADMINISTRATION_ROUTES)
      }

    ]
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
