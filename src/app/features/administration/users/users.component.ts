import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Processor';
  country: string;
  status: 'Active' | 'Inactive';
  initials: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PaginationComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [
    {
      id: '1',
      name: 'Sarah Anderson',
      email: 'sarah.a@globalpay.com',
      role: 'Admin',
      country: 'United States',
      status: 'Active',
      initials: 'SA'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      email: 'm.rodriguez@globalpay.com',
      role: 'Manager',
      country: 'Spain',
      status: 'Active',
      initials: 'MR'
    },
    {
      id: '3',
      name: 'Jessica Lee',
      email: 'jessica.l@globalpay.com',
      role: 'Processor',
      country: 'Singapore',
      status: 'Inactive',
      initials: 'JL'
    },
    {
      id: '4',
      name: 'David Wallace',
      email: 'd.wallace@globalpay.com',
      role: 'Processor',
      country: 'United Kingdom',
      status: 'Active',
      initials: 'DW'
    }
  ];

  currentPage = 1;
  totalPages = 3;
  totalUsers = 24;

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
