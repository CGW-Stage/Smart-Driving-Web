import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private backend: AngularFireAuth){

  }

  clickMe(){
    this.backend.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    
  }
}
