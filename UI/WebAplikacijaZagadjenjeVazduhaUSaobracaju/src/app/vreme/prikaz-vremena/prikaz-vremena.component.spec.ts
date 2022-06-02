import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazVremenaComponent } from './prikaz-vremena.component';

describe('PrikazVremenaComponent', () => {
  let component: PrikazVremenaComponent;
  let fixture: ComponentFixture<PrikazVremenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazVremenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazVremenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
