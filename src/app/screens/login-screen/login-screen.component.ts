import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})

export class LoginScreenComponent implements OnInit {

  formLogin: FormGroup;
  public type: String = "password";
  public email: String = "";
  public password: String = "";
  public errors:any = {};

  constructor(
    private userService: UserService,
    private router: Router,
  ) { 
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }

  verificaLogin() {
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log(response);
      this.router.navigate(["home"])
    })
    .catch(error => {
      console.log(error);
      alert("Correo o contraseña incorrectos")
      this.formLogin.patchValue({
        email: '',
        password: ''
      });
    }
    )
  }

  public registro(){
    this.router.navigate(["registro"])
  }

  public showPassword(){
    if(this.type == "password"){
      this.type = "text";
    }else{
      this.type = "password";
    }
  }

}




  

