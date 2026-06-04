import { Component } from '@angular/core';
import { SurveryStatusComponent } from '../survery-status-component/survery-status-component';

@Component({
  selector: 'app-highlight-card-component',
  imports: [SurveryStatusComponent],
  templateUrl: './highlight-card-component.html',
  styleUrl: './highlight-card-component.scss',
})
export class HighlightCardComponent {}
