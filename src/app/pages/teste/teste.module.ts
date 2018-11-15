import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TesteComponent } from './teste.component';

@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TesteComponent]
})
export class TesteModule { }
