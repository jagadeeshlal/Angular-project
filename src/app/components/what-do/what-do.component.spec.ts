import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDoComponent } from './what-do.component';

describe('WhatDoComponent', () => {
  let component: WhatDoComponent;
  let fixture: ComponentFixture<WhatDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
