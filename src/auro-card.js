/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

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

    // Container
    this.cssClass = '';
    this.bgImgClass = 'card-bg-image-cover card-bg-imageHeight-400';
    this.bgColor = 'var(--auro-color-background-lightest)';

    // Details
    this.padding = 'none';
    this.justifyLeft = false;
    this.justifyRight = false;
    this.justifyCenter = false;

    // Misc
    this.titleTop = false;

    // Primary image
    this.imgSrc = null;
    this.imgAltText = null;
    this.imgTop = false;
    this.imgRight = false;
    this.imgBottom = false;
    this.imgLeft = false;
    this.coverImgContainer = false;

    // Background image
    this.bgImgSrc = null;
    this.bgImgAlt = null;
    this.bgImgAnchorTop = false;
    this.bgImgAnchorRight = false;
    this.bgImgAnchorBottom = false;
    this.bgImgAnchorLeft = false;
    this.bgImgAnchorTopRight = false;
    this.bgImgAnchorBottomRight = false;
    this.bgImgAnchorBottomLeft = false;
    this.bgImgAnchorTopLeft = false;
    this.bgImgAnchorCenter = false;

    // Private properties
    this._detailsStyles = {};
  }

  // This function removes the CSS selector if a slot is empty
  firstUpdated() {
    const slotClass = this.cssClass.
        trim().
        split(" ").
        join("."),
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

      // Container
      cssClass: { type: String },
      bgColor: { type: String },

      // Details
      padding: { type: String },
      justifyLeft: { type: Boolean },
      justifyRight: { type: Boolean },
      justifyCenter: { type: Boolean },

      // Misc
      titleTop: { type: Boolean },

      // Primary image
      imgSrc: { type: String },
      imgAltText: { type: String },
      imgTop: { type: Boolean },
      imgRight: { type: Boolean },
      imgBottom: { type: Boolean },
      imgLeft: { type: Boolean },
      coverImgContainer: { type: Boolean },

      // Background image
      bgImgSrc: { type: String },
      bgImgAlt: { type: String },
      bgImgAnchorTop: { type: Boolean },
      bgImgAnchorRight: { type: Boolean },
      bgImgAnchorBottom: { type: Boolean },
      bgImgAnchorLeft: { type: Boolean },
      bgImgAnchorTopRight: { type: Boolean },
      bgImgAnchorBottomRight: { type: Boolean },
      bgImgAnchorBottomLeft: { type: Boolean },
      bgImgAnchorTopLeft: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  setJustify() {
    if ((this.justifyLeft ? 1 : 0) + (this.justifyRight ? 1 : 0) + (this.justifyCenter ? 1 : 0) > 1) {
      // More then one is invalid, so set to default
      this._detailsStyles.textAlign = 'center';
    } else if (this.justifyLeft) {
      this._detailsStyles.textAlign = 'left';
    } else if (this.justifyRight) {
      this._detailsStyles.textAlign = 'right';
    } else {
      this._detailsStyles.textAlign = 'center';
    }
  }

  setImgPlacement() {
    if ((this.imgTop ? 1 : 0) + (this.imgRight ? 1 : 0) + (this.imgBottom ? 1 : 0) + (this.imgLeft ? 1 : 0) > 1) {
      // More then one is invalid, so set to default
      this.cssClass += ` img-left`;
    } else if (this.imgTop) {
      this.cssClass += ` img-top`;
    } else if (this.imgRight) {
      this.cssClass += ` img-right`;
    } else if (this.imgBottom) {
      this.cssClass += ` img-bottom`;
    } else {
      this.cssClass += ` img-left`;
    }
  }

  setBgImg() {
    if (this.bgImgSrc) {
      this.cssClass += ' bg-image';
      if (
        (this.bgImgAnchorTop ? 1 : 0) + (this.bgImgAnchorRight ? 1 : 0) +
        (this.bgImgAnchorBottom ? 1 : 0) + (this.bgImgAnchorLeft ? 1 : 0) +
        (this.bgImgAnchorTopRight ? 1 : 0) + (this.bgImgAnchorBottomRight ? 1 : 0) +
        (this.bgImgAnchorBottomLeft ? 1 : 0) + (this.bgImgAnchorTopLeft ? 1 : 0) +
        (this.bgImgAnchorCenter ? 1 : 0) > 1) {
        // More then one is invalid, so set to default
        this.cssClass += ' bg-img-anchor-center';
      } else if (this.bgImgAnchorTop) {
        this.cssClass += ' bg-img-anchor-top';
      } else if (this.bgImgAnchorRight) {
        this.cssClass += ' bg-img-anchor-right';
      } else if (this.bgImgAnchorBottom) {
        this.cssClass += ' bg-img-anchor-bottom';
      } else if (this.bgImgAnchorLeft) {
        this.cssClass += ' bg-img-anchor-left';
      } else if (this.bgImgAnchorTopRight) {
        this.cssClass += ' bg-img-anchor-top-right';
      } else if (this.bgImgAnchorBottomRight) {
        this.cssClass += ' bg-img-anchor-bottom-right';
      } else if (this.bgImgAnchorBottomLeft) {
        this.cssClass += ' bg-img-anchor-bottom-left';
      } else if (this.bgImgAnchorTopLeft) {
        this.cssClass += ' bg-img-anchor-top-left';
      } else {
        this.cssClass += ' bg-img-anchor-center';
      }
    }
  }

  setDetailsPadding() {
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

    this._detailsStyles.padding = auroSizes.some((size) => size === this.padding)
      ? `var(--auro-size-${this.padding})`
      : this.padding;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    this.setJustify();
    this.setImgPlacement();
    this.setBgImg();
    this.setDetailsPadding();

    return html`
      <div
        class="auro-card ${this.cssClass}"
        style="${this.bgColor ? `background-color: ${this.bgColor};` : ``}${this.bgImgSrc ? ` background-image: url(${this.bgImgSrc})` : ``}">
        ${this.titleTop ? html` <slot id="title-above" name="title" class="card-title"></slot>` : null}
        ${this.imgSrc ? html`
          <div class="card-image-wrapper">
            <slot name="image" class="card-image">
              ${this.coverImgContainer
                ? html` <div class="bg-image ${this.bgImgClass}" aria-label="${this.imgAltText}" style="background-image: url(${this.imgSrc})"></div> `
                : html` <img src="${this.imgSrc}" alt="${this.imgAltText}" style="width: 100%; height: auto;" /> `}
            </slot>
          </div>
        ` : ``}
        <div class="card-details" style=${styleMap(this._detailsStyles)}>
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
