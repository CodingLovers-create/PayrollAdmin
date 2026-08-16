import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ActionOption {
  label: string;
  value: string;
  danger?: boolean;
}

@Component({
  selector: 'app-action-menu',
  standalone: true,
  templateUrl: './action-menu.component.html'
})
export class ActionMenuComponent {
  @Input() options: ActionOption[] = [];

  @Output() selected = new EventEmitter<string>();

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: ActionOption) {
    this.selected.emit(option.value);
    this.isOpen = false;
  }
}