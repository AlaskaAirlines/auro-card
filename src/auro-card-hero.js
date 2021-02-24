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
 * The auro-card element provides users a flexible way to convey a summary of information.
 *
 * @slot title - auro-card heading
 * @slot image - card image placement
 * @slot description - main body of text on this card
 * @slot cta - call to action link
 * @slot disclaimer - disclaimer text
 */
class AuroCardHero extends LitElement {

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    return html`
      <div class="heroWrapper" style="position: relative">

        <picture style="display: block; position: absolute; width: 100%; top: 0; left: 0">
          <source srcset="https://picsum.photos/1000?random=0"
                  media="(min-width: 800px)">
          <img src="https://picsum.photos/800?random=0" alt="" />
        </picture>

        <div style="position: relative; z-index='10'">
          <auro-header slot="title" level="2" display="600" margin="top" size="none">
            <slot name="title"></slot>
          </auro-header>

          <div class="imageWrapper">
            <slot name="image"></slot>
          </div>

          <div>
            <slot name="description" class="description"></slot>
            <slot name="action"></slot>
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
