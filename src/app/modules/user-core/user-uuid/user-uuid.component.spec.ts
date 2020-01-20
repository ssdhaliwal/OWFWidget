import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUuidComponent } from './user-uuid.component';

describe('UserUuidComponent', () => {
  let component: UserUuidComponent;
  let fixture: ComponentFixture<UserUuidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUuidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
