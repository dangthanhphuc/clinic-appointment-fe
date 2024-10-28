import { CommonModule } from '@angular/common';
import { Component, computed, effect, EventEmitter, input, Input, OnChanges, OnInit, output, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit{

  currentPage = 1;
  totalItems = input.required<number>();
  pageSize = input.required<number>();
  visibleRangeLength = input(3);
  valueChange = output<number>();
  totalPages = computed(() => {
    return Math.ceil(this.totalItems() / this.pageSize());
  });
  public visiblePages!: number[];

  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.totalPages()}`);
      this.updateVisiblePages();
    });
  }
  ngOnInit(): void {
    this.updateVisiblePages();
  }

  public selectPage(page: number): void {
    this.currentPage = page;
    this.updateVisiblePages();  
    this.valueChange.emit(this.currentPage);
  }
  
  private updateVisiblePages(): void {
    // Kích thước của pagination sẽ được hiển thị là bao nhiêu phần tử
    const length = Math.min(this.totalPages(), this.visibleRangeLength());
    const startIndex = Math.max( // Fix
      Math.min(
        this.currentPage - Math.ceil(length / 2),
        this.totalPages() - length
      ),
      0
    );
    this.visiblePages = Array.from(
      new Array(length).keys(), // Khởi tạo giá trị từ 0 đến length - 1
      (item) => item + startIndex + 1 // 
    );
  }

}
