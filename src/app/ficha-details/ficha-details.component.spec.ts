import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDetailsComponent } from './ficha-details.component';

describe('FichaDetailsComponent', () => {
  let component: FichaDetailsComponent;
  let fixture: ComponentFixture<FichaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
