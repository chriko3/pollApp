import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button-component/primary-button-component';
import { SecondaryButtonComponent } from '../secondary-button-component/secondary-button-component';
import { FilterButtonComponent } from '../filter-button-component/filter-button-component';
import { SurveryStatusComponent } from '../survery-status-component/survery-status-component';

@Component({
  selector: 'app-home-component',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FilterButtonComponent,SurveryStatusComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {}
