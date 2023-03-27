import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplrComponent } from './samplr.component';

describe('SamplrComponent', () => {
  let component: SamplrComponent;
  let fixture: ComponentFixture<SamplrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
