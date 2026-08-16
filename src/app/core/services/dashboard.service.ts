import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface SummaryCardData {
  title: string;
  mainValue: string;
  subValue?: string;
  badgeText: string;
  badgeIcon?: string;
  badgeType: 'success' | 'warning' | 'danger' | 'neutral';
  borderType?: 'amber' | 'teal';
}

export interface CountryCardData {
  countryCode: string;
  countryName: string;
  flagCode: string;
  employees: string;
  status: string;
  statusType: 'success' | 'warning' | 'danger';
  totalCostValue: string;
  totalCostSubValue?: string;
  borderType?: 'amber' | 'teal';
  showReviewButton?: boolean;
}

export interface ChartData {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  iconType: 'success' | 'warning' | 'danger' | 'info';
  showReviewButton?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getSummaryCards(): Observable<SummaryCardData[]> {
    const data: SummaryCardData[] = [
      {
        title: 'Total Employees',
        mainValue: '10,000',
        badgeText: '2.4%',
        badgeIcon: 'arrow_upward',
        badgeType: 'success'
      },
      {
        title: 'Payroll Cost',
        mainValue: '₹18.5',
        subValue: 'Cr',
        badgeText: '4.2%',
        badgeIcon: 'arrow_upward',
        badgeType: 'success'
      },
      {
        title: 'Pending Approval',
        mainValue: '03',
        badgeText: 'Requires action',
        badgeType: 'warning',
        borderType: 'amber'
      },
      {
        title: 'Exceptions',
        mainValue: '24',
        badgeText: '8%',
        badgeIcon: 'arrow_downward',
        badgeType: 'success',
        borderType: 'teal'
      }
    ];
    return of(data).pipe(delay(300));
  }

  getCountryCards(): Observable<CountryCardData[]> {
    const data: CountryCardData[] = [
      {
        countryCode: 'IN',
        countryName: 'INDIA',
        flagCode: 'in',
        employees: '4,500',
        status: 'Completed',
        statusType: 'success',
        totalCostValue: '₹6.2 Cr'
      },
      {
        countryCode: 'US',
        countryName: 'USA',
        flagCode: 'us',
        employees: '3,200',
        status: 'Processing',
        statusType: 'warning',
        totalCostValue: '$1.1 M'
      },
      {
        countryCode: 'UK',
        countryName: 'UK',
        flagCode: 'gb',
        employees: '2,300',
        status: 'Pending',
        statusType: 'danger',
        totalCostValue: '£850',
        totalCostSubValue: 'K',
        borderType: 'amber',
        showReviewButton: true
      }
    ];
    return of(data).pipe(delay(400));
  }

  getChartData(): Observable<ChartData> {
    const data: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      data: [12, 19, 15, 25, 22, 30, 28, 35],
      backgroundColor: ['#e1e2e8', '#e1e2e8', '#e1e2e8', '#e1e2e8', '#e1e2e8', '#e1e2e8', '#e1e2e8', '#005ac1'],
      hoverBackgroundColor: ['#c4c6d0', '#c4c6d0', '#c4c6d0', '#c4c6d0', '#c4c6d0', '#c4c6d0', '#c4c6d0', '#004799']
    };
    return of(data).pipe(delay(500));
  }

  getRecentActivity(): Observable<ActivityItem[]> {
    const data: ActivityItem[] = [
      {
        id: '1',
        title: 'INDIA payroll approved',
        subtitle: '10 mins ago • System',
        iconType: 'success'
      },
      {
        id: '2',
        title: 'USA processing started',
        subtitle: '1 hr ago • Sarah Jenkins',
        iconType: 'warning'
      },
      {
        id: '3',
        title: 'UK exceptions detected (12)',
        subtitle: '2 hrs ago',
        iconType: 'danger',
        showReviewButton: true
      },
      {
        id: '4',
        title: 'Global report generated',
        subtitle: 'Yesterday, 14:30',
        iconType: 'info'
      },
      {
        id: '5',
        title: 'New employee batch synced',
        subtitle: 'Yesterday, 09:00',
        iconType: 'info'
      }
    ];
    return of(data).pipe(delay(600));
  }
}
