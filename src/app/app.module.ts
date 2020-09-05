import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PayComponent } from './pay/pay.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardDirectivesModule } from 'angular-cc-library';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    CreditCardDirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
