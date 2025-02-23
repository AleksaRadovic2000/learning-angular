import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNewComponent } from './aside-new.component';

describe('AsideNewComponent', () => {
  let component: AsideNewComponent;
  let fixture: ComponentFixture<AsideNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
