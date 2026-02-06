import { LitElement, html, css } from 'lit';

class CharacterList extends LitElement {
  static properties = {
    characters: { type: Array },
    selectedCharacter: { type: Object, state: true },
  };

  static styles = css`
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      border-bottom: 1px solid #eee;
    }

    button {
      width: 100%;
      text-align: left;
      background: none;
      border: none;
      cursor: pointer;
      padding: 1rem 0;
    }

    button:hover {
      background: #f9f9f9;
    }
  `;

  constructor() {
    super();
    this.characters = [];
    this.selectedCharacter = null;
  }

  async _openDialog(character) {
    this.selectedCharacter = character;
    await this.updateComplete;
    this.shadowRoot.querySelector('dialog')?.showModal();
  }

  _closeDialog() {
    this.shadowRoot.querySelector('dialog')?.close();
    this.selectedCharacter = null;
  }

  render() {
    return html`
      <ul>
        ${this.characters.map(
          character => html`
            <li>
              <button @click=${() => this._openDialog(character)}>
                <strong>${character.name}</strong> - ${character.birth_year}
              </button>
            </li>
          `
        )}
      </ul>

      ${this.selectedCharacter
        ? html`
            <dialog>
              <h2>${this.selectedCharacter.name}</h2>
              <p><strong>Birth year:</strong> ${this.selectedCharacter.birth_year}</p>
              <p><strong>Gender:</strong> ${this.selectedCharacter.gender}</p>
              <button @click=${this._closeDialog}>Close</button>
            </dialog>
          `
        : ''}
    `;
  }
}

customElements.define('character-list', CharacterList);
