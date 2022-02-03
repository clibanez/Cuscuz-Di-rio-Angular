import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscuzListComponent } from './cuscuz-list.component';

describe('CuscuzListComponent', () => {
  let component: CuscuzListComponent;
  let fixture: ComponentFixture<CuscuzListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuscuzListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuscuzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
