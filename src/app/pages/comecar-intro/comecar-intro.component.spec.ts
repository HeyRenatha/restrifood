import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComecarIntroComponent } from './comecar-intro.component';

describe('ComecarIntroComponent', () => {
  let component: ComecarIntroComponent;
  let fixture: ComponentFixture<ComecarIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComecarIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComecarIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
