import { AgendaIN6AMIIPage } from './app.po';

describe('agenda-in6-am-ii App', () => {
  let page: AgendaIN6AMIIPage;

  beforeEach(() => {
    page = new AgendaIN6AMIIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
