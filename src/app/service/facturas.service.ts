import { Injectable } from '@angular/core';
import { Facturas } from '../interface/facturas';


@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  facturasData: Facturas[] = [
    {numero: 1, date: new Date(2021,11,17), name: 'PHP', direct: 'C/PHP',import:150.25},
    {numero: 2, date: new Date(2021,11,18), name: 'PHP', direct: 'C/PHP',import:150.25},
    {numero: 3, date: new Date(2021,11,13), name: 'Petronas', direct: 'C/Petronas',import:150.25},
    {numero: 4, date: new Date(2021,1,17), name: 'Petronas', direct: 'C/Petronas',import:150.25},
    {numero: 5, date: new Date(2021,11,17), name: 'Petronas', direct: 'C/Petronas',import:150.25},
    {numero: 6, date: new Date(2021,12,23), name: 'PHP', direct: 'C/PHP',import:150.25},
    {numero: 7, date: new Date(2021,5,16), name: 'Redbull', direct: 'C/Redbull',import:150.25},
    {numero: 8, date: new Date(2021,7,25), name: 'Redbull', direct: 'C/Redbull',import:150.25},
    {numero: 9, date: new Date(2021,11,17), name: 'PHP', direct: 'C/PHP',import:150.25},
    {numero: 10, date: new Date(2021,12,23), name: 'PHP', direct: 'C/PHP',import:150.25},
    {numero: 11, date: new Date(2021,6,12), name: 'Redbull', direct: 'C/Redbull',import:150.25},
    {numero: 12, date: new Date(2021,7,25), name: 'Redbull', direct: 'C/Redbull',import:150.25},
    {numero: 13, date: new Date(2021,6,28), name: 'PHP', direct: 'C/PHP',import:150.25},
    {numero: 14, date: new Date(2021,6,30), name: 'PHP', direct: 'C/PHP',import:150.25}
  
  ];

  constructor() { }



  getFacturas(){
    return this.facturasData.slice();
  }

  deleteFacturas(index:number){
    this.facturasData.splice(index,1);
  }

  addFacturas(facturas: Facturas){
    this.facturasData.unshift(facturas);
  }
}
