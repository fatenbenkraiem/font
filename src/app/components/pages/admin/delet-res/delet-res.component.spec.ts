import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletResComponent } from './delet-res.component';

describe('DeletResComponent', () => {
  let component: DeletResComponent;
  let fixture: ComponentFixture<DeletResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
