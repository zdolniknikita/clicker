import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent implements OnInit {

  @Input() title: string
  @Input() pulse: false
  @Input() color: string

  @Output() onStart = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  start = () => {
    this.onStart.emit()
  }

}
