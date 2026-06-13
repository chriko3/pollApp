import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SupabaseServieces } from '../../services/supabase-servieces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkbox-component',
  imports: [],
  templateUrl: './checkbox-component.html',
  styleUrl: './checkbox-component.scss',
})
export class CheckboxComponent {
  @Input() answer: string = '';
  @Input() borderColor = '#000000';
  @Input() checkedCheckbox = false;
  @Output() checkedChange = new EventEmitter<string | null>();

  answers: any = null;

  constructor(
    private supabaseService: SupabaseServieces,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.answers = await this.supabaseService.getAnswersById(Number(id));
  }

  changeValueOnDB(answer: string) {
    this.checkedCheckbox = !this.checkedCheckbox;
    this.checkedChange.emit(this.checkedCheckbox ? answer : null);

    for (let index = 0; index < this.answers.length; index++) {
      if (answer === this.answers[index].answer_text) {
        this.supabaseService.updatedClickedAnswerInDB(answer, this.checkedCheckbox);
        break;
      }
    }
  }
}