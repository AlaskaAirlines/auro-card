# auro-card

auro-card provides users a flexible way to convey a summary of information. The primary elements of a card include an
image, and details. The details are broken down into title, description, cta, and others. A card should be used to
grab the attention of a user and direct them to another resource for further information.  A card should not be used
as the primary source of information.

## auro-card as single small tile

<div style="max-width: 400px">
  <auro-card
    cssClass="my-class"
    imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    imgAltText="This is an image of a logo">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      <b>one</b>world Explorer
    </auro-header>
    <p slot="subtitle" style="text-align: center;">A place for explorers</p>
    <div slot="cta" style="text-align: center;">
        <a href="https://www.alaskaair.com/">More info</a>
    </div>
    <p slot="description">
      <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
      And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
    </p>
    <p slot="disclaimer">
      * Void where prohibited.
    </p>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<div style="max-width: 400px">
  <auro-card
    cssClass="my-class"
    imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    imgAltText="This is an image of a logo">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      <b>one</b>world Explorer
    </auro-header>
    <p slot="subtitle" style="text-align: center;">A place for explorers</p>
    <div slot="cta" style="text-align: center;">
        <a href="https://www.alaskaair.com/">More info</a>
    </div>
    <p slot="description">
      <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
      And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
    </p>
    <p slot="disclaimer">
      * Void where prohibited.
    </p>
  </auro-card>
</div>
```

</auro-accordion>

## auro-card in a group

<div class="exampleWrapper tile-container">
    <auro-card
      cssClass="tile"
      imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
      imgAltText="This is an image of a logo">
      <auro-header slot="title" style="text-align: center;" level="2" display="600">
        <b>one</b>world Explorer
      </auro-header>
      <p slot="description">
        <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
        And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
      </p>
      <div slot="cta" style="text-align: center;">
        <a href="https://www.alaskaair.com/">More info</a>
      </div>
    </auro-card>
    <auro-card
      cssClass="tile"
      imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/green.png"
      imgAltText="This is an image of a logo">
      <auro-header slot="title" style="text-align: center;" level="2" display="600">
        <b>one</b>world Explorer
      </auro-header>
      <p slot="description">
        <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
        And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
      </p>
      <div slot="cta" style="text-align: center;">
        <a href="https://www.alaskaair.com/">More info</a>
      </div>
    </auro-card>
    <auro-card
      cssClass="tile"
      imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/pink.png"
      imgAltText="This is an image of a logo">
      <auro-header slot="title" style="text-align: center;" level="2" display="600">
        <b>one</b>world Explorer
      </auro-header>
      <p slot="description">
        <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
        And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
      </p>
      <div slot="cta" style="text-align: center;">
        <a href="https://www.alaskaair.com/">More info</a>
      </div>
    </auro-card>
    
    <style>
      .tile-container {
        display: flex;
        flex-direction: row;
      }
      .tile-container .tile {
        min-width: 5rem;
      }
    </style>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<div style="max-width: 400px">
  <auro-card
    cssClass="my-class"
    imageSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    imageAlt="This is an image of a logo">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      <b>one</b>world Explorer
    </auro-header>
    <p slot="subtitle" style="text-align: center;">A place for explorers</p>
    <div slot="cta" style="text-align: center;">
        <a href="https://www.alaskaair.com/">More info</a>
    </div>
    <p slot="description">
      <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
      And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
    </p>
    <p slot="disclaimer">
      * Void where prohibited.
    </p>
  </auro-card>
</div>
```

</auro-accordion>

```javascript
toggleDialog = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  html.style.overflow = 'hidden';
  dialog.removeAttribute("open");
  dialog.setAttribute("open", true);
}

toggleDialogClose = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  html.style.overflow = '';
  dialog.removeAttribute("open");
}
```
