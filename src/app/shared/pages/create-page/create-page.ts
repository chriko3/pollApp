import { Component } from '@angular/core';
import { SurveryStatusComponent } from "../../components/survery-status-component/survery-status-component";
import { SecondaryButtonComponent } from "../../components/secondary-button-component/secondary-button-component";
import { PrimaryButtonComponent } from "../../components/primary-button-component/primary-button-component";
import { RouterLink, Router } from '@angular/router';
import { HeaderComponent } from "../../components/header-component/header-component";
import { InputFieldComponent } from "../../components/input-field-component/input-field-component";
import { DeleteButtonComponent } from "../../components/delete-button-component/delete-button-component";
import { DropDownComponent } from "../../components/drop-down-component/drop-down-component";
import { HighlightCardComponent } from "../../components/highlight-card-component/highlight-card-component";
import { CreateQuestionComponent } from "../../components/create-question-component/create-question-component";

@Component({
  selector: 'app-create-page',
  imports: [SurveryStatusComponent,
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    RouterLink, 
    HeaderComponent, 
    InputFieldComponent, 
    DeleteButtonComponent, 
    DropDownComponent, 
    HighlightCardComponent, 
    CreateQuestionComponent],
  templateUrl: './create-page.html',
  styleUrl: './create-page.scss',
})
export class CreatePage {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/']);
  }

  questions:number[] = [1];

  addQuestion() {
    if (this.questions.length < 10) {
      this.questions.push(this.questions.length + 1);
    }
  }
}
