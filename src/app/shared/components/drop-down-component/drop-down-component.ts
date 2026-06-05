import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-drop-down-component',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './drop-down-component.html',
  styleUrl: './drop-down-component.scss',
})
export class DropDownComponent {
  sortBy = false; //false = down true = up

  changeSortBy(){
    this.sortBy = !this.sortBy;
    console.log(this.sortBy);
    
  }
}
