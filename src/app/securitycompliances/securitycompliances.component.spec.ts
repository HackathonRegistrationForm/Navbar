import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritycompliancesComponent } from './securitycompliances.component';

describe('SecuritycompliancesComponent', () => {
  let component: SecuritycompliancesComponent;
  let fixture: ComponentFixture<SecuritycompliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritycompliancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritycompliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
