import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprensionAudioScreenComponent } from './comprension-audio-screen.component';

describe('ComprensionAudioScreenComponent', () => {
  let component: ComprensionAudioScreenComponent;
  let fixture: ComponentFixture<ComprensionAudioScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprensionAudioScreenComponent]
    });
    fixture = TestBed.createComponent(ComprensionAudioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
