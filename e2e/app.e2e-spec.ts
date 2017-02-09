import { Unrav0202Page } from './app.po';

describe('unrav0202 App', function() {
  let page: Unrav0202Page;

  beforeEach(() => {
    page = new Unrav0202Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
