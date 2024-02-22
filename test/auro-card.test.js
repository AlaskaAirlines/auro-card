/* eslint-disable no-undef, sort-vars, no-implicit-coercion */

import { fixture, html, expect } from '@open-wc/testing';
// import sinon from 'sinon';
import '../src/auro-card.js';

describe('auro-card', () => {

  const fixWebComponent = async (href) => await fixture(html`
    <auro-card style="max-width: 375px;" href="${href}">
          <!-- Image set to 134px -->
        <img
          slot="image"
          src="https://picsum.photos/134/134"
          alt="Random insert 0"/>
        <h1 slot="header" level="3" display="600">
          Header
        </h1>
        <div slot="description">
          <p>
            Context goes here. Describe the page this card represents.
          </p>
        </div>
        <p slot="cta">
          Non Link CTA
        </p>
      </auro-card>
    `);

  it('auro-card is accessible', async () => {
    const el = await fixWebComponent("/")

    await expect(el).to.be.accessible();
  });

  it('auro-card custom element is defined', async () => {
    const el = !!await customElements.get("auro-card");

    await expect(el).to.be.true;
  });

  it('auro-hyperlink is rendered when `href` attribute is present', async () => {
    const el = await fixWebComponent( "/");
    const link = el.shadowRoot.querySelectorAll('auro-hyperlink');

    await expect(link.length).to.equal(1);
  });

  it('CTA is rendered when `navigationLink` attribute is NOT present', async () => {
    const el = await fixWebComponent( undefined)
    const link = el.shadowRoot.querySelector(`slot[name="cta"]`);

    await expect(link).not.to.be.null;
  });
});
