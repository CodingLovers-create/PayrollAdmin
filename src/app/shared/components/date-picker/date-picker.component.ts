import { Component, Input, Output, EventEmitter, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-picker',
  imports: [CommonModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent implements OnInit {
  @Input() value: string = '2026-08';
  @Output() valueChange = new EventEmitter<string>();
  
  isOpen = false;
  currentYear = 2026;
  
  months = [
    { index: 1, shortName: 'Jan' }, { index: 2, shortName: 'Feb' }, { index: 3, shortName: 'Mar' },
    { index: 4, shortName: 'Apr' }, { index: 5, shortName: 'May' }, { index: 6, shortName: 'Jun' },
    { index: 7, shortName: 'Jul' }, { index: 8, shortName: 'Aug' }, { index: 9, shortName: 'Sep' },
    { index: 10, shortName: 'Oct' }, { index: 11, shortName: 'Nov' }, { index: 12, shortName: 'Dec' }
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.value) {
      const [year] = this.value.split('-');
      this.currentYear = parseInt(year);
    }
  }

  get formattedDate(): string {
    if (!this.value) return 'Select Date';
    const [year, month] = this.value.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  togglePicker() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.value) {
      const [year] = this.value.split('-');
      this.currentYear = parseInt(year);
    }
  }

  changeYear(delta: number) {
    this.currentYear += delta;
  }

  isSelected(monthIndex: number): boolean {
    if (!this.value) return false;
    const [year, month] = this.value.split('-');
    return parseInt(year) === this.currentYear && parseInt(month) === monthIndex;
  }

  selectMonth(monthIndex: number) {
    const monthStr = monthIndex < 10 ? `0${monthIndex}` : `${monthIndex}`;
    this.value = `${this.currentYear}-${monthStr}`;
    this.valueChange.emit(this.value);
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
