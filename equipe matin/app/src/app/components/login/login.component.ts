import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private backend: AngularFireAuth) { }

  ngOnInit(): void {
  }

  // login with google
  google_login() {
    this.backend.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log(res);
        // this.currentUser.name = res.user.displayName
        // this.currentUser.id = res.user.email

      })
      .catch(error => {
        console.log(error);
      })
  }

  // login with facebook
  fb_login() {
    this.backend.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })

  }
}
