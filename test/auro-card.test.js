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

//   it('sets all classes for high level auro-card modifiers', async () => {
//     const el = await fixture(html`
//       <auro-card banner hero imgLeft imgRight card miniBanner ></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div');
//     expect(div).to.have.class('banner');
//     expect(div).to.have.class('hero');
//     expect(div).to.have.class('imgLeft');
//     expect(div).to.have.class('imgRight');
//     expect(div).to.have.class('card');
//     expect(div).to.have.class('miniBanner');
//   });
//
//   it('sets the card-bg-image CSS class when there is a card background image', async () => {
//     const el = await fixture(html`
//       <auro-card cardBgImgSrc="pic.png"></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div');
//     expect(div).to.have.class('card-bg-image');
//   });
//
//   it('sets the primary image when imgSrc is set', async () => {
//     const el = await fixture(html`
//       <auro-card imgSrc="pic.png"></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div.card-image-wrapper');
//     expect(div).to.exist;
//   });
//
//   it('sets the primary image as a background image when coverImgContainer is true', async () => {
//     const el = await fixture(html`
//       <auro-card imgSrc="pic.png" coverImgContainer></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div.card-bg-image');
//     expect(div).to.exist;
//   });
//
//   it('sets the primary image as an image when is not set', async () => {
//     const el = await fixture(html`
//       <auro-card imgSrc="pic.png"></auro-card>
//     `);
//
//     const img = el.shadowRoot.querySelector('img');
//     expect(img).to.have.attribute('src', 'pic.png');
//   });
//
//   it('sets title above image when titleTop is true', async () => {
//     const el = await fixture(html`
//       <auro-card titleTop></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div');
//     expect(div.querySelector('#title-above')).to.exist;
//     expect(div.querySelectorAll('#title-below')).not.to.exist;
//   });
//
//   it('sets title below image when titleTop is not set', async () => {
//     const el = await fixture(html`
//       <auro-card></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div');
//     expect(div.querySelector('#title-above')).not.to.exist;
//     expect(div.querySelectorAll('#title-below')).to.exist;
//   });
//
//   it('sets auro size padding', async () => {
//     const el = await fixture(html`
//       <auro-card padding="sm"></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div.card-details');
//     expect(div.style.padding).to.equal('var(--auro-size-sm)');
//   });
//
//   it('sets custom padding', async () => {
//     const el = await fixture(html`
//       <auro-card padding="3px 5px 7px 8px"></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div.card-details');
//     expect(div.style.padding).to.equal('3px 5px 7px 8px');
//   });
//
//   it('sets justify content when given a justify', async () => {
//     const el = await fixture(html`
//       <auro-card justify="right"></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div.card-details');
//     expect(div.style["text-align"]).to.equal('right');
//   });
//
//   it('sets default card background color when not given a background color', async () => {
//     const el = await fixture(html`
//       <auro-card></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div');
//     expect(div.style['background-color']).to.equal('var(--auro-color-background-lightest)');
//   });
//
//   it('sets card background color when given a background color', async () => {
//     const el = await fixture(html`
//       <auro-card cardBgColor="red"></auro-card>
//     `);
//
//     const div = el.shadowRoot.querySelector('div');
//     expect(div.style['background-color']).to.equal('red');
//   });

});
