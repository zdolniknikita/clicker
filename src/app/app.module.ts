import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { FinishPageComponent } from './finish-page/finish-page.component';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { StartButtonComponent } from './components/start-button/start-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GamePageComponent,
    FinishPageComponent,
    LoginInputComponent,
    LoginButtonComponent,
    StartButtonComponent,
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
