import { LitElement, html } from 'lit';
import '../components/search-bar.js';
import '../components/people-list.js';

class AppMain extends LitElement {
  render() {
    return html`
      <search-bar></search-bar>
      <people-list></people-list>
    `;
  }
}

customElements.define('app-main', AppMain);
