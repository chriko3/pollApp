import { Component } from '@angular/core';
import { SurveryStatusComponent } from '../survery-status-component/survery-status-component';
import { SurveyViewComponent } from "../survey-view-component/survey-view-component";

@Component({
  selector: 'app-home-component',
  imports: [SurveryStatusComponent, SurveyViewComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent { }
