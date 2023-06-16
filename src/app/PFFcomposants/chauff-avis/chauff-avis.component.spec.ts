import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffAvisComponent } from './chauff-avis.component';

describe('ChauffAvisComponent', () => {
  let component: ChauffAvisComponent;
  let fixture: ComponentFixture<ChauffAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChauffAvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChauffAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
