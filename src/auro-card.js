// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { styleMap } from 'lit-html/directives/style-map';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

import "@alaskaairux/auro-header";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-card provides users a flexible way to convey a summary of information. The primary elements of a card include an
 * image, and details. The details are broken down into title, description, cta, and others. A card should be used to
 * grab the attention of a user and direct them to another resource for further information.  A card should not be used
 * as the primary source of information.
 *
 * @attr {String} cssClass - Applies designated CSS class to DOM element.
 * @attr {String} imgSrc - A url (relative or absolute) for card image.
 * @attr {String} imgAltText - Alt text for the given image.  If background image, this text is used as aria-label.
 * @attr {String} bgImgClass - A space-separates list of class names to be applied to the element with a
 * background image.  Only relevant when isBackgroundImage is true.
 * @attr {String} cardBgImgSrc - A background image that spans the breadth of the component.
 * @attr {String} cardBgImgAlt - If set, will serve as alt text for a full component background image.  Usage of this
 * property is only advised if the corresponding background image is considered relevant to the semantics of the page.
 * That is, if the image is not merely decorative.
 * @attr {String} cardBgColor - Indicates a background color that spans the breadth of the component.
 * @attr {String} padding - Indicates padding around the details section of the card. This can be one of the following
 * tokens: 'sm', 'md', or 'lg'.  It can also be a standard CSS 4-tuple of spacing, e.g. "5px 10px 2px 10px", and
 * supports CSS variable, e.g. "var(--t-padding) var(--r-padding) var(--b-padding) 20px"
 * @attr {String} justify - Indicates the text alignment for the card details section. Acceptable values are 'left',
 * 'right', and 'center'. If any other value is provided, it will be defaulted to 'center'.
 * @attr {Boolean} coverImgContainer - Indicates if the primary image should completely cover the image panel at all
 * times. This is accomplished by setting the primary image as a background image.
 * @attr {Boolean} banner - Indicates whether to force the card into "banner" mode (horizontal) at all breakpoints.
 * @attr {Boolean} hero - Indicates whether to apply "hero" styling to the card or banner.
 * @attr {Boolean} imgLeft - Indicates whether the image panel prefers the left side when applicable.
 * @attr {Boolean} imgRight - Indicates whether the image panel prefers the right side when applicable.
 * @attr {Boolean} card - Indicates whether to force the card into "card" mode (vertical) at all breakpoints.
 * @attr {Boolean} titleTop - Indicates whether to position the title above the primary image when applicable.
 * @attr {Boolean} miniBanner - Indicates whether to force the card into "mini banner" mode at all breakpoints.
 *
 * @slot image - Use to override the image with your own image markup format.
 * @slot title - The card heading.
 * @slot subtitle - A subtitle, if needed.
 * @slot description - The main body of text on this card.
 * @slot cta - The call to action for this card.
 * @slot disclaimer - Any disclaimer text after the main body of text.
 */
class AuroCard extends LitElement {
  // eslint-disable-next-line max-statements
  constructor() {
    super();

    // Default values;
    this.cssClass = "";
    this.bgImgClass = 'card-bg-image-cover card-bg-imageHeight-400';
    this.cardBgColor = 'var(--auro-color-background-lightest)';
    this.padding = 'none';
    this.justify = 'center';

    this.coverImgContainer = false;
    this.banner = false;
    this.hero = false;
    this.imgLeft = false;
    this.imgRight = false;
    this.card = false;
    this.titleTop = false;
    this.miniBanner = false;

    this.cardDetailsStyles = {};
  }

  // This function removes the CSS selector if a slot is empty
  firstUpdated() {
    const slotClass = this.cssClass.split(" ").join("."),
      slotObj = this.shadowRoot.querySelectorAll(`.${slotClass} slot`);

    for (const item of slotObj) {
      this.slt = item.assignedNodes();

      // eslint-disable-next-line no-magic-numbers
      if (this.slt.length === 0) {
        item.removeAttribute("class");
      }
    }
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      cssClass: { type: String },
      imgSrc: { type: String },
      imgAltText: { type: String },
      bgImgClass: { type: String },
      cardBgImgSrc: { type: String },
      cardBgImgAlt: { type: String },
      cardBgColor: { type: String },
      padding: { type: String },
      justify: { type: String },

      // modifiers
      coverImgContainer: { type: Boolean },
      banner: { type: Boolean },
      hero: { type: Boolean },
      imgLeft: { type: Boolean },
      imgRight: { type: Boolean },
      card: { type: Boolean },
      titleTop: { type: Boolean },
      miniBanner: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  setCardDetailsPadding() {
    const auroSizes = [
      'none',
      'xxxs',
      'xxs',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'xxl',
      'xxxl'
    ];

    this.cardDetailsStyles.padding = auroSizes.some((size) => size === this.padding)
      ? `var(--auro-size-${this.padding})`
      : this.padding;
  }

  setCardBgImg() {
    if (this.cardBgImgSrc) {
      this.cssClass += ' card-bg-image';
    }
  }

  setJustify() {
    if (!(this.justify in [
      'center',
      'left',
      'right'
    ])) {
      this.justify = 'center';
    }
    this.cardDetailsStyles.textAlign = this.justify;
  }

  // eslint-disable-next-line max-statements
  setModifierClasses() {
    if (this.banner) {
      this.cssClass += ' banner';
    }
    if (this.hero) {
      this.cssClass += ' hero';
    }
    if (this.imgLeft) {
      this.cssClass += ' imgLeft';
    }
    if (this.imgRight) {
      this.cssClass += ' imgRight';
    }
    if (this.card) {
      this.cssClass += ' card';
    }
    if (this.miniBanner) {
      this.cssClass += ' miniBanner';
    }
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    this.setCardDetailsPadding();
    this.setCardBgImg();
    this.setJustify();
    this.setModifierClasses();

    return html`
      <div
        class=${this.cssClass}
        style="${this.cardBgColor ? `background-color: ${this.cardBgColor};` : ``}${this.cardBgImgSrc ? ` background-image: url(${this.cardBgImgSrc})` : ``}">
        ${this.titleTop ? html` <slot id="title-above" name="title" class="card-title"></slot>` : null}
        ${this.imgSrc ? html`
          <div class="card-image-wrapper">
            <slot name="image" class="card-image">
              ${this.coverImgContainer
                ? html` <div class="card-bg-image ${this.bgImgClass}" aria-label="${this.imgAltText}" style="background-image: url(${this.imgSrc})"></div> `
                : html` <img src="${this.imgSrc}" alt="${this.imgAltText}" style="width: 100%; height: auto;" /> `}
            </slot>
          </div>
        ` : ``}
        <div class="card-details" style=${styleMap(this.cardDetailsStyles)}>
          ${this.titleTop ? null : html`<slot id="title-below" name="title" class="card-title"></slot>`}
          <slot name="subtitle" class="card-sub-title"></slot>
          <slot name="description" class="card-description"></slot>
          <slot name="cta" class="card-cta"></slot>
          <slot name="disclaimer" class="card-disclaimer"></slot>
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-card")) {
  customElements.define("auro-card", AuroCard);
}
