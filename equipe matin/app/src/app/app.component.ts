import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser = {} as { name: string, id: string, email: string }
  title = 'SMART DRIVING'

  constructor(private backend: AngularFireAuth) {

  }

  ngOnInit() {
    this.backend.authState.subscribe(res => {
      if(res){
        this.currentUser.name = res.displayName
        this.currentUser.email = res.email
        this.currentUser.id = res.uid
      }
      else{
        this.currentUser = null
      }

      

    })
  }

  onBack(){
    console.log('return');
    
  }

  logout(){
    this.backend.signOut()
    
  }
}
