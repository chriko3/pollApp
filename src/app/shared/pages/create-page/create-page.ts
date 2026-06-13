import { Component } from '@angular/core';
import { SurveryStatusComponent } from '../../components/survery-status-component/survery-status-component';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { RouterLink, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header-component/header-component';
import { InputFieldComponent } from '../../components/input-field-component/input-field-component';
import { DeleteButtonComponent } from '../../components/delete-button-component/delete-button-component';
import { DropDownComponent } from '../../components/drop-down-component/drop-down-component';
import { HighlightCardComponent } from '../../components/highlight-card-component/highlight-card-component';
import { CreateQuestionComponent } from '../../components/create-question-component/create-question-component';
import { SupabaseServieces } from '../../services/supabase-servieces';
import { CategoriesService } from '../../services/categories-servieces';

@Component({
  selector: 'app-create-page',
  imports: [
    SurveryStatusComponent,
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    RouterLink,
    HeaderComponent,
    InputFieldComponent,
    DeleteButtonComponent,
    DropDownComponent,
    HighlightCardComponent,
    CreateQuestionComponent,
  ],
  templateUrl: './create-page.html',
  styleUrl: './create-page.scss',
})
export class CreatePage {
  constructor(
    private router: Router,
    private supabaseService: SupabaseServieces,
    private categoriesService: CategoriesService,
  ) {}

  filter = -1;

  newSurvey = {
    SurveyName: '',
    DescribingText: '',
    SetEndDate: 0,
    Category: '',
  };

  clear() {
    this.newSurvey.DescribingText = '';
    
  }

  onCategorySelected(id: number) {
    this.filter = id;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  questions: { question_headline: string; multiple_choice: boolean; answers: string[] }[] = [
    { question_headline: '', multiple_choice: false, answers: [] },
  ];

  addQuestion() {
    if (this.questions.length < 10) {
      this.questions.push({ question_headline: '', multiple_choice: false, answers: [] });
    }
  }

  removeSection(index: number) {
    this.questions.splice(index, 1);
  }

  getCategory() {
    const categories = this.categoriesService.getCategories();
    this.newSurvey.Category = categories[this.filter];
  }

  async publishSurvey() {
    this.getCategory();
    const survey = await this.supabaseService.createSurvey({
      headline: this.newSurvey.SurveyName,
      description: this.newSurvey.DescribingText,
      endsDay: this.newSurvey.SetEndDate,
      category: this.newSurvey.Category,
    });

    for (let i = 0; i < this.questions.length; i++) {
      const question = await this.supabaseService.createQuestion({
        survey_id: survey.id,
        multiple_choice: this.questions[i].multiple_choice,
        question_headline: this.questions[i].question_headline,
      });

      for (const answer of this.questions[i].answers) {
        await this.supabaseService.createAnswer({
          survey_id: survey.id,
          question_id: question.id,
          answer_text: answer,
        });
      }
    }
  }

  onInputChange(event: { field: string; value: string }) {
    if (event.field === 'SurveyName') {
      this.newSurvey.SurveyName = event.value;
    } else if (event.field === 'DescribingText') {
      this.newSurvey.DescribingText = event.value;
    } else if (event.field === 'SetEndDate') {
      this.newSurvey.SetEndDate = Number(event.value);
    }

    if (event.field.startsWith('QuestionTitle_')) {
      const index = Number(event.field.split('_')[1]) - 1;
      this.questions[index].question_headline = event.value;
    }

    if (event.field.startsWith('Answer_')) {
      const parts = event.field.split('_');
      const questionIndex = Number(parts[1]) - 1;
      const answerIndex = parts[2].charCodeAt(0) - 65;
      this.questions[questionIndex].answers[answerIndex] = event.value;
    }
  }
}
