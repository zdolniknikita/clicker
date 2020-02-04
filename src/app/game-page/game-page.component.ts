import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClickerService } from '../services/clicker.service'

@Component({
  selector: 'game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})

export class GamePageComponent implements OnInit {

  userName: string
  start: boolean
  time: number
  count: number
  timeCount: number
  minRange: number
  maxRange: number

  @Input() stage: string
  @Output() changeStage = new EventEmitter() 


  constructor(private CS: ClickerService) {

    this.userName = this.CS.currentUser
    this.start = false
    this.time = 10
    this.count = 0
    this.timeCount
    this.minRange = 1
    this.maxRange = 120
  }

  onStart = () => {
    this.start = true
    this.timeCount = this.time
    let timer = setInterval(() => {
      if (this.time === 0) {

        clearInterval(timer)
        this.CS.addRecord(this.userName, {time: this.timeCount, record: this.count, date: new Date().toISOString()})
        // this.changeStage.emit('finish')
        this.CS.changeStage('finish')
        return
      }
      
      this.time--
    }, 1000)
  }

  clicker = () => {
    this.count ++
  }



  ngOnInit() {
  }

}
