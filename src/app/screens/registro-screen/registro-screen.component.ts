import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService
  ) { 
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() { 
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log(response);
      alert("Usuario registrado")
      this.router.navigate([""])
    })
    .catch(error => console.log(error));
   }

  // onSubmit() {
  //   if (this.formReg.valid) {
  //     this.userService.register(this.formReg.value)
  //       .then(response => {
  //         console.log("Usuario registrado con éxito:", response);
  //         // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
  //       })
  //       .catch(error => {
  //         console.error("Error al registrar usuario:", error);
  //         // Aquí puedes manejar el error y mostrar un mensaje adecuado al usuario
  //       });
  //   } else {
  //     console.error("El formulario es inválido. Por favor, complete todos los campos.");
  //     // Aquí puedes mostrar un mensaje al usuario indicando que debe completar todos los campos correctamente
  //   }
  // }
  

  public regresar() {
    this.router.navigate([""])
  }

}
