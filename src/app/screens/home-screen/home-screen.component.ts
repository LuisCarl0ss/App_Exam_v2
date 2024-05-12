import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    
  }

  onClick() {
    this.userService.logout()
    .then(() => {
      this.router.navigate([""]);
    }) 
    .catch(error => console.log(error));    
  }

  public irPreguntas() {
    this.router.navigate(["lectora"])
  }

}
