import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

// this passes data to external Component
  @Output()
  counted: EventEmitter<number> = new EventEmitter<number>();

  counter: number = 0;
  fontColour: string = "black";

  constructor() { }

  ngOnInit(): void {
  }

  onComponentClick(value: MouseEvent) {
    console.log(value);
    value.preventDefault();
    this.counter += 1;
    this.counted.emit(1);

    switch (true) {
      case (this.counter > 30):
        this.fontColour = "black";
        break;
      case (this.counter > 25):
        this.fontColour = "red";
        break;
      case (this.counter > 20):
        this.fontColour = "blue";
        break;
      case (this.counter > 15):
        this.fontColour = "green";
        break;
      case (this.counter > 10):
        this.fontColour = "orange";
        break;
      case (this.counter > 5):
        this.fontColour = "purple";
        break;
      default:
        this.fontColour = "black";
        break;
    }
  }
}
