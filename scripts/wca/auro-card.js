import { AuroCard } from "../../src/auro-card.js";

/**
 * The `<auro-card>` element provides users a flexible way to convey a summary of information.
 */
class AuroCardWCA extends AuroCard {}

if (!customElements.get("auro-card")) {
  customElements.define("auro-card", AuroCardWCA);
}
