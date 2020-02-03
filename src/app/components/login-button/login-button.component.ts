import { Component, OnInit, Output } from '@angular/core';
import { ClickerService } from '../../services/clicker.service'

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {


  constructor(private CS: ClickerService) { }

  ngOnInit() {
  }

  changeState = (stage) => {
    console.log('click')
    // this.CS.changeStage(stage)
  }

}
