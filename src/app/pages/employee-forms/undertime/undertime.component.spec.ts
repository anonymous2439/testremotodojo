import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertimeComponent } from './undertime.component';

describe('UndertimeComponent', () => {
  let component: UndertimeComponent;
  let fixture: ComponentFixture<UndertimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndertimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
