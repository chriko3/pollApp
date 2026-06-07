import { Component } from '@angular/core';
import { SurveryStatusComponent } from "../../components/survery-status-component/survery-status-component";
import { SecondaryButtonComponent } from "../../components/secondary-button-component/secondary-button-component";
import { PrimaryButtonComponent } from "../../components/primary-button-component/primary-button-component";

@Component({
  selector: 'app-create-page',
  imports: [SurveryStatusComponent, SecondaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './create-page.html',
  styleUrl: './create-page.scss',
})
export class CreatePage {}
