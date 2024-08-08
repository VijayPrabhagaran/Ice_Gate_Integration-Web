import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceGateFormPageComponent } from './ice-gate-form-page.component';

describe('IceGateFormPageComponent', () => {
  let component: IceGateFormPageComponent;
  let fixture: ComponentFixture<IceGateFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceGateFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceGateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
