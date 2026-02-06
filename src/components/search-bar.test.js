import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import './search-bar.js';

describe('SearchBar', () => {
  it('should render with empty input', async () => {
    const el = await fixture(html`<search-bar></search-bar>`);
    const input = el.shadowRoot.querySelector('input');

    expect(input.value).to.equal('');
  });

  it('should enable button when input has value', async () => {
    const el = await fixture(html`<search-bar></search-bar>`);
    const input = el.shadowRoot.querySelector('input');
    const button = el.shadowRoot.querySelector('button');

    input.value = 'Luke';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await el.updateComplete;

    expect(button.disabled).to.be.false;
  });

  it('should keep button disabled with only whitespace', async () => {
    const el = await fixture(html`<search-bar></search-bar>`);
    const input = el.shadowRoot.querySelector('input');
    const button = el.shadowRoot.querySelector('button');

    input.value = '   ';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await el.updateComplete;

    expect(button.disabled).to.be.true;
  });

  it('should emit search event on form submit', async () => {
    const el = await fixture(html`<search-bar></search-bar>`);
    const input = el.shadowRoot.querySelector('input');
    const form = el.shadowRoot.querySelector('form');

    input.value = 'Luke';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await el.updateComplete;

    const searchEventPromise = oneEvent(el, 'search');
    form.requestSubmit();

    const { detail } = await searchEventPromise;
    expect(detail.query).to.equal('Luke');
  });

  it('should trim search query when emitting event', async () => {
    const el = await fixture(html`<search-bar></search-bar>`);
    const input = el.shadowRoot.querySelector('input');
    const form = el.shadowRoot.querySelector('form');

    input.value = '  Skywalker  ';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await el.updateComplete;

    const searchEventPromise = oneEvent(el, 'search');
    form.requestSubmit();

    const { detail } = await searchEventPromise;
    expect(detail.query).to.equal('Skywalker');
  });
});
