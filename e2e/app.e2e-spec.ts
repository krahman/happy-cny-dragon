import {AppPage} from './app.po';

describe('dragon-battle App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Battle of Dragon!');
  });
});
