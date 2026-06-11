import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '../checkbox-component/checkbox-component';

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

  getLetterFromNumber(i: number) {
    return String.fromCharCode(65 + i);
  }
}
