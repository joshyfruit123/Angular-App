import { AngularapptueresPage } from './app.po';

describe('angularapptueres App', function() {
  let page: AngularapptueresPage;

  beforeEach(() => {
    page = new AngularapptueresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
