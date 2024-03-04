import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthProductComponent } from './fourth-product.component';

describe('FourthProductComponent', () => {
  let component: FourthProductComponent;
  let fixture: ComponentFixture<FourthProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
