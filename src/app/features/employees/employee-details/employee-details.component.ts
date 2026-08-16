import { Component, OnInit } from '@angular/core';
import { Employee, employees } from '../models/employee.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TabsComponent, TabItem } from '../../../shared/components/tabs/tabs.component';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';
import { SalaryFormatPipe } from '../../../shared/pipes/salary-format.pipe';

export interface SalaryLine {
  label: string;
  amount: number;
}

@Component({
  selector: 'app-employee-details',
  imports: [DatePipe, RouterLink, TabsComponent, EmptyStateComponent, SalaryFormatPipe],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee | undefined;

  tabs: TabItem[] = [
    { label: 'Overview', value: 'overview' },
    { label: 'Salary', value: 'salary' },
    { label: 'Payroll History', value: 'payroll-history' },
    { label: 'Tax', value: 'tax' },
    { label: 'Bank', value: 'bank' },
    { label: 'Documents', value: 'documents' }
  ];
  activeTab = 'overview';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.employee = employees.find(
      employee => employee.id === id
    );
  }

  initials(): string {
    return this.getInitials(this.employee?.name);
  }

  managerInitials(): string {
    return this.getInitials(this.employee?.Manager);
  }

  tenure(): string {
    if (!this.employee) return '';

    const joinDate = new Date(this.employee.JoiningDate);
    const now = new Date();

    let months = (now.getFullYear() - joinDate.getFullYear()) * 12
      + (now.getMonth() - joinDate.getMonth());

    if (now.getDate() < joinDate.getDate()) {
      months--;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (remainingMonths > 0) parts.push(`${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`);

    return parts.length ? parts.join(' ') : 'Less than a month';
  }

  monthlyGross = 125000;

  effectiveFrom(): Date {
    const now = new Date();
    const fiscalYear = now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;
    return new Date(fiscalYear, 3, 1);
  }

  earnings: SalaryLine[] = [
    { label: 'Basic Salary', amount: 62500 },
    { label: 'HRA', amount: 25000 },
    { label: 'Special Allowance', amount: 18750 },
    { label: 'Bonus', amount: 18750 }
  ];

  deductions: SalaryLine[] = [
    { label: 'Income Tax', amount: 18750 },
    { label: 'PF', amount: 3125 },
    { label: 'Insurance', amount: 1250 }
  ];

  totalDeductions = 23125;

  netSalary = 101875;

  getInitials(name: string | undefined): string {
    if (!name) return '';

    return name
      .split(' ')
      .filter(Boolean)
      .map(part => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
