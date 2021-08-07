/* eslint-disable no-undef, sort-vars, no-implicit-coercion, one-var */

import { fixture, html, expect } from '@open-wc/testing';
// import sinon from 'sinon';
import '../src/auro-card.js';

describe('auro-card', () => {

  it('auro-card is accessible', async () => {
    const el = await fixture(html`
      <auro-card>
        <span slot="title">
          <b>one</b>world Explorer
        </span>
        <img
          slot="image"
          src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
          alt="This is an image of a logo" />
        <p slot="description">
          <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent. And, for every dot you connect, you earn more miles and points to spend across the <b>one</b>world Alliance.
        </p>
        <auro-hyperlink
          href="/"
          slot="cta"
          target="_blank">
          More info
        </auro-hyperlink>
        <p slot="disclaimer">
          * Void where prohibited.
        </p>
      </auro-card>
    `);

    await expect(el).to.be.accessible();
  });

  it('lazyLoad attribute works', async () => {
    const el = await fixture(html`
      <auro-card lazyLoad>
        <span slot="title">
          A title
        </span>
        <img
          slot="image"
          data-src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
          alt="This is an image" />
      </auro-card>
    `);

    const image = el.querySelector('img');

    await expect(image.getAttribute('loading')).to.equal('lazy');
    await expect(image.getAttribute('src')).to.not.be.empty;

    Reflect.deleteProperty(HTMLImageElement.prototype, 'loading');
    await expect(image.classList.contains('lazyload'));
  })

  it('auro-card custom element is defined', async () => {
    const el = await !!customElements.get("auro-card");

    await expect(el).to.be.true;
  });
});
