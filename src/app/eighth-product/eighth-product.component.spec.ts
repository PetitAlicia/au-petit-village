import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthProductComponent } from './eighth-product.component';

describe('EighthProductComponent', () => {
  let component: EighthProductComponent;
  let fixture: ComponentFixture<EighthProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EighthProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EighthProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
