import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.scss']
})
export class EmpCountComponent {
  selectedRadio: any='All';
  @Input() all: number = 5;
  @Input() male: number = 3;
  @Input() female: number = 2;
  @Input() other: number = 2;
  @Output() data = new EventEmitter<string>;
showEmp(){
console.log(this.selectedRadio)
this.data.emit(this.selectedRadio)
}
}
