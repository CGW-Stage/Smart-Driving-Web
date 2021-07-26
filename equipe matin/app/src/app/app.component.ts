import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

interface userType { name: string, id: string, email: string, ville: string, model: string, marque: string, assurance: string, role: 'client' | 'worker' | 'admin', payment: any }
enum viewType { appointement, payment, profile, assurance, shop, register }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: userType
  title = 'SMART DRIVING'
  view = viewType.profile

  constructor(private backend: AngularFireAuth, private database: AngularFireDatabase) {

  }

  ngOnInit() {
    this.initNewUser()

    this.backend.authState.subscribe(res => {

      if (res) {
        this.database.object(`users/${res.uid}`).valueChanges()
          .subscribe((user: userType) => {
            this.currentUser = user
          })
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
    this.view = viewType.register
  }

  initNewUser() {
    this.currentUser = {} as userType
  }

  changeMenu(index) {
    this.view = index
  }
}
