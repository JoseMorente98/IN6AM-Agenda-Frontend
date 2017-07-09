import { browser, by, element } from 'protractor';

export class AgendaIN6AMIIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
