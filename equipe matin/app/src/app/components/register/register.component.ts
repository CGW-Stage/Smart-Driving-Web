import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() user
  @Input() visible

  constructor(private database: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  createUser() {
    this.user.role = 'client'
    
    console.log(this.user)
    this.database.object('users/' + this.user.id).set(this.user)
    this.visible = false
  }
}
