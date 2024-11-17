import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TableViewComponent } from './table-view/table-view.component';
import { AgePipe } from './age.pipe';
import { TitlePipe } from './title.pipe';
import { EmpCountComponent } from './emp-count/emp-count.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PropertyBindingComponent,
    TableViewComponent,
    AgePipe,
    TitlePipe,
    EmpCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
