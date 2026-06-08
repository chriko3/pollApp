import { Component } from '@angular/core';
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

  constructor(private categoriesService: CategoriesService) { }

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
    console.log(id);
    this.sortBy = !this.sortBy;
    this.display = !this.sortBy;
  }
}
