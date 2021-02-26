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
 * @attr {Boolean} hero - to be used for hero style configuration
 * @attr {Boolean} marquee - to be used for marquee style configuration
 * @slot background - placement for `<picture />` element
 * @slot title - placement for header
 * @slot image - image placement
 * @slot description - main body of content
 * @slot action - call to action
 * @slot disclaimer - disclaimer copy
 */
class AuroBanner extends LitElement {

  static get properties() {
    return {
      ...super.properties,
      hero: {
        type: Boolean
      },
      marquee: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // This function removes a CSS selector if the footer slot is empty
  firstUpdated() {
    const marquee = this.shadowRoot.querySelector("#marquee"),
      marqueeWrapper = this.shadowRoot.querySelector("#marqueeElement"),
      prefix = this.shadowRoot.querySelector("#prefix"),
      prefixWrapper = this.shadowRoot.querySelector("#prefixElement"),
      title = this.shadowRoot.querySelector("#title"),
      titleWrapper = this.shadowRoot.querySelector("#titleElement");

    if (title.assignedNodes().length === 0) {
      return titleWrapper.classList.add("unused");
    } else if (prefix.assignedNodes().length === 0) {
      return prefixWrapper.classList.add("unused");
    } else if (marquee.assignedNodes().length === 0) {
      return marqueeWrapper.classList.add("unused");
    }

    return null;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    return html`
      <div class="bannerWrapper">

        <slot name="imagePlacement" class="imagePlacement"></slot>

        <div class="bodyWrapper">
          ${this.hero && !this.marquee
            ? html`
              <auro-header level="2" display="300" margin="top" size="none" class="title prefix" id="prefixElement">
                <slot name="prefix" id="prefix"></slot>
              </auro-header>

              <auro-header level="2" display="600" margin="both" size="none" id="titleElement" class="title">
                <slot name="title" id="title"></slot>
              </auro-header>`
            : html``
          }

          ${this.marquee && !this.hero
            ? html`
              <auro-header level="2" display="400" margin="both" size="none" id="marqueeElement" class="title marquee">
                <slot name="title" id="marquee"></slot>
              </auro-header>`
            : html``
          }

          ${!this.marquee && !this.hero
            ? html`
              <auro-header level="2" display="600" margin="both" size="none" id="titleElement" class="title">
                <slot name="title" id="title"></slot>
              </auro-header>`
            : html``
          }

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
if (!customElements.get("auro-banner")) {
  customElements.define("auro-banner", AuroBanner);
}
