import {TestBed, async} from '@angular/core/testing';

import {DragonComponent} from './dragon.component';
import {BasePlayerController} from '../base/base.controller';

describe('DragonComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragonComponent]
    }).compileComponents();
  }));
  it('should create the dragon component', async(() => {
    const fixture = TestBed.createComponent(DragonComponent);
    const dragon = fixture.debugElement.componentInstance;
    expect(dragon).toBeTruthy();
  }));
  it(`should have dragon as prototype of BasePlayerController`, async(() => {
    const fixture = TestBed.createComponent(DragonComponent);
    const dragon = fixture.debugElement.componentInstance;
    expect(dragon.dragon).isPrototypeOf(BasePlayerController);
  }));
});
