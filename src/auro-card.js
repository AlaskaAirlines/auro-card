// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { html } from "lit/static-html.js";
import hyperlinkVersion from "./hyperlinkVersion.js";
import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The `<auro-card>` element provides users a flexible way to convey a summary of information.
 *
 * @attr {String} variant - Sets the variant of the card. Options `inset-content`, `inset-container`, `inset-stretch`.
 * @attr {Boolean} border - Adds desired UI border to the `auro-card` element.
 * @attr {Boolean} center - Centers content within the scope of the `auro-card`.
 * @attr {String} href - Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot.
 * @attr {String} rel - Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel).
 * @attr {Boolean} relative - If true, the auto URL re-write feature will be disabled.https://auro.alaskaair.com/components/auro/hyperlink/api#relative
 * @attr {String} role - Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role).
 * @attr {String} target - Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target).
 * @slot image - Content slot for image content.
 * @slot header - Content slot for string text header content.
 * @slot description - Content slot for string text description content.
 * @slot cta - Content slot for call-to-action content.
 * @csspart content - Apply styles to the outer string text container.
 * @csspart link - Apply styles to the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#link) element.
 * @csspart imageWrapper - Apply styles to the outer image slot container.
 * @csspart image - Apply styles to the named image slot container.
 * @csspart header - Apply styles to the named header slot container.
 * @csspart description - Apply styles to the named description slot container.
 * @csspart cta - Apply styles to the named cta slot container.
 */

export class AuroCard extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.hyperlinkTag = versioning.generateTag(
      "auro-hyperlink",
      hyperlinkVersion,
      AuroHyperlink,
    );
  }

  static get styles() {
    return [styleCss, tokensCss, colorCss];
  }

  static get properties() {
    return {
      /**
       * Sets the variant of the card. Options `inset-content`, `inset-container`, `inset-stretch`.
       */
      variant: {
        type: String,
        reflect: true,
      },

      /**
       * Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot.
       */
      href: {
        type: String,
        reflect: true,
      },

      /**
       * Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel).
       */
      rel: {
        type: String,
        reflect: true,
      },

      /**
       * If true, the auto URL re-write feature will be disabled. [see here for hyperlink relative](https://auro.alaskaair.com/components/auro/hyperlink/api#relative)
       */
      relative: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role).
       */
      role: {
        type: String,
        reflect: true,
      },

      /**
       * Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target).
       */
      target: {
        type: String,
        reflect: true,
      },
    };
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-card"] - The name of element that you want to register to.
   *
   * @example
   * AuroCard.register("custom-card") // this will register this element to <custom-card/>
   *
   */
  static register(name = "auro-card") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroCard);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-card");

    this.setRole();
  }

  /**
   * Sets the role attribute for the component.
   * @private
   * @returns {void}
   */
  setRole() {
    if (this.href) {
      this.role = this.role || undefined;
    } else {
      this.role = "article";
    }
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
      ${
        this.href
          ? html`
          <${this.hyperlinkTag}
            aria-labelledby="content-within"
            href="${ifDefined(this.href ? this.href : undefined)}"
            rel="${ifDefined(this.rel ? this.rel : undefined)}"
            relative="${ifDefined(this.relative || undefined)}"
            role="${ifDefined(this.role ? this.role : undefined)}"
            target="${ifDefined(this.target ? this.target : undefined)}"
            part="link"
          >
            ${cardContent}
          </${this.hyperlinkTag}>`
          : cardContent
      }
    `;
  }
}
