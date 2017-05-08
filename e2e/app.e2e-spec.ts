import { SelfPrintPage } from './app.po';

describe('self-print App', function() {
  let page: SelfPrintPage;

  beforeEach(() => {
    page = new SelfPrintPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
