import { AngularMaterialSetupPage } from './app.po';

describe('angular-material-setup App', () => {
  let page: AngularMaterialSetupPage;

  beforeEach(() => {
    page = new AngularMaterialSetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
