import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { SurveryStatusComponent } from '../../components/survery-status-component/survery-status-component';
import { GotoServieces } from '../../services/goto-servieces';
import { QuestionAnswerComponent } from '../../components/question-answer-component/question-answer-component';
import { AnswearComponent } from '../../components/answear-component/answear-component';
import { ActivatedRoute } from '@angular/router';
import { SupabaseServieces } from '../../services/supabase-servieces';
import { ResultsComponent } from '../../components/results-component/results-component';

@Component({
  selector: 'app-survey-page',
  imports: [
    HeaderComponent,
    PrimaryButtonComponent,
    SurveryStatusComponent,
    QuestionAnswerComponent,
    AnswearComponent,
    ResultsComponent,
  ],
  templateUrl: './survey-page.html',
  styleUrl: './survey-page.scss',
})
export class SurveyPage {
  constructor(
    private supabaseService: SupabaseServieces,
    private goto: GotoServieces,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  survey: any = null;
  questions: any = null;
  answers: any = null;

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.survey = await this.supabaseService.getSurveyById(Number(id));
    this.questions = await this.supabaseService.getQuestionsById(Number(id));
    this.answers = await this.supabaseService.getAnswersById(Number(id));

    const counters: number[] = [];
    let max:number = 0;
    for (let index = 0; index < this.answers.length; index++) {
      const qId = this.answers[index].question_id;
      if (!counters[qId]) {
        counters[qId] = 0;
      }

      counters[qId] += this.answers[index].clicked;
    }

    for (let index = 0; index < counters.length; index++) {
      max += counters[index] ?? 0;
    }
    console.log(max);
    


    this.getEndDate();

    this.cdr.detectChanges();
  }

  goHome() {
    this.goto.goToHome();
  }

  goCreate() {
    this.goto.goToCreate();
  }

  getEndDate() {
    const endDay = new Date();
    endDay.setDate(new Date().getDate() + this.survey.endsDay);
    return `${endDay.getDate()}.${endDay.getMonth() + 1}.${endDay.getFullYear()}`;
  }
}
