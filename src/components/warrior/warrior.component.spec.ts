import {TestBed, async} from '@angular/core/testing';

import {WarriorComponent} from './warrior.component';
import {BasePlayerController} from '../base/base.controller';

describe('WarriorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WarriorComponent]
    }).compileComponents();
  }));
  it('should create the warriorcomponent', async(() => {
    const fixture = TestBed.createComponent(WarriorComponent);
    const warrior = fixture.debugElement.componentInstance;
    expect(warrior).toBeTruthy();
  }));
  it(`should have warrior as prototype of BasePlayerController`, async(() => {
    const fixture = TestBed.createComponent(WarriorComponent);
    const warrior = fixture.debugElement.componentInstance;
    expect(warrior.warrior).isPrototypeOf(BasePlayerController);
  }));
});
