/* eslint-disable no-underscore-dangle, no-magic-numbers, max-statements */

// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-hero-css.js";

import "@alaskaairux/auro-header";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.
 *
 * @attr {Boolean} billboard - to be used for billboard style configuration
 * @slot background - placement for `<picture />` element
 * @slot title - placement for header
 * @slot image - image placement
 * @slot description - main body of content
 * @slot cta - call to action
 * @slot disclaimer - disclaimer copy
 */
class AuroCardHero extends LitElement {

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // This function removes a CSS selector if the footer slot is empty
  firstUpdated() {
    const slot = this.shadowRoot.querySelector("#header"),
      slotWrapper = this.shadowRoot.querySelector("#headerElement");

    if (!this.unformatted && slot.assignedNodes().length === 0) {
      return slotWrapper.classList.add("unused");
    }

    return null;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    return html`
      <div class="heroWrapper">

        <slot name="background" class="background"></slot>

        <div class="bodyWrapper">
          <auro-header level="2" display="600" margin="both" size="none" id="headerElement">
            <slot name="title" id="header"></slot>
          </auro-header>

          <div class="imageWrapper">
            <slot name="image"></slot>
          </div>

          <div class="contentWrapper">
            <slot name="description" class="description"></slot>
            <slot name="action" class="action"></slot>
            <slot name="disclaimer" class="disclaimer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-card-hero")) {
  customElements.define("auro-card-hero", AuroCardHero);
}
