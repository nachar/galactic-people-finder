import { LitElement, html } from 'lit';

class SearchBar extends LitElement {
  render() {
    return html`
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    `;
  }
}

customElements.define('search-bar', SearchBar);
