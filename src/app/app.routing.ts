import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { MusicaComponent } from "./components/musica-component/musica-component";
import { CineComponent } from "./components/cine-component/cine-component";
import { HomeComponent } from "./components/home-component/home-component";

//NECESITAMOS UN ARRAY CON LAS RUTAS
//DICHO ARRAY DEBE SER DE LA CLASE Router

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "cine", component: CineComponent },
  { path: "musica", component: MusicaComponent },
];

//PARA EL MODULO DEBEMOS EXPOERTAR DOS VARIABLES
export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);


