import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DropdownOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() options: DropdownOption[] = [];
  @Input() placeholder: string = 'Select...';
  @Input() selectedValue?: string;
  
  @Output() selectionChange = new EventEmitter<string>();

  isOpen = false;

  constructor(private elementRef: ElementRef) {}

  get selectedLabel(): string {
    const selected = this.options.find(opt => opt.value === this.selectedValue);
    return selected ? selected.label : this.placeholder;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: DropdownOption) {
    this.selectedValue = option.value;
    this.selectionChange.emit(option.value);
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
