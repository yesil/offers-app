import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { OffersApp } from '../src/offers-app.js';
import '../src/offers-app.js';

describe('OffersApp', () => {
  let element: OffersApp;
  beforeEach(async () => {
    element = await fixture(html`<offers-app></offers-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
