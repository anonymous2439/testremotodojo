import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndMapComponent } from './contact-and-map.component';

describe('ContactAndMapComponent', () => {
  let component: ContactAndMapComponent;
  let fixture: ComponentFixture<ContactAndMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAndMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAndMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
