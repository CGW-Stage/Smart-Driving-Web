import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() register = new EventEmitter()

  constructor(private backend: AngularFireAuth) { }

  ngOnInit(): void {
  }

  // login with google
  google_login() {
    this.backend.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        if (res.additionalUserInfo.isNewUser) {
          this.register.emit()
        }
        console.log('connection reussie');

      })
      .catch(error => {
        console.log(error);
        console.log('connection echouée');
      })
  }

  // login with facebook
  fb_login() {
    this.backend.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        if (res.additionalUserInfo.isNewUser) {
          this.register.emit()
        }
        console.log('connection reussie');
      })
      .catch(error => {
        console.log(error);
        console.log('connection echouée');
      })

  }


}
