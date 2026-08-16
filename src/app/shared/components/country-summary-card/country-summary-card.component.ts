import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-summary-card',
  imports: [CommonModule],
  templateUrl: './country-summary-card.component.html',
  styleUrl: './country-summary-card.component.css'
})
export class CountrySummaryCardComponent {
  @Input({ required: true }) countryCode!: string;
  @Input({ required: true }) countryName!: string;
  @Input() flagCode?: string;
  @Input({ required: true }) employees!: string;
  @Input({ required: true }) status!: string;
  @Input() statusType: 'success' | 'warning' | 'danger' = 'success';
  @Input({ required: true }) totalCostValue!: string;
  @Input() totalCostSubValue?: string;
  @Input() borderType?: 'amber' | 'teal';
  @Input() showReviewButton?: boolean = false;
}
