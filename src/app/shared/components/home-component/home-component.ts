import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button-component/primary-button-component';
import { SecondaryButtonComponent } from '../secondary-button-component/secondary-button-component';
import { FilterButtonComponent } from "../filter-button-component/filter-button-component";
import { SurveyViewComponent } from '../survey-view-component/survey-view-component';
import { SurveryStatusComponent } from '../survery-status-component/survery-status-component';
import { DeleteButtonComponent } from '../delete-button-component/delete-button-component';
import { CheckboxComponent } from '../checkbox-component/checkbox-component';
import { AnswearComponent } from '../answear-component/answear-component';
import { TertiaryButtonComponent } from '../tertiary-button-component/tertiary-button-component';
import { HighlightCardComponent } from '../highlight-card-component/highlight-card-component';
import { InputFieldComponent } from '../input-field-component/input-field-component';
import { DropDownComponent } from '../drop-down-component/drop-down-component';

@Component({
  selector: 'app-home-component',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FilterButtonComponent,
    SurveryStatusComponent,
    DeleteButtonComponent,
    CheckboxComponent,
    AnswearComponent,
    TertiaryButtonComponent,
    HighlightCardComponent,
    InputFieldComponent,
    DropDownComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent { 
}
