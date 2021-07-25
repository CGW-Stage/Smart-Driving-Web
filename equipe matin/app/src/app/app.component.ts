import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

interface userType { name: string, id: string, email: string, ville: string, model: string, marque: string, assurance: string }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: userType
  title = 'SMART DRIVING'
  view: 'menu' = 'menu'
  visible = false

  constructor(private backend: AngularFireAuth, private database: AngularFireDatabase) {

  }

  ngOnInit() {
    this.initNewUser()

    this.backend.authState.subscribe(res => {
      console.log(res);

      if (res) {
        this.currentUser.name = res.displayName
        this.currentUser.email = res.email
        this.currentUser.id = res.uid
      }
      else {
        this.initNewUser()
      }
    })
  }

  onBack() {
    console.log('return');
  }

  // log out function
  logout() {
    this.backend.signOut()
  }

  // 
  registerUser() {
    this.visible = true
  }

  initNewUser() {
    this.currentUser = {} as userType
  }

  createUser() {
    console.log(this.currentUser)
    this.database.object('users/' + this.currentUser.id).set(this.currentUser)
    this.visible = false
  }
}
