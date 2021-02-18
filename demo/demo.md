# auro-card

auro-card provides users a flexible way to convey a summary of information. The primary elements of a card include an
image, and details. The details are broken down into title, description, cta, and others. A card should be used to
grab the attention of a user and direct them to another resource for further information. A card should not be used
as the primary source of information.

## auro-card as Single Tile

<div style="max-width: 400px" class="exampleWrapper">
  <auro-card
    imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    imgAltText="This is an image of a logo">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      <b>one</b>world Explorer
    </auro-header>
    <p slot="subtitle" style="text-align: center;">A place for explorers</p>
    <p slot="description">
      <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
      And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
    </p>
    <auro-hyperlink href="#" secondary slot="cta" target="_blank">More info</auro-hyperlink>
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
    imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    imgAltText="This is an image of a logo">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      <b>one</b>world Explorer
    </auro-header>
    <p slot="subtitle" style="text-align: center;">A place for explorers</p>
    <p slot="description">
      <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
      And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
    </p>
    <auro-hyperlink href="#" secondary slot="cta" target="_blank">More info</auro-hyperlink>
    <p slot="disclaimer">
      * Void where prohibited.
    </p>
  </auro-card>
</div>
```

</auro-accordion>

## auro-card as Banner

<div class="exampleWrapper">
  <auro-card
    cssClass="banner"
    imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/lounge.png"
    imgAltText="Lounge amenities">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      Relax before the runway
    </auro-header>
    <p slot="description">
      Experience our unparalleled airport lounge service in a quiet space to relax and recharge, or get a little work
      done between flights. Enhanced cleaning procedures and limited capacity offer additional peace of mind. Our
      newest Alaska Lounge location is now open in Sea-Tac's North Satellite terminal. At over 15,800 square feet,
      our flagship lounge has it all. Prepare to relax by the grand fireplace or sip a local brew at the spacious bar
      while taking in the best runway views at Sea-Tac.
    </p>
    <div slot="cta" style="text-align: center;">
      <a href="https://www.alaskaair.com/">More info</a>
    </div>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card
  cssClass="banner"
  imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/lounge.png"
  imgAltText="Lounge amenities">
  <auro-header slot="title" style="text-align: center;" level="2" display="600">
    Relax before the runway
  </auro-header>
  <p slot="description">
    Experience our unparalleled airport lounge service in a quiet space to relax and recharge, or get a little work
    done between flights. Enhanced cleaning procedures and limited capacity offer additional peace of mind. Our
    newest Alaska Lounge location is now open in Sea-Tac's North Satellite terminal. At over 15,800 square feet,
    our flagship lounge has it all. Prepare to relax by the grand fireplace or sip a local brew at the spacious bar
    while taking in the best runway views at Sea-Tac.
  </p>
  <div slot="cta" style="text-align: center;">
    <a href="https://www.alaskaair.com/">More info</a>
  </div>
</auro-card>
```

</auro-accordion>

## auro-card as Hero Banner

<div class="exampleWrapper">
  <auro-card
    cssClass="banner hero"
    imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/yellow.png"
    imgAltText="Airport gates">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      <b>one</b>world Explorer
    </auro-header>
    <p slot="description">
      Welcome to <b>one</b>world®, an alliance of the world’s leading airlines committed to providing the highest level
      of service and convenience across more than 1,000 destinations worldwide.
    </p>
    <div slot="cta" style="text-align: center;">
      <a href="https://www.alaskaair.com/">About <b>one</b>world</a>
    </div>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card
  cssClass="banner hero"
  imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/yellow.png"
  imgAltText="Airport gates">
  <auro-header slot="title" style="text-align: center;" level="2" display="600">
    <b>one</b>world Explorer
  </auro-header>
  <p slot="description">
    Welcome to <b>one</b>world®, an alliance of the world’s leading airlines committed to providing the highest level
    of service and convenience across more than 1,000 destinations worldwide.
  </p>
  <div slot="cta" style="text-align: center;">
    <a href="https://www.alaskaair.com/">About <b>one</b>world</a>
  </div>
</auro-card>
```

</auro-accordion>

## auro-card with Background Color

<div class="exampleWrapper">
  <auro-card
    cssClass="banner"
    imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/ocean.png"
    imgAltText="A cellpone overlooking a tropical beach"
    cardBgColor="var(--auro-color-background-darker)">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      Alaska Mileageplan
    </auro-header>
    <p slot="description">
      Mileage Plan is the Alaska Airlines loyalty program. Travel with us, and with our global airline partners to over
      800+ destinations around the world.
    </p>
    <div slot="cta" style="text-align: center;">
      <a href="https://www.alaskaair.com/">Learn More</a>
    </div>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card
  cssClass="banner"
  imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/ocean.png"
  imgAltText="A cellpone overlooking a tropical beach"
  cardBgColor="var(--auro-color-background-darker)">
  <auro-header slot="title" style="text-align: center;" level="2" display="600">
    Alaska Mileageplan
  </auro-header>
  <p slot="description">
    Mileage Plan is the Alaska Airlines loyalty program. Travel with us, and with our global airline partners to over
    800+ destinations around the world.
  </p>
  <div slot="cta" style="text-align: center;">
    <a href="https://www.alaskaair.com/">Learn More</a>
  </div>
</auro-card>
```

</auro-accordion>


## auro-card as a banner
<div>
  <auro-card
    cssClass="my-class banner"
    imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    imgAltText="This is an image of a logo">
      <auro-header slot="title" level="2" display="600"> <b>one</b>world Explorer</auro-header>
      <p slot="subtitle">A place for explorers</p>
      <auro-hyperlink href="#" secondary slot="cta" target="_blank">More info</auro-hyperlink>
      <p slot="description">
        <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent. And, for every dot you connect, you earn more miles and points to spend
        across the oneworld Alliance.
      </p>
      <p slot="disclaimer">* Void where prohibited.</p>
  </auro-card>
</div>
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<div>
  <auro-card cssClass="my-class" imageSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png" imageAlt="This is an image of a logo">
    <auro-header slot="title" level="2" display="600"> <b>one</b>world Explorer </auro-header>
    <p slot="subtitle">A place for explorers</p>
    <auro-hyperlink href="#" secondary slot="cta" target="_blank">More info</auro-hyperlink>
    <p slot="description">
      <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent. And, for every dot you connect, you earn more miles and points to spend
      across the oneworld Alliance.
    </p>
    <p slot="disclaimer">* Void where prohibited.</p>
  </auro-card>
</div>


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
