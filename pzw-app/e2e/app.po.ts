import { browser, element, by } from 'protractor';

export class PolskieRybyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pzw-root h1')).getText();
  }
}
