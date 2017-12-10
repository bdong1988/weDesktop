import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent implements OnInit {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log('item count is ' + this.count);
  }

  onAddClick(): void {
    this.changeCount(1);
  }

  onMinusClick(): void {
    this.changeCount(-1);
    if (this.count <= 0) {
      return;
    }
    this.count -= 1;
  }

  changeCount(delta: number): void {
    this.count = Math.max(0, this.count + delta);
    this.countChange.emit(this.count);
  }

  onCountChange(): void {
    this.count = Number(this.count);
    console.log("count type is ", typeof(this.count));
    console.log('count change to ', this.count);
    this.countChange.emit(this.count);
  }

}
