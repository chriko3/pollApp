import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button-component/primary-button-component';
import { HeaderComponent } from '../header-component/header-component';
import { HighlightCardComponent } from '../highlight-card-component/highlight-card-component';
import { FilterButtonComponent } from '../filter-button-component/filter-button-component';
import { DropDownComponent } from '../drop-down-component/drop-down-component';
import { SurveyViewComponent } from '../survey-view-component/survey-view-component';
import { ResultsComponent } from '../results-component/results-component';

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent,
    PrimaryButtonComponent,
    HighlightCardComponent,
    FilterButtonComponent,
    DropDownComponent,
  SurveyViewComponent,
ResultsComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
}
