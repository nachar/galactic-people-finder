import { LitElement, html } from 'lit';

class PeopleList extends LitElement {
  render() {
    return html`
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
    `;
  }
}

customElements.define('people-list', PeopleList);
