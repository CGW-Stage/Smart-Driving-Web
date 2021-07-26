import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
@Output() menuSelected = new EventEmitter()
  @Input() selection
  
  constructor() { }

  ngOnInit(): void {
  }

  changed(index)  {
    this.menuSelected.emit(index)
  }
}
