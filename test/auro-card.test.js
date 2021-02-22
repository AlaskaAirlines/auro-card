/* eslint-disable no-undef, sort-vars, no-implicit-coercion */

import { fixture, html, expect } from '@open-wc/testing';
// import sinon from 'sinon';
import '../src/auro-card.js';

describe('auro-card', () => {
  it('sets the CSS class on auro-card > div element', async () => {
    const el = await fixture(html`
      <auro-card cssclass="testClass"></auro-card>
    `),
    div = el.shadowRoot.querySelector('div');

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

  describe('Background color', async () => {
    it('sets background color when given a background color', async () => {
      const el = await fixture(html`
        <auro-card bgColor="red"></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div.style['background-color']).to.equal('red');
    });

    it('sets default background color when bgColor not set', async () => {
      const el = await fixture(html`
        <auro-card></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div.style['background-color']).to.be.equal('var(--auro-color-background-lightest)');
    });
  });

  describe('Padding', async () => {
    it('sets padding using token', async () => {
      const el = await fixture(html`
        <auro-card padding="sm"></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.card-details');
      expect(div.style.padding).to.equal('var(--auro-size-sm)');
    });

    it('sets custom padding', async () => {
      const el = await fixture(html`
        <auro-card padding="3px 5px 7px 8px"></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.card-details');
      expect(div.style.padding).to.equal('3px 5px 7px 8px');
    });
  });

  describe('Misc', async () => {
    it('sets text-align to left when justifyLeft is set', async () => {
      const el = await fixture(html`
        <auro-card justifyLeft></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.card-details');
      expect(div.style["text-align"]).to.equal('left');
    });

    it('sets text-align to center when justifyCenter is set', async () => {
      const el = await fixture(html`
        <auro-card justifyCenter></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.card-details');
      expect(div.style["text-align"]).to.equal('center');
    });

    it('sets text-align to right when justifyRight is set', async () => {
      const el = await fixture(html`
        <auro-card justifyRight></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.card-details');
      expect(div.style["text-align"]).to.equal('right');
    });

    it('sets text-align to left by default', async () => {
      const el = await fixture(html`
        <auro-card></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.card-details');
      expect(div.style["text-align"]).to.equal('left');
    });
  });

  describe('Misc', async () => {
    it('sets title above image when titleTop is true', async () => {
      const el = await fixture(html`
        <auro-card titleTop></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div.querySelector('#title-above')).to.exist;
      expect(div.querySelectorAll('#title-below')).not.to.exist;
    });

    it('sets title below image when titleTop is not set', async () => {
      const el = await fixture(html`
        <auro-card></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div.querySelector('#title-above')).not.to.exist;
      expect(div.querySelectorAll('#title-below')).to.exist;
    });
  });

  describe('Primary image', async () => {
    it('sets the primary image when imgSrc is set', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png"></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.card-image-wrapper');
      expect(div).to.exist;
    });

    it('sets the primary image as a background image when coverImgContainer is true', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png" coverImgContainer></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.bg-image');
      expect(div).to.exist;
    });

    it('sets the primary image using img tag when coverImgContainer is not set', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png"></auro-card>
      `);

      const img = el.shadowRoot.querySelector('img');
      expect(img).to.have.attribute('src', 'pic.png');
    });

    it('image wrapper and image not rendered when imgSrc not set', async () => {
      const el = await fixture(html`
        <auro-card></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div.card-image-wrapper');
      expect(div).to.not.exist;
      const img = el.shadowRoot.querySelector('img');
      expect(img).to.not.exist;
    });

    it('adds img-top class when imgTop is set', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png" imgTop></auro-card>
      `),
        div = el.shadowRoot.querySelector('div');

      expect(div).to.have.class('img-top');
    });

    it('adds img-right class when imgRight is set', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png" imgRight></auro-card>
      `),
        div = el.shadowRoot.querySelector('div');

      expect(div).to.have.class('img-right');
    });

    it('adds img-bottom class when imgBottom is set', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png" imgBottom></auro-card>
      `),
        div = el.shadowRoot.querySelector('div');

      expect(div).to.have.class('img-bottom');
    });

    it('adds img-left class when imgLeft is set', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png" imgLeft></auro-card>
      `),
        div = el.shadowRoot.querySelector('div');

      expect(div).to.have.class('img-left');
    });

    it('adds img-left class by default', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png"></auro-card>
      `),
        div = el.shadowRoot.querySelector('div');

      expect(div).to.have.class('img-left');
    });
  });

  describe('Background image', async () => {
    it('sets background-image CSS property when bgImgSrc is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png"></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div.style['background-image']).to.equal('url("pic.png")');
    });

    it('sets bg-img-anchor-top class when bgImgAnchorTop is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png" bgImgAnchorTop></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-top');
    });

    it('sets bg-img-anchor-right class when bgImgAnchorRight is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png" bgImgAnchorRight></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-right');
    });

    it('sets bg-img-anchor-bottom class when bgImgAnchorBottom is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png" bgImgAnchorBottom></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-bottom');
    });

    it('sets bg-img-anchor-left class when bgImgAnchorLeft is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png" bgImgAnchorLeft></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-left');
    });

    it('sets bg-img-anchor-top-right class when bgImgAnchorTopRight is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png" bgImgAnchorTopRight></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-top-right');
    });

    it('sets bg-img-anchor-bottom-right class when bgImgAnchorBottomRight is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png" bgImgAnchorBottomRight></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-bottom-right');
    });

    it('sets bg-img-anchor-bottom-left class when bgImgAnchorBottomLeft is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png" bgImgAnchorBottomLeft></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-bottom-left');
    });

    it('sets bg-img-anchor-top-left class when bgImgAnchorTopLeft is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png" bgImgAnchorTopLeft></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-top-left');
    });

    it('sets bg-img-anchor-center class when no background image anchor is set', async () => {
      const el = await fixture(html`
        <auro-card bgImgSrc="pic.png"></auro-card>
      `);

      const div = el.shadowRoot.querySelector('div');
      expect(div).to.have.class('bg-img-anchor-center');
    });
  });

  describe('Slots', async () => {
    it('will only have class attribute set when slot is used', async () => {
      const el = await fixture(html`
        <auro-card imgSrc="pic.png">
          <auro-header slot="title" style="text-align: center;" level="2" display="600">
            <b>one</b>world Explorer
          </auro-header>
          <p slot="description">
            <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
            And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
          </p>
          <auro-hyperlink href="#" secondary slot="cta" target="_blank" style="text-align: center;">More info</auro-hyperlink>
        </auro-card>
      `);

      const slots = el.shadowRoot.querySelectorAll('slot');
      for (const slot of slots) {
        let assignedNodes = slot.assignedNodes();

        if (assignedNodes.length === 0) {
          expect(slot).to.not.have.attribute('class');
        } else {
          expect(slot).to.have.attribute('class');
        }
      }
    });
  });
});
