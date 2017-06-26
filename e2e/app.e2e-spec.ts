import { Angular2CLITemplatePage } from './app.po';

describe('angular2-clitemplate App', () => {
  let page: Angular2CLITemplatePage;

  beforeEach(() => {
    page = new Angular2CLITemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
