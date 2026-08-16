import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-card',
  imports: [CommonModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css'
})
export class SummaryCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) mainValue!: string;
  @Input() subValue?: string;
  @Input({ required: true }) badgeText!: string;
  @Input() badgeIcon?: string;
  @Input() badgeType: 'success' | 'warning' | 'danger' | 'neutral' = 'success';
  @Input() borderType?: 'amber' | 'teal';
}
