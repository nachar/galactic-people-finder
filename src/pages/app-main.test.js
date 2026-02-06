import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import './app-main.js';

describe('AppMain', () => {
  it('should render search-bar component', async () => {
    const el = await fixture(html`<app-main></app-main>`);
    const searchBar = el.shadowRoot.querySelector('search-bar');

    expect(searchBar).to.exist;
  });

  it('should call execute with query when search event is emitted', async () => {
    const el = await fixture(html`<app-main></app-main>`);
    const executeSpy = sinon.spy(el.starWarsCharacterList, 'execute');
    const searchBar = el.shadowRoot.querySelector('search-bar');

    searchBar.dispatchEvent(
      new CustomEvent('search', {
        detail: { query: 'vader' },
        bubbles: true,
        composed: true,
      })
    );

    expect(executeSpy).to.have.been.calledWith('vader');
  });
});
