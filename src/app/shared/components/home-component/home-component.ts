import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button-component/primary-button-component';
import { SecondaryButtonComponent } from '../secondary-button-component/secondary-button-component';
import { FilterButtonComponent } from '../filter-button-component/filter-button-component';
import { SurveryStatusComponent } from '../survery-status-component/survery-status-component';
import { DeleteButtonComponent } from '../delete-button-component/delete-button-component';
import { CheckboxComponent } from '../checkbox-component/checkbox-component';
import { HighlightCardComponent } from '../highlight-card-component/highlight-card-component';
import { TertiaryButtonComponent } from '../tertiary-button-component/tertiary-button-component';

@Component({
  selector: 'app-home-component',
  imports: [TertiaryButtonComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent { }
