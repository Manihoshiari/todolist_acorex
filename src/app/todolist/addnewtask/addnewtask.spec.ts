import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addnewtask } from './addnewtask';

describe('Addnewtask', () => {
  let component: Addnewtask;
  let fixture: ComponentFixture<Addnewtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addnewtask],
    }).compileComponents();

    fixture = TestBed.createComponent(Addnewtask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
