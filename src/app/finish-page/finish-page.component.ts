import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClickerService } from '../services/clicker.service'
import IUser from '../interfaces/IUser.interface';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.css']
})
export class FinishPageComponent implements OnInit {

  @Input() stage: string
  @Output() changeStage = new EventEmitter() 

  user: IUser
  tableHead: Array<string>
  topUsers: Array<object>
  viewTop: boolean

  constructor(private CS: ClickerService ) { 
    this.user
    this.tableHead = []
    this.topUsers = []
    this.viewTop = false
  }

  ngOnInit() {
    this.user = this.CS.getRecordsByCurrentUser()
  }

  restart = () => {
    this.CS.getTopUsers()
    // this.changeStage.emit('game')
    this.CS.changeStage('game')

  }

  exit = () => {
    this.CS.getTopUsers()

    this.CS.changeStage('main')
    // this.changeStage.emit('main')
    console.log(this.CS.users)
  }

  viewTopUsers = () =>{
    console.log('viewTopUsers')
    this.topUsers = this.CS.getTopUsers().map(item => ({name: item.name, record: item.maxClicksOnSecond}))
    this.viewTop = true
  }

}
