import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})

export class LoginInputComponent implements OnInit {

  @Input() userName: string
  @Output() onChangeUserName = new EventEmitter<any>()

  constructor() { }
 
  ngOnInit() {
  }

  onChange = (event) => {
    // console.log(event.target.value)
    this.onChangeUserName.emit(event.target.value)
  }

}
