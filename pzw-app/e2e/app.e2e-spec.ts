import { PolskieRybyPage } from './app.po';

describe('polskie-ryby App', function() {
  let page: PolskieRybyPage;

  beforeEach(() => {
    page = new PolskieRybyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pzw works!');
  });
});
