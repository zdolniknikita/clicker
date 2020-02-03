import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ClickerService }  from '../services/clicker.service'

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  
  @Input() stage: string
  @Output() changeStage = new EventEmitter()

  userName: string

  constructor(private CS: ClickerService) { 
    this.userName = ''
  }

  ngOnInit() {

  }

  onChangeUserName = (userName: string) => {
    // console.log('onChangeUserName')
    // console.log(userName)
    this.userName = userName
  }

  onSubmit = () => {
    const { userName, CS, changeStage } = this

    if (!userName) return

    CS.addUSer(userName)
    // changeStage.emit('game')
    this.CS.changeStage('game')

  }

}
