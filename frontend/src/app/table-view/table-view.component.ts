import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  filterData: any;
  selectedRadioButtonValue = 'All'
  ngOnInit(): void {
    this.filterData = this.data;
  }

  data = [
    {name: 'Prakash', dob:'04/10/2000',dept: 'Finance',gender: 'male'},
    {name: 'rajesh', dob:'05/16/1976',dept: 'Accounting' ,gender: 'male'},
    {name: 'Sita', dob:'04/08/1986',dept: 'Clerk',gender: 'female'},
    {name: 'Soumya', dob:'08/28/2001',dept: 'Finance',gender: 'male'},
    {name: 'Satish', dob:'04/18/2000',dept: 'Accounting',gender: 'male'},
    {name: 'Pratichhi', dob:'12/15/1999',dept: 'Finance',gender: 'female'},
    {name: 'Diptimayee', dob:'07/19/1998',dept: 'Accounting',gender: 'other'}
  ]
  refresh(){
    this.data = [
      {name: 'Prakash', dob:'04/10/2000',dept: 'Finance',gender: 'male'},
      {name: 'rajesh', dob:'05/16/1976',dept: 'Accounting' ,gender: 'male'},
      {name: 'Sita', dob:'04/08/1986',dept: 'Clerk',gender: 'female'},
      {name: 'Soumya', dob:'08/28/2001',dept: 'Finance',gender: 'male'},
      {name: 'Satish', dob:'04/18/2000',dept: 'Accounting',gender: 'male'},
      {name: 'Pratichhi', dob:'12/15/1999',dept: 'Finance',gender: 'female'},
      {name: 'Diptimayee', dob:'07/19/1998',dept: 'Accounting',gender: 'other'},
      {name: 'Sumitra', dob:'07/19/1998',dept: 'Accounting',gender: 'other'}
    ]
  }
  showsData(event: any){
   console.log(event)
   this.selectedRadioButtonValue = event;
   if(event == 'All'){
    this.filterData = this.data
   }else{
    this.filterData = this.data.filter((item: any) => item.gender == event)
   }
  }
  trackByEmpCode(index: number, emp: any):string{
    return emp.code
  }
  getAllEmpCount(){
    return this.data.length;
  }
  getMaleEmpCount(){
    return this.data.filter((item:any) => item.gender == 'male').length;
  }
  getFemaleEmpCount(){
    return this.data.filter((item:any) => item.gender == 'female').length;
  }
  getOtherEmpCount(){
    return this.data.filter((item:any) => item.gender == 'other').length;
  }

}
