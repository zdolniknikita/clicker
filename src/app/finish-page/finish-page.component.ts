import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClickerService } from '../services/clicker.service'
import IUser from '../interfaces/IUser.interface';

@Component({
  selector: 'finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.css']
})
export class FinishPageComponent implements OnInit {

  @Input() stage: string
  @Output() changeStage = new EventEmitter() 

  user: IUser

  constructor(private CS: ClickerService ) { 
    this.user = this.CS.getRecordsByCurrentUser()
  }

  ngOnInit() {
    console.log('records = ', this.CS.getRecordsByCurrentUser())
  }

  restart = () => {
    // this.changeStage.emit('game')
    this.CS.changeStage('game')

  }

  exit = () => {
    this.CS.changeStage('main')
    // this.changeStage.emit('main')
    console.log(this.CS.users)
  }

}
