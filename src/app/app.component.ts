import { Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  stage: string
  stages: object
  
  constructor(private RM: Router) {
    this.title = 'clicker';
    this.stage = 'main'
    this.stages = {
      main: 'main',
      game: 'game',
      finish: 'finish'
    }
  }
  

  // changeStage = (stage: string) => {
  //   this.RM.navigate([stage])
  //   console.log('changeStage, new stage = ', stage)
  //   this.stage = this.stages[stage]
  // }
  
}
