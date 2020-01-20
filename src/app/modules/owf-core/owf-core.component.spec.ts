import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwfCoreComponent } from './owf-core.component';

describe('OwfCoreComponent', () => {
  let component: OwfCoreComponent;
  let fixture: ComponentFixture<OwfCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwfCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwfCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
