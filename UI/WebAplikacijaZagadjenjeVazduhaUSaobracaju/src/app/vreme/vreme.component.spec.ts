import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VremeComponent } from './vreme.component';

describe('VremeComponent', () => {
  let component: VremeComponent;
  let fixture: ComponentFixture<VremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VremeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
