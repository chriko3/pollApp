import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header-component';
import { PrimaryButtonComponent } from "../../components/primary-button-component/primary-button-component";
import { SurveryStatusComponent } from "../../components/survery-status-component/survery-status-component";
import { GotoServieces } from '../../services/goto-servieces';

@Component({
  selector: 'app-survey-page',
  imports: [HeaderComponent,
    PrimaryButtonComponent,
    SurveryStatusComponent,],
  templateUrl: './survey-page.html',
  styleUrl: './survey-page.scss',
})
export class SurveyPage {
  constructor(private goto: GotoServieces) {
  }

  goHome(){
    this.goto.goToHome();
  }

  goCreate(){
    this.goto.goToCreate();
  }

}
