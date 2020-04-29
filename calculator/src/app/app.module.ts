import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ResultComponent } from './result/result.component';
//import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ResultComponent,
    //PageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
