import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TabItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  @Input() tabs: TabItem[] = [];
  @Input() activeTab: string = '';

  @Output() activeTabChange = new EventEmitter<string>();

  selectTab(value: string) {
    if (value === this.activeTab) return;
    this.activeTab = value;
    this.activeTabChange.emit(value);
  }
}
