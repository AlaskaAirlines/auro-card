// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

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
 * @attr {Boolean} isBgImg - Indicates whether the given image should be set as a background image.
 * @attr {String} bgImgClass - A space-separates list of class names to be applied to the element with a
 * background image.  Only relevant when isBackgroundImage is true.
 * @attr {Boolean} isTitleAboveImg - Indicates whether the title prefers to appear above the image.  This property does
 * not affect the position of the title when in a banner layout.
 * @attr {String} cardBgImgSrc - A background image that spans the breadth of the component.
 * @attr {String} cardBgImgAlt - If set, will serve as alt text for a full component background image.  Usage of this
 * property is only advised if the corresponding background image is considered relevant to the semantics of the page.
 * That is, if the image is not merely decorative.
 * @attr {String} cardBgColor - Indicates a background color that spans the breadth of the component.
 * @attr {String} padding - Indicates padding around the details section of the card. This can be one of the following
 * tokens: 'sm', 'md', or 'lg'.  It can also be a standard CSS 4-tuple of spacing, e.g. "5px 10px 2px 10px", and
 * supports CSS variable, e.g. "var(--t-padding) var(--r-padding) var(--b-padding) 20px"
 *
 * @slot image - Use to override the image with your own image markup format.
 * @slot title - The card heading.
 * @slot subtitle - A subtitle, if needed.
 * @slot description - The main body of text on this card.
 * @slot cta - The call to action for this card.
 * @slot disclaimer - Any disclaimer text after the main body of text.
 */
class AuroCard extends LitElement {
  constructor() {
    super();

    // Default values;
    this.isBgImg = false;
    this.bgImgClass = "bg-image";
    this.isTitleAboveImg = false;
    this.cardBgColor = "var(--auro-color-background-lightest)";
    this.padding = "var(--auro-size-md)";
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
      isBgImg: { type: Boolean },
      bgImgClass: { type: String },
      isTitleAboveImg: { type: Boolean },
      cardBgImgSrc: { type: String },
      cardBgImgAlt: { type: String },
      cardBgColor: { type: String },
      padding: { type: String },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class=${this.cssClass} style="${this.cardBgColor ? `background-color: ${this.cardBgColor}` : ``}">
        ${this.isTitleAboveImg ? html` <slot name="title" class="card-title"></slot>` : null}
        <div class="card-image-wrapper">
          <slot name="image" class="card-image">
            ${this.isBgImg
              ? html` <div class="${this.bgImgClass}" aria-label="${this.imgAltText}" style="background-image: url(${this.imgSrc})"></div> `
              : html` <img src="${this.imgSrc}" alt="${this.imgAltText}" style="width: 100%; height: auto;" /> `}
          </slot>
        </div>
        <div class="card-details">
          ${this.isTitleAboveImg ? null : html`<slot name="title" class="card-title"></slot>`}
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
