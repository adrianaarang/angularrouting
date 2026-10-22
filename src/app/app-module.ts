import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { NotfundComponent } from './components/notfund-component/notfund-component';
import { appRoutingProviders, routing } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablasMultiplicar } from './components/tablas-multiplicar/tablas-multiplicar';
import { MenuTablaMultiplicar } from './components/menu-tabla-multiplicar/menu-tabla-multiplicar';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    NotfundComponent,
    MenuComponent,
    NumeroDobleComponent,
    TablasMultiplicar,
    MenuTablaMultiplicar,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProviders],
  bootstrap: [App],
})
export class AppModule {}
