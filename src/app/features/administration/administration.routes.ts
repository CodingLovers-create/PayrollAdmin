import { Routes } from '@angular/router';

export const ADMINISTRATION_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },

  {
    path: 'users',
    loadComponent: () =>
      import('./users/users.component')
        .then(m => m.UsersComponent)
  },

  {
    path: 'roles',
    loadComponent: () =>
      import('./roles/roles.component')
        .then(m => m.RolesComponent)
  },

  {
    path: 'permissions',
    loadComponent: () =>
      import('./permissions/permissions.component')
        .then(m => m.PermissionsComponent)
  },

  {
    path: 'audit-logs',
    loadComponent: () =>
      import('./audit-logs/audit-logs.component')
        .then(m => m.AuditLogsComponent)
  }

];