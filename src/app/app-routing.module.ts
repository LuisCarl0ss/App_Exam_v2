import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ComprensionLectoraScreenComponent } from './screens/comprension-lectora-screen/comprension-lectora-screen.component';
import { ComprensionAudioScreenComponent } from './screens/comprension-audio-screen/comprension-audio-screen.component';
import { ComprensionGramaticaScreenComponent } from './screens/comprension-gramatica-screen/comprension-gramatica-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full'},
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
  { path: 'lectora', component: ComprensionLectoraScreenComponent, pathMatch: 'full'},
  { path: 'audio', component: ComprensionAudioScreenComponent, pathMatch: 'full'},
  { path: 'gramatica', component: ComprensionGramaticaScreenComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
