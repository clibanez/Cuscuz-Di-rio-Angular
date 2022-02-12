import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscuzCreateComponent } from './cuscuz-create.component';

describe('CuscuzCreateComponent', () => {
  let component: CuscuzCreateComponent;
  let fixture: ComponentFixture<CuscuzCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuscuzCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuscuzCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
