import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuTablasMultiplicar } from './menu-tablas-multiplicar';

describe('MenuTablasMultiplicar', () => {
  let component: MenuTablasMultiplicar;
  let fixture: ComponentFixture<MenuTablasMultiplicar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuTablasMultiplicar],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTablasMultiplicar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
