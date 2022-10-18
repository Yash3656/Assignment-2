import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCompComponent } from './crud-comp.component';

describe('CrudCompComponent', () => {
  let component: CrudCompComponent;
  let fixture: ComponentFixture<CrudCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
