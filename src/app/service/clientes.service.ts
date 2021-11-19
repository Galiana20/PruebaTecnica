import { Injectable } from '@angular/core';
import { Clientes } from '../interface/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientesData: Clientes[] =[
    {name:'PHP',direccion:'C/PHP',correo:'php@php.com'},
    {name:'Petronas',direccion:'C/Petronas',correo:'Petronas@Petronas.com'},
    {name:'Redbull',direccion:'C/Redbull',correo:'Redbull@Redbull.com'}
  ]

  constructor() { }

  getClientes(){
    return this.clientesData.slice();
  }

  deleteClientes(index:number){
    this.clientesData.splice(index,1);
  }

  addClientes(cliente: Clientes){
    this.clientesData.unshift(cliente);
  }
}
 