import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprensionLectoraScreenComponent } from './comprension-lectora-screen.component';

describe('ComprensionLectoraScreenComponent', () => {
  let component: ComprensionLectoraScreenComponent;
  let fixture: ComponentFixture<ComprensionLectoraScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprensionLectoraScreenComponent]
    });
    fixture = TestBed.createComponent(ComprensionLectoraScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
