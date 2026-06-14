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
import { DropDownComponent } from '../../components/drop-down-component/drop-down-component';

@Component({
  selector: 'app-survey-page',
  imports: [
    HeaderComponent,
    PrimaryButtonComponent,
    SurveryStatusComponent,
    QuestionAnswerComponent,
    AnswearComponent,
    ResultsComponent,
    DropDownComponent,
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
  counters: number[] = [];

  responsivOpenCloseToggle = true;

  /**
   * Loads survey data on start.
   * Builds statistics and subscribes to updates.
   */
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.survey = await this.supabaseService.getSurveyById(Number(id));
    this.questions = await this.supabaseService.getQuestionsById(Number(id));
    this.answers = await this.supabaseService.getAnswersById(Number(id));
    this.getEndDate();
    this.buildCounters();
    this.cdr.detectChanges();

    this.supabaseService.subscribeAnswers((payload) => {
      this.loadStatisticsFromDB();
    });
  }

  toggle() {
    this.responsivOpenCloseToggle = !this.responsivOpenCloseToggle;
  }

  /**
   * Reloads answer statistics from database.
   */
  async loadStatisticsFromDB() {
    this.answers = await this.supabaseService.getAnswersById(this.survey.id);
    this.buildCounters();
    this.cdr.detectChanges();
  }

  /**
   * Builds counter array from answers.
   * Sums clicked values per question.
   */
  buildCounters() {
    this.counters = [];

    for (let i = 0; i < this.answers.length; i++) {
      const qId = this.answers[i].question_id;

      if (!this.counters[qId]) {
        this.counters[qId] = 0;
      }
      this.counters[qId] += this.answers[i].clicked;
    }
  }

  /**
   * Navigates to home page.
   */
  goHome() {
    this.goto.goToHome();
  }

  /**
   * Navigates to create page.
   */
  goCreate() {
    this.goto.goToCreate();
  }

  /**
   * Calculates survey end date.
   * Returns formatted string.
   */
  getEndDate() {
    const endDay = new Date();
    endDay.setDate(new Date().getDate() + this.survey.endsDay);
    return `${endDay.getDate()}.${endDay.getMonth() + 1}.${endDay.getFullYear()}`;
  }
}
