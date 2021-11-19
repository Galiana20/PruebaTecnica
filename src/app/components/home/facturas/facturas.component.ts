import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Facturas } from 'src/app/interface/facturas';
import { FacturasService } from 'src/app/service/facturas.service';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
PdfMakeWrapper.setFonts(pdfFonts);

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturasData: Facturas[] = [];


  displayedColumns: string[] = ['numero', 'date', 'name', 'direct', 'import', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar,private _facturasService: FacturasService) { }

  ngOnInit(): void {
    this.cargarFacturas();
  }
  cargarFacturas() {
    this.facturasData = this._facturasService.getFacturas();
    this.dataSource = new MatTableDataSource(this.facturasData)
  }
  eliminarFactura(index: number) {
    this._facturasService.deleteFacturas(index);
    this.cargarFacturas();
    this._snackBar.open('Se ha eliminado el Usuario correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  generarPdf(indice:number){
    console.log(this.facturasData[indice]);
    const pdf = new PdfMakeWrapper();
    pdf.add(
      new Txt('Numero: '+this.facturasData[indice].numero).bold().italics().end,
    );
    pdf.add(
      new Txt('Fecha: '+this.facturasData[indice].date).bold().italics().end,
    );
    pdf.add(
      new Txt('Nombre Cliente: '+this.facturasData[indice].name).bold().italics().end,
    );
    pdf.add(
      new Txt('Direccion: '+this.facturasData[indice].direct).bold().italics().end,
    );
    pdf.add(
      new Txt('Importe Factura '+this.facturasData[indice].import+' €').bold().italics().end,
    );
    pdf.create().open();
  }
}
