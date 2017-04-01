import { AngularUserAuthenticationPage } from './app.po';

describe('angular-user-authentication App', () => {
  let page: AngularUserAuthenticationPage;

  beforeEach(() => {
    page = new AngularUserAuthenticationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
