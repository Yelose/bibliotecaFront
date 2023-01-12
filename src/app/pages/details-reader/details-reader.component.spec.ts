import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReaderComponent } from './details-reader.component';

describe('DetailsReaderComponent', () => {
  let component: DetailsReaderComponent;
  let fixture: ComponentFixture<DetailsReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
