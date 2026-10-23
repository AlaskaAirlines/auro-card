// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
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
 * A card that groups an image, a header, a description, and a call to action into one
 * summary of information, such as a destination, offer, or article teaser.
 *
 * **Key capabilities**
 * - **Content areas**: four named slots (`image`, `header`, `description`, `cta`) that you
 *   fill with your own content.
 * - **Clickable card**: setting `href` makes the whole card a single link, built on
 *   `<auro-hyperlink>`, including its safe handling of URLs.
 * - **Spacing options**: set `variant` to `inset-content`, `inset-container`, or `inset-stretch`
 *   to choose how padding is applied around the image and text.
 * - **Border and alignment**: `border` adds an outline with rounded corners, and `center`
 *   centers the text.
 *
 * **Example**
 * ```html
 * <auro-card href="/destinations/hawaii" border>
 *   <img slot="image" src="hawaii.jpg" alt="A beach in Hawaii" />
 *   <span slot="header">Hawaii</span>
 *   <span slot="description">Fly nonstop from the West Coast.</span>
 * </auro-card>
 * ```
 *
 * @summary Card that groups an image, header, description, and call to action, and can act as a single link.
 * @customElement auro-card
 *
 * @attr {'inset-content' | 'inset-container' | 'inset-stretch'} variant - Sets how padding is applied. Use `inset-content` to pad the text and leave the image edge to edge, `inset-container` to pad the whole card, image included, or `inset-stretch` to let the image and text reach the left and right edges, with space above the image and below the text. Without a value, the card adds no extra left, right, or top padding. When `href` is set, the text always gets left and right padding, even with `inset-stretch`.
 *
 * @slot image - An image for the top of the card. An `<img>` fills the full width of the card.
 * @slot header - The card's heading text.
 * @slot description - Supporting text shown below the header.
 * @slot cta - A call to action, such as a button or link, shown below the description. When the card is taller than its content, such as in a row of cards, it moves to the bottom so calls to action line up.
 * @csspart content - The container that holds the header, description, and cta slots.
 * @csspart link - The [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#link) that wraps the whole card. Only present when `href` is set.
 * @csspart imageWrapper - The container around the image slot.
 * @csspart image - The `<slot>` element that holds the image content.
 * @csspart header - The `<slot>` element that holds the header content.
 * @csspart description - The `<slot>` element that holds the description content.
 * @csspart cta - The `<slot>` element that holds the call to action.
 *
 * @cssprop --ds-auro-card-border-color - Color of the card's border, which shows when `border` is set. A card with `href` also uses it for the outline around the card.
 * @cssprop --ds-auro-card-background-color - Color behind the card's content. Cards with `border` or `href` use the theme's surface color by default, and other cards are transparent.
 */

export class AuroCard extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
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
       * Adds a thin border and rounded corners around the card.
       * @category ui
       */
      border: {
        type: Boolean,
        reflect: true
      },

      /**
       * Centers the text within the card.
       * @category ui
       */
      center: {
        type: Boolean,
        reflect: true
      },

      /**
       * Makes the whole card a single link to an address such as `/destinations/hawaii` (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#href) `href` attribute), including its safe handling of URLs. Because the card's content is rendered inside the link, avoid placing other links or buttons in the card's slots.
       * @category behavior
       */
      href: {
        type: String,
        reflect: true
      },

      /**
       * Sets how the linked page relates to this one, such as `noopener` or `nofollow` (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#rel) `rel` attribute).
       * @relevantWhen href
       * @category behavior
       */
      rel: {
        type: String,
        reflect: true
      },

      /**
       * Passes a `relative` attribute to the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api). The auro-hyperlink version this card uses does not currently act on it, so it has no visible effect.
       * @relevantWhen href
       * @category behavior
       */
      relative: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the card's accessibility role. Without `href`, the role is `article`. With `href`, the value is passed to the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#role), and no role is set when it is empty.
       * @category behavior
       */
      role: {
        type: String,
        reflect: true
      },

      /**
       * Sets where the link opens, such as `_blank` for a new tab or `_self` for the current tab (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#target) `target` attribute).
       * @relevantWhen href
       * @category behavior
       */
      target: {
        type: String,
        reflect: true
      }
    };
  }

  /**
   * Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-card` on the same page.
   * @param {string} [name="auro-card"] - The tag name to register the element under.
   *
   * @example
   * AuroCard.register("custom-card") // makes the element available as <custom-card>
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
