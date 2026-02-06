import { LitElement, html, css } from 'lit';

class CharacterList extends LitElement {
  static properties = {
    characters: { type: Array },
    selectedCharacter: { type: Object, state: true },
  };

  static styles = css`
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      gap: 1rem;
    }

    button {
      cursor: pointer;
      padding: 0.25rem 0.75rem;
    }

    dialog {
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid #ccc;
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }
  `;

  constructor() {
    super();
    this.characters = [];
    this.selectedCharacter = null;
  }

  _openDialog(character) {
    this.selectedCharacter = character;
    this.updateComplete.then(() => {
      this.shadowRoot.querySelector('dialog')?.showModal();
    });
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
