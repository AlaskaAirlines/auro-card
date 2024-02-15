import { AuroCard } from './src/auro-card.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-card') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroCard {});
  }
}

export { registerComponent }
