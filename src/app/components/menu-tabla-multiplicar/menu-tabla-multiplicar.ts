import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tabla-multiplicar',
  standalone: false,
  styleUrl: './menu-tabla-multiplicar.css',
  templateUrl: './menu-tabla-multiplicar.html',
})
export class MenuTablaMultiplicar implements OnInit {
  numeros: number[];

  constructor(private _router: Router) {
    this.numeros = [];
  }

  gotoHome(): void {
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
    this.generarAleatorios();
  }

  generarAleatorios(): void {
    let aux: number[] = [];
    for (let i = 1; i <= 5; i++) {
      let aleatorio = Math.floor(Math.random() * 10) + 1;
      aux.push(aleatorio);
    }
    this.numeros = aux;
  }
}
