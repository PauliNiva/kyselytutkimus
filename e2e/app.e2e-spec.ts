import { KyselytutkimusPage } from './app.po';

describe('kyselytutkimus App', () => {
  let page: KyselytutkimusPage;

  beforeEach(() => {
    page = new KyselytutkimusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
