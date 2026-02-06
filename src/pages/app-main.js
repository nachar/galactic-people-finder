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
    return html`
      <search-bar @search=${this._handleSearch}></search-bar>

      ${this.starWarsCharacterList.loading ? html`<p>Loading...</p>` : ''}
      ${this.starWarsCharacterList.error ? html`<p>Error loading data. Please try again.</p>` : ''}
      ${this.starWarsCharacterList.success && this.starWarsCharacterList.data?.length
        ? html`<character-list .characters=${this.starWarsCharacterList.data}></character-list>`
        : ''}
      ${this.starWarsCharacterList.success && !this.starWarsCharacterList.data?.length
        ? html`<p>No characters found.</p>`
        : ''}
    `;
  }
}

customElements.define('app-main', AppMain);
