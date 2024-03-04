import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthProductComponent } from './sixth-product.component';

describe('SixthProductComponent', () => {
  let component: SixthProductComponent;
  let fixture: ComponentFixture<SixthProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixthProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixthProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
