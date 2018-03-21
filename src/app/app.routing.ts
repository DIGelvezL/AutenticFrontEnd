import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarVentasComponent } from './ventas/registrar-ventas/registrar-ventas.component';
import { ConsultarVentasComponent } from './ventas/consultar-ventas/consultar-ventas.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'productos', component: ProductosComponent},
	{path: 'consultar-ventas', component: ConsultarVentasComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);