import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header-component';
import { PrimaryButtonComponent } from "../../components/primary-button-component/primary-button-component";
import { SurveryStatusComponent } from "../../components/survery-status-component/survery-status-component";
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-survey-page',
  imports: [HeaderComponent,
    PrimaryButtonComponent,
    SurveryStatusComponent,
    RouterLink],
  templateUrl: './survey-page.html',
  styleUrl: './survey-page.scss',
})
export class SurveyPage {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/']);
  }
}
