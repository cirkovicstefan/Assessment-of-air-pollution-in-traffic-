import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajIzmeniZagadjenostComponent } from './dodaj-izmeni-zagadjenost.component';

describe('DodajIzmeniZagadjenostComponent', () => {
  let component: DodajIzmeniZagadjenostComponent;
  let fixture: ComponentFixture<DodajIzmeniZagadjenostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajIzmeniZagadjenostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajIzmeniZagadjenostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
