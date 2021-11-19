import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { FacturasComponent } from './facturas/facturas.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: FacturasComponent },
      { path: 'balance', component: BalanceComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'crear-facturas', component: CrearFacturaComponent },
      { path: 'crear-clientes', component: CrearClienteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
