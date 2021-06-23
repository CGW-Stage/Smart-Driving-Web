import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  clickMe(){
    console.log("message pour les développeurs !")
    alert("Message pour utilisateur")
  }
}
