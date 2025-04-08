import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfessionalComponent } from './detail-professional.component';

describe('DetailProfessionalComponent', () => {
  let component: DetailProfessionalComponent;
  let fixture: ComponentFixture<DetailProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailProfessionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
