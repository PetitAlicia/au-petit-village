import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhProductComponent } from './seventh-product.component';

describe('SeventhProductComponent', () => {
  let component: SeventhProductComponent;
  let fixture: ComponentFixture<SeventhProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeventhProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeventhProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
