import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDrinkComponent } from './update-drink.component';

describe('UpdateDrinkComponent', () => {
  let component: UpdateDrinkComponent;
  let fixture: ComponentFixture<UpdateDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
