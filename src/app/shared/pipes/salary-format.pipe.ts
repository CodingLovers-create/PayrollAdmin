import { Pipe, PipeTransform } from '@angular/core';

type Country = 'India' | 'USA' | 'UK' | 'Other';

@Pipe({
  name: 'salaryFormat',
  standalone: true
})
export class SalaryFormatPipe implements PipeTransform {

  transform(salary: number, country: Country): string {
    if (salary == null) return '';

    switch (country) {
      case 'India':
        return this.formatIndian(salary, '₹');

      case 'USA':
        return this.formatWestern(salary, '$');

      case 'UK':
        return this.formatWestern(salary, '£');

      default:
        return salary.toString();
    }
  }

  private formatIndian(salary: number, currency: string): string {
    if (salary >= 1_00_00_000) {
      return `${currency}${(salary / 1_00_00_000).toFixed(2)}Cr`;
    }

    if (salary >= 1_00_000) {
      return `${currency}${(salary / 1_00_000).toFixed(2)}L`;
    }

    if (salary >= 1_000) {
      return `${currency}${(salary / 1_000).toFixed(0)}K`;
    }

    return `₹${salary}`;
  }

  private formatWestern(salary: number, currency: string): string {
    if (salary >= 1000000000) {
      return `${currency}${(salary / 1000000000).toFixed(2)}B`;
    }

    if (salary >= 1000000) {
      return `${currency}${(salary / 1000000).toFixed(2)}M`;
    }

    if (salary >= 1000) {
      return `${currency}${(salary / 1000).toFixed(0)}K`;
    }

    return `${currency}${salary}`;
  }
}