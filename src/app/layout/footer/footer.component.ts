import { Component } from '@angular/core';
import { APP_CONFIG } from '../../core/config/app.config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 appName = APP_CONFIG.name;
  appSubName = APP_CONFIG.subName;
  appYear = APP_CONFIG.year;
}
