// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

import "@alaskaairux/auro-header";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-card provides users a way to ...
 *
 * @attr {String} cssClass - Applies designated CSS class to DOM element.
 * @attr {String} imageSrc - A url (relative or absolute) for card image.
 *
 * @slot - TODO: if supported
 */
// build the component class
class AuroCard extends LitElement {
  constructor() {
    super();

    // Default values;
    this.titleLevel = 2;
    this.titleDisplay = "600";
    this.linkText = 'More info';
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      cssClass: { type: String },
      imageSrc: { type: String },
      imageAltText: { type: String },
      titleText: { type: String },
      titleLevel: { type: Number },
      titleDisplay: { type: String },
      teaserText: { type: String },
      linkText: { type: String },
      linkTarget: { type: String },
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
      <div class=${this.cssClass}>
        ${this.imageSrc ? html`
          <img
            src="${this.imageSrc}"
            alt="${this.imageAltText}"
            style="width: 100%; height: auto;">
        ` : html``}
        ${this.titleText ? html`
          <div style="text-align: center;">
            <auro-header level="${this.titleLevel}" display="${this.titleDisplay}">
              ${this.titleText}
            </auro-header>
          </div>
        ` : html``}
        ${this.teaserText ? html`
          <p style="text-align: center;">
            ${this.teaserText}
          </p>
        ` : html``}
        ${this.linkTarget ? html`
          <a href="${this.linkTarget}">${this.linkText}</a>
        ` : html``}
        <slot></slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-card")) {
  customElements.define("auro-card", AuroCard);
}
