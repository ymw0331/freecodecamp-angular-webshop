import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'fiters.component.html',
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>()

  // hold list of categories to filter products
  categories = ['shoes', 'sports']

  constructor() {

  }

  ngOnInit(): void {
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category)
  }
}
