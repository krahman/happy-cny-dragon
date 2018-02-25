import {async} from '@angular/core/testing';
import {BasePlayerController} from './base.controller';

describe('BasePlayerController', () => {
  beforeEach(async(() => {

  }));
  it('attack() should return between less than or equal 10', async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    expect(basePlayerController.attack()).toBeLessThanOrEqual(10);
  }));
  it('attack() should return between less than or equal 10', async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    expect(basePlayerController.attack()).toBeGreaterThanOrEqual(1);
  }));
  it(`getTitle() should return 'TestPlayer'`, async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    expect(basePlayerController.getTitle()).toEqual('TestPlayer');
  }));
  it('getHealth() should return default value 100', async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    expect(basePlayerController.getHealth()).toEqual(100);
  }));
  it('addHealth(10) should return 80', async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    basePlayerController.setHealth(70);
    expect(basePlayerController.addHealth(10)).toEqual(80);
  }));
  it('addHealth(10) should return 100 if more than 100', async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    expect(basePlayerController.addHealth(10)).toEqual(100);
  }));
  it('gotHit(10) should return 90', async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    expect(basePlayerController.gotHit(10)).toEqual(90);
  }));
  it('gotHit(110) should return 0', async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    expect(basePlayerController.gotHit(110)).toEqual(0);
  }));
  it(`setTitle('test') should override title to equal test`, async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    basePlayerController.setTitle('test');
    expect(basePlayerController.getTitle()).toEqual('test');
  }));
  it('setHealth(25) should override default value to 25', async(() => {
    const basePlayerController = new BasePlayerController('TestPlayer');
    basePlayerController.setHealth(25);
    expect(basePlayerController.getHealth()).toEqual(25);
  }));
});
