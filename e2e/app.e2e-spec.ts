import { Proyecto2Page } from './app.po';

describe('proyecto2 App', () => {
  let page: Proyecto2Page;

  beforeEach(() => {
    page = new Proyecto2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
