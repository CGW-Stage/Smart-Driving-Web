import { Component, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

interface userType {
  name: string, id: string, email: string, ville: string, model: string,
  marque: string, assurance: string, role: 'client' | 'worker' | 'admin', payment: any,
  garage: Array<{ date: number, type: 'maintenance' | 'installation', cost: number }>
}

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
  rdvs = []
  showCalendar = false

  constructor(
    private backend: AngularFireAuth,
    private database: AngularFireDatabase,
    private zone: NgZone
  ) {

    const d = new Date('2021/08/02')
    console.log(d.getTime())
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

  onValueChange(value: Date): void {
    this.zone.run(() => {
      this.rdvs.push(value.getTime())
      this.showCalendar = false
      this.disableDates
    })

    if (this.currentUser.garage)
      this.currentUser.garage.push({ date: value.getTime(), type: 'maintenance', cost: 0 })
    else
      this.currentUser.garage = [{ date: value.getTime(), type: 'installation', cost: 0 }]

    console.log(this.rdvs)

  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }

  disableDates = (current: Date): boolean => {

    return this.rdvs.includes(current.getTime())
  }
}
