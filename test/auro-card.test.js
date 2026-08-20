import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-card", () => {
  const fixWebComponent = async (href) =>
    await fixture(html`
    <auro-card style="max-width: 375px;" href="${href}">
          <!-- Image set to 134px -->
        <img
          slot="image"
          src="https://picsum.photos/134/134"
          alt="Random insert 0"/>
        <h1 slot="header" level="3" display="600">
          Header
        </h1>
        <div slot="description">
          <p>
            Context goes here. Describe the page this card represents.
          </p>
        </div>
        <p slot="cta">
          Non Link CTA
        </p>
      </auro-card>
    `);

  it("auro-card is accessible", async () => {
    const el = await fixWebComponent("/");

    await expect(el).to.be.accessible();
  });

  it("auro-card custom element is defined", async () => {
    const el = !!(await customElements.get("auro-card"));

    await expect(el).to.be.true;
  });

  it("auro-hyperlink is rendered when `href` attribute is present", async () => {
    const el = await fixWebComponent("/");
    const link = el.shadowRoot.querySelectorAll("[auro-hyperlink]");

    await expect(link.length).to.equal(1);
  });

  it("does not render auro-hyperlink when href attribute is undefined", async () => {
    const el = await fixWebComponent(undefined);
    const link = el.shadowRoot.querySelector("[auro-hyperlink]");
    console.log;

    expect(link).to.be.null;
  });

  it("verify that attributes are passed down to auro-hyperlink ", async () => {
    const el = await fixture(html`
      <auro-card href="/auro" rel="hyperlink" relative role="button" target="parent"></auro-card>
    `);

    const AuroHyperlink = el.shadowRoot.querySelector("[auro-hyperlink]");
    const anchor = AuroHyperlink.shadowRoot.querySelector(".hyperlink");

    expect(AuroHyperlink).to.have.attribute("rel", "hyperlink");
    expect(AuroHyperlink).to.have.attribute("relative");
    expect(anchor).to.have.attribute("role", "button");
    expect(AuroHyperlink).to.have.attribute("target", "parent");
  });

  it("drops the cta to the card bottom when stretched taller than its content", async () => {
    const wrapper = await fixture(html`
      <div style="display: flex; align-items: stretch; height: 600px;">
        <auro-card>
          <h1 slot="header">Header</h1>
          <p slot="description">Short.</p>
          <div slot="cta">More info</div>
        </auro-card>
      </div>
    `);
    const cta = wrapper.querySelector('[slot="cta"]');

    // In a stretched card the content column grows to fill the extra height
    // and the slotted cta's auto top-margin resolves to the distributed free
    // space, pushing it to the bottom. Guards both `.content { flex: 1 1 auto }`
    // and the `::slotted([slot="cta"]) { margin-top: auto }` selector.
    expect(parseFloat(getComputedStyle(cta).marginTop)).to.be.greaterThan(0);
  });

  it("keeps the cta below content when the card is not stretched", async () => {
    const el = await fixture(html`
      <auro-card>
        <h1 slot="header">Header</h1>
        <p slot="description">Short.</p>
        <div slot="cta">More info</div>
      </auro-card>
    `);
    const cta = el.querySelector('[slot="cta"]');

    expect(parseFloat(getComputedStyle(cta).marginTop)).to.equal(0);
  });
});
