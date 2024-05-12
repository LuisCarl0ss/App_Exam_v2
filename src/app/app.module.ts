import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComprensionAudioScreenComponent } from './screens/comprension-audio-screen/comprension-audio-screen.component';
import { ComprensionGramaticaScreenComponent } from './screens/comprension-gramatica-screen/comprension-gramatica-screen.component';
import { ComprensionLectoraScreenComponent } from './screens/comprension-lectora-screen/comprension-lectora-screen.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    ComprensionAudioScreenComponent,
    ComprensionGramaticaScreenComponent,
    ComprensionLectoraScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"app-exam-01","appId":"1:1085382713423:web:6542844e5ece3a61d58a3a","storageBucket":"app-exam-01.appspot.com","apiKey":"AIzaSyAHzIVS8CbIBOUTY5cBdaTBzvwsNb5qMT4","authDomain":"app-exam-01.firebaseapp.com","messagingSenderId":"1085382713423"})),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
