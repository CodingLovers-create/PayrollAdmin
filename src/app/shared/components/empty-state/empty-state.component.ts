import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  imports: [],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.css'
})
export class EmptyStateComponent {

  @Input() icon: string = 'inbox';
  @Input() title: string = 'Nothing here yet';
  @Input() message: string = '';
}
