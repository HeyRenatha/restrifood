import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrichefComponent } from './restrichef.component';

describe('RestrichefComponent', () => {
  let component: RestrichefComponent;
  let fixture: ComponentFixture<RestrichefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestrichefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestrichefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
