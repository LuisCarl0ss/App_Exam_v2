import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      email: new FormControl('', [Validators.required, Validators.pattern(/\b[A-Za-z0-9._%+-]+@correo\.buap\.mx\b/i)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    });
  }

  ngOnInit(): void {
    
  }

  // verificaRegistro() {  ORIGINAL
  //   this.userService.register(this.formReg.value)
  //   .then(response => {
  //     console.log(response);
  //     alert("Usuario registrado")
  //     this.router.navigate([""])
  //   })
  //   .catch(error => console.log(error));
  // }

  verificaRegistro() {
    // Obtener el control del correo electrónico del formulario
    const emailControl = this.formReg.get('email');
  
    // Verificar si el control del correo electrónico existe y si tiene un valor
    if (emailControl && emailControl.value) {
      const email = emailControl.value;
  
      // Verificar si el correo electrónico cumple con el patrón deseado
      if (!email.endsWith('@correo.buap.mx')) {
        // Si el correo electrónico no cumple con el patrón, mostrar un mensaje de error
        alert("El correo electrónico debe terminar con '@correo.buap.mx'");
        return; // Detener el proceso de registro
      }
  
      // Si el correo electrónico es válido, proceder con el registro
      this.userService.register(this.formReg.value)
        .then(response => {
          console.log(response);
          alert("Usuario registrado")
          this.router.navigate([""])
        })
        .catch(error => console.log(error));
    } else {
      // Si no se puede obtener el control del correo electrónico o no tiene valor
      // mostrar un mensaje de error o manejarlo de acuerdo a tus necesidades
      console.error("No se pudo obtener el correo electrónico del formulario.");
    }
  }
  

  public regresar() {
    this.router.navigate([""])
  }

}
