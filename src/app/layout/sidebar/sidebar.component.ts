import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONFIG } from '../../core/config/app.config';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  appName = APP_CONFIG.name;
  appSubName = APP_CONFIG.subName;
  sidebarLinks = [
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
      label: 'Administration',
      route: '/administration',
      icon: 'admin_panel_settings'
    }
  ];

  activeLinkClasses = 'bg-secondary-container text-on-secondary-container font-semibold';
  inactiveLinkClasses = 'text-secondary hover:text-primary hover:bg-surface-container-high';
}
