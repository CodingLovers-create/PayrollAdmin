import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

export interface Permission {
  id: string;
  resource: string;
  action: string;
  description: string;
}

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.css'
})
export class PermissionsComponent {
  permissions: Permission[] = [
    { id: '1', resource: 'Payroll', action: 'Execute', description: 'Run payroll for all regions.' },
    { id: '2', resource: 'Users', action: 'Create', description: 'Add new users to the system.' },
    { id: '3', resource: 'Reports', action: 'View', description: 'View financial reports.' }
  ];

  currentPage = 1;
  totalPages = 1;
  totalPermissions = 3;

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
