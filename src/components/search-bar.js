import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    searchQuery: { type: String, state: true },
  };

  constructor() {
    super();
    this.searchQuery = '';
  }

  static styles = css`
    form {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    input {
      flex: 1;
      padding: 0.5rem 0.75rem;
    }

    button {
      padding: 0.5rem 0.75rem;
      cursor: pointer;
    }
  `;

  _onInput(e) {
    this.searchQuery = e.target.value;
  }

  _emitSearch() {
    const query = this.searchQuery.trim();

    this.dispatchEvent(
      new CustomEvent('search', {
        detail: { query },
        bubbles: true,
        composed: true,
      })
    );
  }

  _onSubmit(e) {
    e.preventDefault();
    this._emitSearch();
  }

  render() {
    return html`
      <form @submit=${this._onSubmit}>
        <input
          type="text"
          placeholder="Search character (e.g. Skywalker)"
          .value=${this.searchQuery}
          @input=${this._onInput}
        />
        <button type="submit" ?disabled=${!this.searchQuery.trim()}>Search</button>
      </form>
    `;
  }
}

customElements.define('search-bar', SearchBar);
