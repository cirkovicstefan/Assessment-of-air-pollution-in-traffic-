import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanicaComponent } from './stanica.component';

describe('StanicaComponent', () => {
  let component: StanicaComponent;
  let fixture: ComponentFixture<StanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StanicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
