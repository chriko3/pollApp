import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '../checkbox-component/checkbox-component';
import { SupabaseServieces } from '../../services/supabase-servieces';

@Component({
  selector: 'app-question-answer-component',
  imports: [CheckboxComponent],
  templateUrl: './question-answer-component.html',
  styleUrl: './question-answer-component.scss',
})
export class QuestionAnswerComponent {
  @Input() questionNumber = 1;
  @Input() questionTitle = '';
  @Input() questionMoreAnswers = true;

  @Input() questions: { text: string }[] = [];

   constructor(
    private supabaseService: SupabaseServieces
  ) {}

  getLetterFromNumber(i: number) {
    return String.fromCharCode(65 + i);
  }

  selectedAnswer: string | null = null;

  onSingleAnswerSelected(answer: string | null) {
    if (this.selectedAnswer !== null && this.selectedAnswer !== answer) {
      this.supabaseService.updatedClickedAnswerInDB(this.selectedAnswer, false);
    }
    this.selectedAnswer = answer;
  }
}
