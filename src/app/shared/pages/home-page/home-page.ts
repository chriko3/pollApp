import { Component, ChangeDetectorRef } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { HeaderComponent } from '../../components/header-component/header-component';
import { HighlightCardComponent } from '../../components/highlight-card-component/highlight-card-component';
import { FilterButtonComponent } from '../../components/filter-button-component/filter-button-component';
import { DropDownComponent } from '../../components/drop-down-component/drop-down-component';
import { SurveyViewComponent } from '../../components/survey-view-component/survey-view-component';
import { ResultsComponent } from '../../components/results-component/results-component';
import { SupabaseServieces } from '../../services/supabase-servieces';
import { RouterLink, Router } from '@angular/router';
import { GotoServieces } from '../../services/goto-servieces';
import { CreateQuestionComponent } from '../../components/create-question-component/create-question-component';
import { CategoriesService } from '../../services/categories-servieces';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    PrimaryButtonComponent,
    HighlightCardComponent,
    FilterButtonComponent,
    DropDownComponent,
    SurveyViewComponent,
    ResultsComponent,
    RouterLink,
    CreateQuestionComponent,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  surveys: any[] = [];
  surveysEndingSoon: any[] = [];

  filter = -1;
  activeSurveyFilter = true;
  pastSurveyFilter = false;

  constructor(
    private supabaseService: SupabaseServieces,
    private router: Router,
    private goto: GotoServieces,
    private cdr: ChangeDetectorRef,
  ) {}

  /**
   * Loads surveys on page start.
   * Sorts and selects top ending soon surveys.
   */
  async ngOnInit() {
    this.surveys = await this.supabaseService.getSurveys();
    this.surveysEndingSoon = this.surveys
      .filter((s) => s.endsDay >= 0)
      .sort((a, b) => a.endsDay - b.endsDay)
      .slice(0, 3);
    this.cdr.detectChanges();
  }

  /**
   * Sets selected category filter.
   */
  onCategorySelected(id: number) {
    this.filter = id;
  }

  /**
   * Opens survey detail page.
   */
  openPage(id: number) {
    this.router.navigate(['/survey', id]);
  }

  /**
   * Navigates to create page.
   */
  goCreate() {
    this.goto.goToCreate();
  }

  /**
   * Toggles between active and past surveys.
   */
  activeOrPastSurvey() {
    this.activeSurveyFilter = !this.activeSurveyFilter;
    this.pastSurveyFilter = !this.activeSurveyFilter;
  }
}
