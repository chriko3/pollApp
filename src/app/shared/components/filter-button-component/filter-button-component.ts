import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-button-component',
  imports: [],
  templateUrl: './filter-button-component.html',
  styleUrl: './filter-button-component.scss',
})
export class FilterButtonComponent {
  @Input() isClicked?: Boolean;

  changeBgColor() {
    this.isClicked = !this.isClicked;
  }
}
