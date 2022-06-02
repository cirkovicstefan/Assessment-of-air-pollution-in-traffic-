import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazZagadjenostiComponent } from './prikaz-zagadjenosti.component';

describe('PrikazZagadjenostiComponent', () => {
  let component: PrikazZagadjenostiComponent;
  let fixture: ComponentFixture<PrikazZagadjenostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazZagadjenostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazZagadjenostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
