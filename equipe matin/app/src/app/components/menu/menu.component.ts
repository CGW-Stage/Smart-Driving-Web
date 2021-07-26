import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
@Output() menuSelected = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  changed(index)  {
    this.menuSelected.emit(index)
  }
}
