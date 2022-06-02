import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazStaniceComponent } from './prikaz-stanice.component';

describe('PrikazStaniceComponent', () => {
  let component: PrikazStaniceComponent;
  let fixture: ComponentFixture<PrikazStaniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazStaniceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazStaniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
