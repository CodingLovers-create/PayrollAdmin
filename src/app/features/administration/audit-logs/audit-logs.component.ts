import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
}

@Component({
  selector: 'app-audit-logs',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './audit-logs.component.html',
  styleUrl: './audit-logs.component.css'
})
export class AuditLogsComponent {
  logs: AuditLog[] = [
    { id: '1', timestamp: '2026-08-17 10:23', user: 'Sarah Anderson', action: 'User Created', details: 'Created user David Wallace' },
    { id: '2', timestamp: '2026-08-16 15:45', user: 'Michael Rodriguez', action: 'Payroll Approved', details: 'Approved payroll for August' }
  ];

  currentPage = 1;
  totalPages = 1;
  totalLogs = 2;

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
