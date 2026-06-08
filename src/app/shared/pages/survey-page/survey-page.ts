import { Component, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header-component';
import { PrimaryButtonComponent } from "../../components/primary-button-component/primary-button-component";
import { SurveryStatusComponent } from "../../components/survery-status-component/survery-status-component";
import { GotoServieces } from '../../services/goto-servieces';
import { QuestionAnswerComponent } from '../../components/question-answer-component/question-answer-component';
import { AnswearComponent } from "../../components/answear-component/answear-component";
import { ActivatedRoute } from '@angular/router';
import { SupabaseServieces } from '../../services/supabase-servieces';

@Component({
  selector: 'app-survey-page',
  imports: [HeaderComponent,
    PrimaryButtonComponent,
    SurveryStatusComponent,
    QuestionAnswerComponent,
    AnswearComponent,
  ],
  templateUrl: './survey-page.html',
  styleUrl: './survey-page.scss',
})
export class SurveyPage {
  constructor(
    private supabaseService: SupabaseServieces,
    private goto: GotoServieces,
    private route: ActivatedRoute
  ) { }
    surveys: any[] = [];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.loadDBSurvey();
  }

  goHome() {
    this.goto.goToHome();
  }

  goCreate() {
    this.goto.goToCreate();
  }

  async loadDBSurvey() {
      this.surveys = await this.supabaseService.getSurveys();
  }

}
