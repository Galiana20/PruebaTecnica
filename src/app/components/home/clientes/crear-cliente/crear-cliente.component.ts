import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interface/clientes';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
     private _clientesService: ClientesService,
     private router: Router,
     private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addUser() {
    const cliente: Clientes={
      name: this.form.value.name,
      direccion: this.form.value.name,
      correo: this.form.value.name
    }
    this._clientesService.addClientes(cliente);
    this._snackBar.open('Se ha añadido el Cliente correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
    this.router.navigate(['/home/clientes']);
  }
}
