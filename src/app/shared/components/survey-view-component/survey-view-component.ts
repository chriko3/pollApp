import { Component } from '@angular/core';
import { SurveryStatusComponent } from "../survery-status-component/survery-status-component";

@Component({
  selector: 'app-survey-view-component',
  imports: [SurveryStatusComponent],
  templateUrl: './survey-view-component.html',
  styleUrl: './survey-view-component.scss',
})
export class SurveyViewComponent {}
