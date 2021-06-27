import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatosAbcComponent } from './zapatos-abc.component';

describe('ZapatosAbcComponent', () => {
  let component: ZapatosAbcComponent;
  let fixture: ComponentFixture<ZapatosAbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapatosAbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatosAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
