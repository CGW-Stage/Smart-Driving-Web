import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private backend: AngularFireAuth) { }

  ngOnInit(): void {
  }


  google() {
    this.backend.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(results => {
      console.log(results);
      
    })
    .catch(error => {
      console.log(error);
      
    })

  }

  facebook() {
    this.backend.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(results => {
      console.log(results);
      
    })
    .catch(error => {
      console.log(error);
      
    })
  }

  
}
