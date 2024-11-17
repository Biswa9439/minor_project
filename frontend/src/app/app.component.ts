import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  @ViewChildren('highlight') marker!: QueryList<any>;
  @ViewChild('child') child!: ChildComponent;
  constructor(){

  }
  ngOnInit(): void {
    console.log(this.marker)
  }
  ngAfterViewInit(): void {
    console.log(this.marker)
    console.log(this.child.counter)
    //this.marker.nativeElement.style.color = "red"
    this.marker.map((item: any) => {
      item.nativeElement.style.color = "red"
    })
  }
  inc(){
    this.child.increment()
    console.log(this.child.counter)
  }
  dec(){
    this.child.decrement()
    console.log(this.child.counter)
  }
  reset(){
    this.child.reset()
    console.log(this.child.counter)
  }
}
