import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/theme-light.js';
import '@spectrum-web-components/theme/scale-medium.js';
import '@spectrum-web-components/button/sp-button.js';

// const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('offers-app')
export class OffersApp extends LitElement {

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--offers-app-background-color);
    }

    main {
      flex-grow: 1;
    }
  `;

  click() {
    console.log('clicked');
  }

  render() {
    return html`
      <main>
      <sp-theme
    theme="spectrum"
    color="light"
    scale="medium"
    style="background-color: var(--spectrum-gray-100)"
>
    <sp-button onclick="spAlert(this, 'Themed <sp-button> clicked!')">
        Click me!
    </sp-button>
</sp-theme>
      </main>
    `;
  }
}
