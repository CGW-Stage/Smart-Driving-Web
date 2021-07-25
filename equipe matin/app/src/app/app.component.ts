import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

interface userType { name: string, id: string, email: string, ville: string, model: string, marque: string, assurance: string, role: 'client' | 'worker' | 'admin' }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: userType
  title = 'SMART DRIVING'
  view: 'menu' | 'new user' = 'menu'

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
    this.view = 'new user'
  }

  initNewUser() {
    this.currentUser = {} as userType
  }

  
}
