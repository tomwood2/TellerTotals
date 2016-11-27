import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent } from './app.component';
import { TellerTotalsComponent } from './teller-totals/teller-totals.component';

@NgModule({
  declarations: [
    AppComponent,
    TellerTotalsComponent
 ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    DatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
