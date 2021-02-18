# auro-card

TODO: Write description

## auro-card use cases

The `auro-card` element should be used in situations where users may:

- use case 1
- use case 2
- use case 3

<div style="max-width: 400px">
    <auro-card
      cssClass="my-class"
      isBgImg
      imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
      imgAlt="This is an image of a logo">
      <auro-header slot="title" style="text-align: center;" level="2" display="600"><b>one</b>world Explorer</auro-header>
      <auro-hyperlink slot="cta" href="#" target="_blank" secondary slot="cta">More info</auro-hyperlink>
      <p slot="description">
        <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
        And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
      </p>
    </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card cssClass="my-class" imageSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png" imageAlt="This is an image of a logo">
  <auro-header slot="title" style="text-align: center;" level="2" display="600"> <b>one</b>world Explorer </auro-header>
  <p slot="subtitle" style="text-align: center;">A place for explorers</p>
  <div slot="cta" style="text-align: center;">
    <a href="https://www.alaskaair.com/">More info</a>
  </div>
  <p slot="description">
    <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent. And, for every dot you connect, you earn more miles and points to spend
    across the oneworld Alliance.
  </p>
  <p slot="disclaimer">* Void where prohibited.</p>
</auro-card>
```

</auro-accordion>

## Then there is more

Aenean at blandit lorem. Fusce imperdiet mi nec gravida maximus. Quisque nisl libero, condimentum in nisi a, imperdiet lacinia arcu.

```javascript
toggleDialog = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector("html");

  html.style.overflow = "hidden";
  dialog.removeAttribute("open");
  dialog.setAttribute("open", true);
};

toggleDialogClose = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector("html");

  html.style.overflow = "";
  dialog.removeAttribute("open");
};
```
