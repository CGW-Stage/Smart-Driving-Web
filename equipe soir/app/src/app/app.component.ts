import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  afficherGoogle: boolean = true
  menu: string = 'login'

  constructor(private backend: AngularFireAuth) {

  }

  ngOnInit(){
   this.backend.authState.subscribe(result => {
     if(result){
      this.menu = 'menu'
     }
     else{
       console.log('Auhtentification échouée');
       this.menu = 'login'
     }
   })
  }

  logout(){
     this.backend.signOut()
  }
}
