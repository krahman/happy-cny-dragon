import {async} from '@angular/core/testing';

import {MyFakeService} from './my.fake.service';

describe('MyFakeService', () => {
  it('should have getMessage equals to fake service', async(() => {
    const myFakeService = new MyFakeService();
    expect(myFakeService.getMessage()).toEqual('fake service');
  }));
});
