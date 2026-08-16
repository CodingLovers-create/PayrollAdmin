import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DashboardService, SummaryCardData, CountryCardData, ChartData, ActivityItem } from '../../core/services/dashboard.service';
import { SummaryCardComponent } from '../../shared/components/summary-card/summary-card.component';
import { CountrySummaryCardComponent } from '../../shared/components/country-summary-card/country-summary-card.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../shared/components/breadcrumb/breadcrumb.component';
import { BarChartComponent } from '../../shared/components/bar-chart/bar-chart.component';
import { DropdownComponent, DropdownOption } from '../../shared/components/dropdown/dropdown.component';
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SummaryCardComponent, CountrySummaryCardComponent, BreadcrumbComponent, BarChartComponent, DropdownComponent, DatePickerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  selectedMonth = '2026-08';
  selectedCountry = '';

  countryOptions: DropdownOption[] = [
    { label: 'INDIA', value: 'IN' },
    { label: 'USA', value: 'US' },
    { label: 'UK', value: 'UK' }
  ];

  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Dashboard' }
  ];

  summaryCards$!: Observable<SummaryCardData[]>;
  countryCards$!: Observable<CountryCardData[]>;
  chartData$!: Observable<ChartData>;
  recentActivity$!: Observable<ActivityItem[]>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.summaryCards$ = this.dashboardService.getSummaryCards();
    this.countryCards$ = this.dashboardService.getCountryCards();
    this.chartData$ = this.dashboardService.getChartData();
    this.recentActivity$ = this.dashboardService.getRecentActivity();
  }
}
