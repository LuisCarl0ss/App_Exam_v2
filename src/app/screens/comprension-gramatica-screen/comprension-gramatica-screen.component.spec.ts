import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprensionGramaticaScreenComponent } from './comprension-gramatica-screen.component';

describe('ComprensionGramaticaScreenComponent', () => {
  let component: ComprensionGramaticaScreenComponent;
  let fixture: ComponentFixture<ComprensionGramaticaScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprensionGramaticaScreenComponent]
    });
    fixture = TestBed.createComponent(ComprensionGramaticaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
