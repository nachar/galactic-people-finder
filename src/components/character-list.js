import { LitElement, html } from 'lit';

class CharacterList extends LitElement {
  static properties = {
    characters: { type: Array },
  };

  constructor() {
    super();
    this.characters = [];
  }

  render() {
    return html`
      <ul>
        ${this.characters.map(
          character => html` <li><strong>${character.name}</strong> - ${character.birth_year}</li> `
        )}
      </ul>
    `;
  }
}

customElements.define('character-list', CharacterList);
