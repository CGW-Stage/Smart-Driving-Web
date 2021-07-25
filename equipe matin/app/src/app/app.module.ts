import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

registerLocaleData(fr);

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { LoginComponent } from './components/login/login.component';


const firebaseConfig = {
  apiKey: "AIzaSyC7L25Kf_snZM9f_7QvCMdVjHYE372NKYE",
  authDomain: "smart-driving-cgw.firebaseapp.com",
  projectId: "smart-driving-cgw",
  storageBucket: "smart-driving-cgw.appspot.com",
  messagingSenderId: "711835197180",
  appId: "1:711835197180:web:3517e2d1953e20e7620179",
  measurementId: "G-NS7EPVFEZW"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    NzButtonModule,
    NzIconModule,
    NzGridModule,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
