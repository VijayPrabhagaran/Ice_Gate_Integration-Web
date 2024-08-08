import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICeGateListPageComponent } from './ice-gate-list-page.component';

describe('ICeGateListPageComponent', () => {
  let component: ICeGateListPageComponent;
  let fixture: ComponentFixture<ICeGateListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICeGateListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ICeGateListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
