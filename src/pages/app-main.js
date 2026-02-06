import { LitElement, html } from 'lit';
import '../components/search-bar.js';
import '../components/people-list.js';

class AppMain extends LitElement {
  _handleSearch(e) {
    console.log(e.detail.query);
  }

  render() {
    return html`
      <search-bar @search=${this._handleSearch}></search-bar>
      <people-list></people-list>
    `;
  }
}

customElements.define('app-main', AppMain);
