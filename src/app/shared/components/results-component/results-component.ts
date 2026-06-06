import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-component',
  imports: [],
  templateUrl: './results-component.html',
  styleUrl: './results-component.scss',
})
export class ResultsComponent {
  @Input() question?:string;

  
}
