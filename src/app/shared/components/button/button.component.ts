import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }

  get buttonClasses(): string {
    const base =
      'rounded-lg font-semibold transition';

    const sizes = {
      small: 'px-3 py-1.5 text-xs',
      medium: 'px-5 py-2.5 text-sm',
      large: 'px-6 py-3 text-base'
    };

    const variants = {
      primary: 'bg-slate-900 text-white hover:bg-slate-800',
      secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
      danger: 'bg-red-600 text-white hover:bg-red-700'
    };

    return `${base} ${sizes[this.size]} ${variants[this.variant]}`;
  }

}
