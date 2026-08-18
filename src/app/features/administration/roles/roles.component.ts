import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

export interface Role {
  id: string;
  name: string;
  users: number;
  description: string;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  roles: Role[] = [
    { id: '1', name: 'Admin', users: 2, description: 'Full access to all system features.' },
    { id: '2', name: 'Manager', users: 5, description: 'Can manage employees and approve payroll.' },
    { id: '3', name: 'Processor', users: 17, description: 'Can process payroll and generate reports.' }
  ];

  currentPage = 1;
  totalPages = 1;
  totalRoles = 3;

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
