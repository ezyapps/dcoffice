/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoleNewComponent } from './role-new.component';

describe('RoleNewComponent', () => {
  let component: RoleNewComponent;
  let fixture: ComponentFixture<RoleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
