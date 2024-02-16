/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card element provides users a flexible way to convey a summary of information.
 *
 * @attr {String} variant - Sets the variant of the card. Options include: bordered, icon, round-image.
 * @attr {String} navigationLink - Sets the card to function as a hyperlink and disables the default CTA slot.
 */
export class AuroCard extends LitElement {

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {
      variant: {
        type: String,
        reflect: true,
      },
      navigationLink: {
        type: String,
        reflect: true,
      }
    };
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    const innerHtml = html`
        <slot name="image"></slot>
        <!-- TODO: Expose CSS part for div.content -->
        <div id="content-within" class="content" part="content">
          <slot name="header"></slot>
          <slot name="description"></slot>
          ${this.navigationLink ? '' : html`<slot name="cta"></slot>`}
        </div>
    `;

    return html`
      ${this.navigationLink
        ? html`<auro-hyperlink aria-labelledby="content-within" href="${this.navigationLink}">${innerHtml}</auro-hyperlink>`
        : innerHtml
      }
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-card")) {
  customElements.define("auro-card", AuroCard);
}
