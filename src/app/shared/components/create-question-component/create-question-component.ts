import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeleteButtonComponent } from '../delete-button-component/delete-button-component';
import { InputFieldComponent } from '../input-field-component/input-field-component';
import { CheckboxComponent } from '../checkbox-component/checkbox-component';
import { TertiaryButtonComponent } from '../tertiary-button-component/tertiary-button-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-question-component',
  imports: [
    DeleteButtonComponent,
    InputFieldComponent,
    CheckboxComponent,
    TertiaryButtonComponent,
    FormsModule,
  ],
  templateUrl: './create-question-component.html',
  styleUrl: './create-question-component.scss',
})
export class CreateQuestionComponent {
  @Input() questionNumber = 1;
  @Output() valueChanged = new EventEmitter<{ field: string; value: string }>();
  @Output() destroy = new EventEmitter<void>();
  questions = [1, 2];
  question = {
    title: '',
    allowMultiple: false,
    answers: ['', ''],
  };

  destroySection() {
    this.destroy.emit();
  }

  onChildChange(event: { field: string; value: string }) {
    this.valueChanged.emit(event);
  }

  addQuestion() {
    if (this.questions.length < 5) {
      this.questions.push(this.questions.length + 1);
    }
  }

  deleteQuestion(i: number) {
    if (i >= 2) {
      this.questions.splice(i, 1);
    }
  }

  getLetterFromNumber(i: number) {
    return String.fromCharCode(65 + i);
  }
}
