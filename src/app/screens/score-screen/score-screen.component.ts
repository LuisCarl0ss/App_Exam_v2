import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-score-screen',
  templateUrl: './score-screen.component.html',
  styleUrls: ['./score-screen.component.scss']
})
export class ScoreScreenComponent implements OnInit {

  puntaje: number = 0;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.puntaje = +params['puntaje'];
    });
  }

  onClick() {
    this.userService.logout()
    .then(() => {
      this.router.navigate([""]);
    }) 
    .catch(error => console.log(error));    
  }

}
