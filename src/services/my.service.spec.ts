import {async} from '@angular/core/testing';

import {MyService} from './my.service';

describe('MyService', () => {
  it('should have getMessage() equals to real service', async(() => {
    const myService = new MyService();
    expect(myService.getMessage()).toEqual('real service');
  }));
});
