import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field-component',
  imports: [],
  templateUrl: './input-field-component.html',
  styleUrl: './input-field-component.scss',
})
export class InputFieldComponent {
  @Input() placeholder: string = '';
  @Input() fieldName: string = '';
  @Input() height = 25;
  @Input() minwidth =  330;
  
  @Output() valueChanged = new EventEmitter<{ field: string; value: string }>();

  onChange(value: string) {
    this.valueChanged.emit({ field: this.fieldName, value });
  }
}
