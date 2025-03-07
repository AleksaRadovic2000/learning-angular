import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewComponent } from './main-new.component';

describe('MainNewComponent', () => {
  let component: MainNewComponent;
  let fixture: ComponentFixture<MainNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
