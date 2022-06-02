import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajIzmeniStanicaComponent } from './dodaj-izmeni-stanica.component';

describe('DodajIzmeniStanicaComponent', () => {
  let component: DodajIzmeniStanicaComponent;
  let fixture: ComponentFixture<DodajIzmeniStanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajIzmeniStanicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajIzmeniStanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
