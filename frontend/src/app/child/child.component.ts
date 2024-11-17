import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  counter = 0;
  increment(){
    this.counter++
  }
  decrement(){
    this.counter--
  }
  reset(){
    this.counter = 0;
  }
}
