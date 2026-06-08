import { Component, EventEmitter, Output } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";
import { CategoriesService } from '../../services/categories-servieces';

@Component({
  selector: 'app-drop-down-component',
  imports: [ɵEmptyOutletComponent,],
  templateUrl: './drop-down-component.html',
  styleUrl: './drop-down-component.scss',
})
export class DropDownComponent {
  sortBy = false; //false = down true = up
  display = true;

  selectedItem: string = "";

  constructor(private categoriesService: CategoriesService) { }
  @Output() categorySelected = new EventEmitter<number>();

  listItems: string[] = [];

  ngOnInit() {
    this.listItems = this.categoriesService.getCategories();
  }

  changeSortBy() {
    this.sortBy = !this.sortBy;
    console.log(this.sortBy);
    this.display = !this.sortBy;
  }

  selectedCategorie(id: number) {
    this.selectedItem = this.listItems[id];
    console.log(id);
    this.categorySelected.emit(id);
    this.sortBy = !this.sortBy;
    this.display = !this.sortBy;
  }

  deleteFilter() {
    this.categorySelected.emit(100);
    this.selectedItem = "";
  }
}
