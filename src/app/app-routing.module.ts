import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component'
import { GamePageComponent } from './game-page/game-page.component'
import { FinishPageComponent } from './finish-page/finish-page.component'


const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  },
  {
    path: 'finish',
    component: FinishPageComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
