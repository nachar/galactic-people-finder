import { html, fixture, expect } from '@open-wc/testing';
import './character-list.js';

describe('CharacterList', () => {
  const mockCharacters = [
    { name: 'Luke Skywalker', birth_year: '19BBY', gender: 'male' },
    { name: 'Leia Organa', birth_year: '19BBY', gender: 'female' },
  ];

  it('should render empty list when no characters', async () => {
    const el = await fixture(html`<character-list></character-list>`);
    const items = el.shadowRoot.querySelectorAll('li');

    expect(items.length).to.equal(0);
  });

  it('should render list of characters', async () => {
    const el = await fixture(html`<character-list .characters=${mockCharacters}></character-list>`);
    const items = el.shadowRoot.querySelectorAll('li');

    expect(items.length).to.equal(2);
  });

  it('should display character name and birth year', async () => {
    const el = await fixture(html`<character-list .characters=${mockCharacters}></character-list>`);
    const firstButton = el.shadowRoot.querySelector('button');

    expect(firstButton.textContent).to.include('Luke Skywalker');
    expect(firstButton.textContent).to.include('19BBY');
  });

  it('should not show dialog initially', async () => {
    const el = await fixture(html`<character-list .characters=${mockCharacters}></character-list>`);
    const dialog = el.shadowRoot.querySelector('dialog');

    expect(dialog).to.not.exist;
  });

  it('should open dialog when character is clicked', async () => {
    const el = await fixture(html`<character-list .characters=${mockCharacters}></character-list>`);
    const firstButton = el.shadowRoot.querySelector('button');

    firstButton.click();
    await el.updateComplete;

    const dialog = el.shadowRoot.querySelector('dialog');
    expect(dialog).to.exist;
  });

  it('should display character details in dialog', async () => {
    const el = await fixture(html`<character-list .characters=${mockCharacters}></character-list>`);
    const firstButton = el.shadowRoot.querySelector('button');

    firstButton.click();
    await el.updateComplete;

    const dialog = el.shadowRoot.querySelector('dialog');
    expect(dialog.textContent).to.include('Luke Skywalker');
    expect(dialog.textContent).to.include('19BBY');
    expect(dialog.textContent).to.include('male');
  });

  it('should close dialog when close button is clicked', async () => {
    const el = await fixture(html`<character-list .characters=${mockCharacters}></character-list>`);
    const firstButton = el.shadowRoot.querySelector('button');

    firstButton.click();
    await el.updateComplete;

    const closeButton = el.shadowRoot.querySelector('dialog button');
    closeButton.click();
    await el.updateComplete;

    expect(el.selectedCharacter).to.be.null;
  });

  it('should render correct character data for each item', async () => {
    const el = await fixture(html`<character-list .characters=${mockCharacters}></character-list>`);
    const buttons = el.shadowRoot.querySelectorAll('button');

    expect(buttons[0].textContent).to.include('Luke Skywalker');
    expect(buttons[0].textContent).to.include('19BBY');
    expect(buttons[1].textContent).to.include('Leia Organa');
    expect(buttons[1].textContent).to.include('19BBY');
  });
});
