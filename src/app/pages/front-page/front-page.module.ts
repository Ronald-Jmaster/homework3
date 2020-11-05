import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FrontPageComponent } from './front-page.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    FrontPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [FrontPageComponent]
})
export class FrontPageModule { }
