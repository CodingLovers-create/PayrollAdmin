import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface DropdownOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  @Input() options: DropdownOption[] = [];
  @Input() selectedValue = '';
  @Input() placeholder = 'Select';

  @Output() selectionChange = new EventEmitter<string>();

  onSelectionChange(event: Event) {
    const select = event.target as HTMLSelectElement;

    this.selectionChange.emit(select.value);
  }
}
