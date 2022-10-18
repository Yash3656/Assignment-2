import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCrudComponent } from './see-crud.component';

describe('SeeCrudComponent', () => {
  let component: SeeCrudComponent;
  let fixture: ComponentFixture<SeeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
