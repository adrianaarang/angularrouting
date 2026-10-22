import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { MusicaComponent } from "./components/musica-component/musica-component";
import { CineComponent } from "./components/cine-component/cine-component";
import { HomeComponent } from "./components/home-component/home-component";
import { NotfundComponent } from "./components/notfund-component/notfund-component";
import { NumeroDobleComponent } from "./components/numero-doble-component/numero-doble-component";
import { TablasMultiplicar } from "./components/tablas-multiplicar/tablas-multiplicar";
import { MenuTablaMultiplicar } from "./components/menu-tabla-multiplicar/menu-tabla-multiplicar";



// NECESITAMOS UN ARRAY CON LAS RUTAS
const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "cine", component: CineComponent },
  { path: "musica", component: MusicaComponent },
  { path: "doble", component: NumeroDobleComponent },
  { path: "doble/:numero", component: NumeroDobleComponent },
  { path: "tabla", component: TablasMultiplicar },
  { path: "tabla/:numero", component: TablasMultiplicar },
  { path: "menutabla", component: MenuTablaMultiplicar },
  { path: "**", component: NotfundComponent },
];

// PARA EL MÓDULO DEBEMOS EXPORTAR DOS VARIABLES
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
