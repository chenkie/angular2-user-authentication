import { FemAuthAngular2Page } from './app.po';

describe('fem-auth-angular2 App', function() {
  let page: FemAuthAngular2Page;

  beforeEach(() => {
    page = new FemAuthAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
