import { LitElement, html } from 'lit';
import '../components/search-bar.js';
import '../components/character-list.js';
import { RequestController } from '../controllers/request-controller.js';
import { fetchStarWarsCharacterList } from '../services/swapi-service.js';

class AppMain extends LitElement {
  starWarsCharacterList = new RequestController(this, fetchStarWarsCharacterList);

  _handleSearch({ detail }) {
    this.starWarsCharacterList.execute(detail.query);
  }

  render() {
    if (this.starWarsCharacterList.loading) return html`<p>Loading...</p>`;
    if (this.starWarsCharacterList.error) return html`<p>Error loading data</p>`;

    return html`
      <search-bar @search=${this._handleSearch}></search-bar>
      ${this.starWarsCharacterList.success
        ? html`<character-list .characters=${this.starWarsCharacterList.data}></character-list>`
        : ''}
    `;
  }
}

customElements.define('app-main', AppMain);
