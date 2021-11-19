import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interface/clientes';
import { Facturas } from 'src/app/interface/facturas';
import { ClientesService } from 'src/app/service/clientes.service';
import { FacturasService } from 'src/app/service/facturas.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  form: FormGroup;
  clientes: Clientes[] = [];
  nameClientes: any[] = [];
  direccion: string = '';

  constructor(private fb: FormBuilder,
    private _facturasService: FacturasService,
    private _clientesService: ClientesService,
    private router: Router,
    private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      numero: ['', Validators.required],
      date: ['', Validators.required],
      name: ['', Validators.required],
      import: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.clientes = this._clientesService.getClientes();
    this.clientes.forEach(element => {
      this.nameClientes.unshift({ value: element.name, direccion: element.direccion })
    });

  }

  addFactura() {
    const facturas: Facturas = {
      numero: this.form.value.numero,
      date: new Date(this.form.value.date),
      name: this.form.value.name,
      direct: this.direccion,
      import: this.form.value.import,

    }
    this._facturasService.addFacturas(facturas);
    this._snackBar.open('Se ha añadido el Facturas correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
    this.router.navigate(['/home']);
  }


  direccionAction(direccion: string) {
    this.direccion = direccion;
  }
}
