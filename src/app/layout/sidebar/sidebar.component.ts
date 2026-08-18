import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONFIG } from '../../core/config/app.config';

export interface SidebarItem {
  label: string;
  route?: string;
  icon?: string;
  isHeader?: boolean;
  isExpanded?: boolean;
  children?: SidebarItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  toggleSubmenu(item: SidebarItem) {
    if (item.isHeader && item.children) {
      item.isExpanded = !item.isExpanded;
    }
  }

  appName = APP_CONFIG.name;
  appSubName = APP_CONFIG.subName;
  sidebarLinks: SidebarItem[] = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'dashboard'
    },
    {
      label: 'Employees',
      route: '/employees',
      icon: 'groups'
    },{
      label: 'Payroll',
      route: '/payroll',
      icon: 'payments'
    },
    {
      label: 'Reports',
      route: '/reports',
      icon: 'assessment'
    },
    {
      label: 'ADMINISTRATION',
      icon: 'admin_panel_settings',
      isHeader: true,
      isExpanded: true,
      children: [
        { label: 'Users', route: '/administration/users' },
        { label: 'Roles', route: '/administration/roles' },
        { label: 'Permissions', route: '/administration/permissions' },
        { label: 'Audit Logs', route: '/administration/audit-logs' }
      ]
    }
  ];

  activeLinkClasses = 'bg-secondary-container text-on-secondary-container font-semibold';
  inactiveLinkClasses = 'text-secondary hover:text-primary hover:bg-surface-container-high';
}
