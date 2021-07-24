import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser = {} as { name: string, id: string, email: string }

  constructor(private backend: AngularFireAuth) {

  }

  ngOnInit() {
    this.backend.authState.subscribe(res => {
      this.currentUser.name = res.displayName
      this.currentUser.email = res.email
      this.currentUser.id = res.uid

      console.log('user connected');
      console.log(this.currentUser);

    })
  }

  // login with google
  google_login() {
    this.backend.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log(res);
        this.currentUser.name = res.user.displayName
        this.currentUser.id = res.user.email
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
