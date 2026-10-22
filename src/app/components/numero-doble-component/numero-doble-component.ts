import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  public doble!: number;
  public numero!: number;
  public numeros: number[] = [5, 6, 7];

  // RECIBIMOS EL OBJETO INYECTADO DE LAS RUTAS
  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {
    this.doble = 0;
    this.numero = 0;

  }

  gotoHome(): void {
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
    // RECIBIMOS EL PARAMETRO DENTRO DE LA RUTA
    this._activateRoute.params.subscribe(params => {
      // El parámetro es opcional, por lo que preguntamos
      if (params['numero'] != null) {
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2;
        this._cdr.detectChanges();

      } else {
        this.numero = undefined!;
        this.doble = 0;
      }
    });
  }
}
