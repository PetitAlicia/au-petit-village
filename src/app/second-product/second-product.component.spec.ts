import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondProductComponent } from './second-product.component';

describe('SecondProductComponent', () => {
  let component: SecondProductComponent;
  let fixture: ComponentFixture<SecondProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
