import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-component',
  imports: [],
  templateUrl: './results-component.html',
  styleUrl: './results-component.scss',
})
export class ResultsComponent {
  @Input() question?: string;

  @Input() displayAnswers: 2 | 3 | 4 = 2;

  statisticBars: { answer: string; progress: number; }[] = [
    { answer: 'A', progress: 0 },
    { answer: 'B', progress: 0 },
    { answer: 'C', progress: 0 },
    { answer: 'D', progress: 0 }
  ];


}
