import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponet } from './my-first-componet';

describe('MyFirstComponet', () => {
  let component: MyFirstComponet;
  let fixture: ComponentFixture<MyFirstComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
