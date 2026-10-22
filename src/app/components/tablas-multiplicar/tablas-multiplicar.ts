import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tablas-multiplicar',
  standalone: false,
  styleUrl: './tablas-multiplicar.css',
  templateUrl: './tablas-multiplicar.html',
})
export class TablasMultiplicar implements OnInit {
  public numero!: number;
  public numeros!: Array<number>;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {
    this.numeros = [];
  }

  gotoHome(): void {
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
    // RECIBIMOS EL PARAMETRO DENTRO DE LA RUTA
    this._activateRoute.params.subscribe(params => {
      if (params['numero'] != null) {
        this.numero = parseInt(params['numero'], 10);
        let aux: number[] = [];
        for (let i = 1; i <= 10; i++) {
          aux.push(this.numero * i);
        }
        this.numeros = aux;
      } else {
        this.numero = undefined!;
        this.numeros = [];
      }
      this._cdr.detectChanges();
    });
  }
}
