import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdProductComponent } from './third-product.component';

describe('ThirdProductComponent', () => {
  let component: ThirdProductComponent;
  let fixture: ComponentFixture<ThirdProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
