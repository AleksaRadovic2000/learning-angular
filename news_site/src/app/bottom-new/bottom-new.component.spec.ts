import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNewComponent } from './bottom-new.component';

describe('BottomNewComponent', () => {
  let component: BottomNewComponent;
  let fixture: ComponentFixture<BottomNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
