import { AuroCard } from './src/auro-card';
import { AuroBanner } from './src/auro-banner';

/**
 * Register Custom Element.
 * @param {String} name - Name to use for custom element.
 * @param {Function} className - Class name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name, className) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends className {});
  }
}

registerComponent*('auro-card', AuroCard);
registerComponent*('auro-banner', AuroBanner);
