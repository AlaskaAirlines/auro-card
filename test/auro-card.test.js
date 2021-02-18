import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-card.js';

describe('auro-card', () => {
  it('sets the CSS class on auro-card > div element', async () => {
    const el = await fixture(html`
      <auro-card cssclass="testClass"></auro-card>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div).to.have.class('testClass');
  });

  it('auro-card is accessible', async () => {
    const el = await fixture(html`
      <auro-card cssclass="testClass"></auro-card>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-card custom element is defined', async () => {
    const el = await !!customElements.get("auro-card");

    await expect(el).to.be.true;
  });

  it('sets the card-bg-image CSS class when there is a card background image', async () => {
    const el = await fixture(html`
      <auro-card cssclass="testClass" cardBgImgSrc="pic.png"></auro-card>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div).to.have.class('card-bg-image');
  });

  it('sets title below image when isTitleAboveImg is not set', async () => {
    const el = await fixture(html`
      <auro-card cssclass="testClass"></auro-card>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.querySelector('#title-above')).not.to.exist;
    expect(div.querySelectorAll('#title-below')).to.exist;
  });

  it('sets title above image when isTitleAboveImg is set', async () => {
    const el = await fixture(html`
      <auro-card cssclass="testClass" isTitleAboveImg></auro-card>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.querySelector('#title-above')).to.exist;
    expect(div.querySelectorAll('#title-below')).not.to.exist;
  });
});
