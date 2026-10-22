import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablasMultiplicar } from './tablas-multiplicar';

describe('TablasMultiplicar', () => {
  let component: TablasMultiplicar;
  let fixture: ComponentFixture<TablasMultiplicar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablasMultiplicar],
    }).compileComponents();

    fixture = TestBed.createComponent(TablasMultiplicar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
