import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajIzmeniVremeComponent } from './dodaj-izmeni-vreme.component';

describe('DodajIzmeniVremeComponent', () => {
  let component: DodajIzmeniVremeComponent;
  let fixture: ComponentFixture<DodajIzmeniVremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajIzmeniVremeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajIzmeniVremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
