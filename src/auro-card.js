/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import { ifDefined } from 'lit/directives/if-defined.js';

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card element provides users a flexible way to convey a summary of information.
 *
 * @attr {String} variant - Sets the variant of the card. Options include: "inset" or "flush".
 * @attr {String} href - Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot.
 * @attr {String} rel - Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel).
 * @attr {String} role - Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role).
 * @attr {String} target - Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target).
 */
export class AuroCard extends LitElement {

  constructor() {
    super();

    // Properly defines the role of this new custom element for screen readers.
    this.setAttribute('role', 'article');
  }

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {
      variant: {
        type: String,
        reflect: true,
      },
      href: {
        type: String,
        reflect: true,
      },
      rel: {
        type: String,
        reflect: true,
      },
      role: {
        type: String,
        reflect: true,
      },
      target: {
        type: String,
        reflect: true,
      }
    };
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    const cardContent = html`
      <div class="imageWrapper" part="imageWrapper">
        <slot name="image" part="image"></slot>
      </div>
      <div id="content-within" class="content" part="content">
        <slot name="header" part="header"></slot>
        <slot name="description" part="description"></slot>
        <slot name="cta" part="cta"></slot>
      </div>
    `;

    return html`
      ${this.href
        ? html`

          <!-- only define attributes if data is TRUE -->
          <auro-hyperlink
            aria-labelledby="content-within"
            href="${ifDefined(this.href ? this.href : undefined)}"
            rel="${ifDefined(this.rel ? this.rel : undefined)}"
            role="${ifDefined(this.role ? this.role : undefined)}"
            target="${ifDefined(this.target ? this.target : undefined)}"
          >
            ${cardContent}
          </auro-hyperlink>`
        : cardContent
      }
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-card")) {
  customElements.define("auro-card", AuroCard);
}
