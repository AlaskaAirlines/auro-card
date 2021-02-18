# auro-card

auro-card provides users a flexible way to convey a summary of information. The primary elements of a card include an
image, and details. The details are broken down into title, description, cta, and others. A card should be used to
grab the attention of a user and direct them to another resource for further information. A card should not be used
as the primary source of information.

## Modifiers
Layout can be modified using the following collection of modifiers.  The modifiers can be added to the `cssClass`
property.

## auro-card as Single Tile

<div style="max-width: 400px" class="exampleWrapper">
  <auro-card
    imgSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    imgAltText="This is an image of a logo"
    padding="md">
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      <b>one</b>world Explorer
    </auro-header>
    <p slot="subtitle" style="text-align: center;">A place for explorers</p>
    <p slot="description">
      <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
      And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
    </p>
    <auro-hyperlink href="#" secondary slot="cta" target="_blank" style="text-align: center;">More info</auro-hyperlink>
    <p slot="disclaimer">
      * Void where prohibited.
    </p>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
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
    <auro-hyperlink href="#" secondary slot="cta" target="_blank" style="text-align: center;">More info</auro-hyperlink>
    <p slot="disclaimer">
      * Void where prohibited.
    </p>
  </auro-card>
</div>
```

</auro-accordion>

<hr />

## auro-card as Banner

<div class="exampleWrapper">
  <auro-card
    banner
    imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/lounge.png"
    imgAltText="Lounge amenities">
    <auro-header slot="title" level="2" display="700">
      Relax before the runway
    </auro-header>
    <p slot="description">
      Experience our unparalleled airport lounge service in a quiet space to relax and recharge, or get a little work
      done between flights. Enhanced cleaning procedures and limited capacity offer additional peace of mind. Our
      newest Alaska Lounge location is now open in Sea-Tac's North Satellite terminal. At over 15,800 square feet,
      our flagship lounge has it all. Prepare to relax by the grand fireplace or sip a local brew at the spacious bar
      while taking in the best runway views at Sea-Tac.
    </p>
    <auro-hyperlink href="#" secondary slot="cta" target="_blank">More info</auro-hyperlink>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card
  banner
  imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/lounge.png"
  imgAltText="Lounge amenities">
  <auro-header slot="title" level="2" display="700">
    Relax before the runway
  </auro-header>
  <p slot="description">
    Experience our unparalleled airport lounge service in a quiet space to relax and recharge, or get a little work
    done between flights. Enhanced cleaning procedures and limited capacity offer additional peace of mind. Our
    newest Alaska Lounge location is now open in Sea-Tac's North Satellite terminal. At over 15,800 square feet,
    our flagship lounge has it all. Prepare to relax by the grand fireplace or sip a local brew at the spacious bar
    while taking in the best runway views at Sea-Tac.
  </p>
  <auro-hyperlink href="#" secondary slot="cta" target="_blank">More info</auro-hyperlink>
</auro-card>
```

</auro-accordion>

<hr />

## auro-card as Hero Banner

<div class="exampleWrapper">
  <auro-card
    banner
    hero
    imgRight
    imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/yellow.png"
    imgAltText="Airport gates">
    <auro-header slot="title" margin="bottom" size="xxxs" color="var(--auro-color-brand-midnight-400)" level="6" display="300">
      <b>one</b>world Alliance
    </auro-header>
    <auro-header slot="subtitle" margin="top" size="none" color="var(--auro-color-brand-midnight-400)" level="2" display="600">
      <b>14</b> global airlines.<br />
      One bright aliance.
    </auro-header>
    <p slot="description">
      Welcome to <b>one</b>world®, an alliance of the world’s leading airlines committed to providing the highest level
      of service and convenience across more than 1,000 destinations worldwide.
    </p>
    <auro-hyperlink href="#" secondary cta slot="cta" target="_blank">About <b>one</b>world</auro-hyperlink>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card
  banner
  hero
  imgRight
  imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/yellow.png"
  imgAltText="Airport gates">
  <auro-header slot="title" margin="bottom" size="xxxs" color="var(--auro-color-brand-midnight-400)" level="6" display="300">
    <b>one</b>world Alliance
  </auro-header>
  <auro-header slot="subtitle" margin="top" size="none" color="var(--auro-color-brand-midnight-400)" level="2" display="600">
    <b>14</b> global airlines.<br />
    One bright aliance.
  </auro-header>
  <p slot="description">
    Welcome to <b>one</b>world®, an alliance of the world’s leading airlines committed to providing the highest level
    of service and convenience across more than 1,000 destinations worldwide.
  </p>
  <auro-hyperlink href="#" secondary cta slot="cta" target="_blank">About <b>one</b>world</auro-hyperlink>
</auro-card>
```

</auro-accordion>

<hr />

## auro-card with Background Color

<div class="exampleWrapper">
  <auro-card
    banner
    imgRight
    coverImgContainer
    imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/ocean.png"
    imgAltText="A cellpone overlooking a tropical beach"
    cardBgColor="var(--auro-color-background-darker)"
    padding="20px 15px 20px 15px">
    <auro-header slot="title" color="var(--auro-color-text-primary-on-dark)" level="2" display="600">
      Alaska Mileageplan
    </auro-header>
    <p slot="description" style="color:var(--auro-color-text-primary-on-dark)">
      Mileage Plan is the Alaska Airlines loyalty program. Travel with us, and with our global airline partners to over
      800+ destinations around the world.
    </p>
    <auro-hyperlink href="#" cta onDark primary slot="cta" target="_blank">More info</auro-hyperlink>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card
  banner
  imgRight
  coverImgContainer
  imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/ocean.png"
  imgAltText="A cellpone overlooking a tropical beach"
  cardBgColor="var(--auro-color-background-darker)">
  <auro-header slot="title" color="var(--auro-color-text-primary-on-dark)" level="2" display="600">
    Alaska Mileageplan
  </auro-header>
  <p slot="description" style="color:var(--auro-color-text-primary-on-dark)">
    Mileage Plan is the Alaska Airlines loyalty program. Travel with us, and with our global airline partners to over
    800+ destinations around the world.
  </p>
  <auro-hyperlink href="#" cta onDark primary slot="cta" target="_blank">More info</auro-hyperlink>
</auro-card>
```

</auro-accordion>

<hr />

## auro-card with Background Image

<div class="exampleWrapper">
  <auro-card
    banner
    imgLeft
    cardBgImgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/vacations/600x180_car_rental.jpg"
    cardBgImgAlt="Father and son using a rented car in the forest">
    <auro-header slot="title" color="var(--auro-color-text-primary-on-dark)" level="2" display="600">
      Car Rentals
    </auro-header>
    <p slot="description" style="color:var(--auro-color-text-primary-on-dark)">
      We’ll explain any additional costs before you book your car rental. More details on what’s included?
      Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink href="#" cta onDark primary slot="cta" target="_blank">More info</auro-hyperlink>
  </auro-card>
</div>
  
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card
  banner
  imgLeft
  cardBgImgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/vacations/600x180_car_rental.jpg"
  cardBgImgAlt="Father and son using a rented car in the forest">
  <auro-header slot="title" color="var(--auro-color-text-primary-on-dark)" level="2" display="600">
    Car Rentals
  </auro-header>
  <p slot="description" style="color:var(--auro-color-text-primary-on-dark)">
    We’ll explain any additional costs before you book your car rental. More details on what’s included?
    Just check the Ts&Cs of any car.
  </p>
  <auro-hyperlink href="#" cta onDark primary slot="cta" target="_blank">More info</auro-hyperlink>
</auro-card>
```

</auro-accordion>
