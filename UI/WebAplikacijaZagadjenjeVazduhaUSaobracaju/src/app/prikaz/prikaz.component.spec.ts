import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazComponent } from './prikaz.component';

describe('PrikazComponent', () => {
  let component: PrikazComponent;
  let fixture: ComponentFixture<PrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
