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
    padding="md"
    titleTop>
    <auro-header slot="title" style="text-align: center;" level="2" display="600">
      <b>one</b>world Explorer
    </auro-header>
    <p slot="description">
      <b>one</b>world Explorer fare makes it easy to travel from city to city, and continent to continent.
      And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance.
    </p>
    <auro-hyperlink href="#" secondary slot="cta" target="_blank" style="text-align: center;">More info</auro-hyperlink>
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
    imgRight
    imgSrc="https://sitecore-qa-cd-westus2.azurewebsites.net/-/media/Images/pages/examples/lounge.png"
    imgAltText="Lounge amenities"
    padding="0 40px 0 0 ">
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
    padding="20px 80px 20px 80px">
    <svg slot="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.08 76"><defs><style>svg {width:200px; height: auto}.cls-1{fill:#fff;}</style></defs><title>ASMPLogo </title><g id="Layer_2" data-name="Layer 2"><g id="logo"><g id="Alaska"><path class="cls-1" d="M70.61,1.71,54.17,29.3a20.06,20.06,0,0,0-2.9,8.47H44.83c.44-3.49,1.8-6.81,4.63-11.57L61,6.92c2.29-3.82,4.58-5.21,8.74-5.21Z"/><path class="cls-1" d="M69.34,30.67c-1.2,1.11-3.53,2.79-5.49,2.85-1.35-.06-1.41-1.32-.5-3.07C66.82,23.8,70.47,20.28,75,20.29h.82Zm6.08-14.11c-8.34,0-13.46,4.85-18,15.48-1.13,2.67-1.78,6,2.07,5.93A17.6,17.6,0,0,0,68,35a9.3,9.3,0,0,0-.24,2.81h5.85a22,22,0,0,1,3-8.57L83.88,17A78.8,78.8,0,0,0,75.42,16.56Z"/><path class="cls-1" d="M129.46,30.67c-1.2,1.11-3.53,2.79-5.49,2.85-1.36-.06-1.41-1.32-.5-3.07,3.47-6.65,7.12-10.17,11.62-10.16h.82Zm6.08-14.11c-8.34,0-13.46,4.85-18,15.48-1.13,2.67-1.78,6,2.07,5.93a17.63,17.63,0,0,0,8.45-3,9.3,9.3,0,0,0-.24,2.81h5.85a22,22,0,0,1,3-8.57L144,17A78.8,78.8,0,0,0,135.54,16.56Z"/><path class="cls-1" d="M116.53,43.65h-1.91a5.53,5.53,0,0,1-5.33-4l-2.9-11L101,37.77H94.72l17.4-29.44c2.24-3.82,4.58-5.21,8.73-5.21h.64L109.94,22.63l8.66-6h7L111,26.72h0Z"/><path class="cls-1" d="M59.13,0c-5.87,0-8.9,1.55-14.66,5.71L25,19.75H12.53c-3.61,0-6.5.15-8.77,2.29L.53,25l18.12-.7L0,37.77H8.06L27.14,24c3.7-.14,6.27-.24,6.29-.23,4.45-.12,6.91-4,6.91-4H33L48.44,8.63,37,27.19c-2.45,4.27-3.63,7.31-4,10.58h6.62a20.09,20.09,0,0,1,2.91-8.47l15.6-26c1.08-1.79,2-3.25,2-3.25Z"/><path class="cls-1" d="M90.19,22.53c-.08.56.14.89,1.26,1.62l1.79,1.17a5,5,0,0,1,2.49,4.75C95.08,34.44,91.87,38,85.05,38a38.83,38.83,0,0,1-7.89-.69l2.65-4.46a29.83,29.83,0,0,0,5.72.64c2.57,0,3.59-1.15,3.73-2.1.09-.56-.18-1.21-1.4-2.05l-1.42-1c-2.27-1.62-2.86-2.9-2.57-4.91.57-3.87,5-6.82,11.25-6.82a59.78,59.78,0,0,1,6.4.36L99,21.14A56.25,56.25,0,0,0,93.27,21C91.48,21,90.32,21.63,90.19,22.53Z"/></g><path class="cls-1" d="M140.43,33.92a2.07,2.07,0,1,1-2,2.07A2.07,2.07,0,0,1,140.43,33.92Zm0,3.73a1.66,1.66,0,1,0-1.6-1.66A1.61,1.61,0,0,0,140.43,37.65Zm-.25-.56h-.43V34.85h.78a.7.7,0,0,1,.27,1.37l.5.87h-.48l-.48-.83h-.16Zm.29-1.2c.25,0,.39-.13.39-.33s-.14-.35-.39-.35h-.29v.68Z"/><path class="cls-1" d="M40.37,69.28V51.21L32.44,69.28H29.5L21.64,51.21V69.28H18.47V46.07h4.35L31,65l8.24-18.89h4.29V69.28Z"/><path class="cls-1" d="M49.86,45.35a2.21,2.21,0,1,1-2.19,2.23A2.2,2.2,0,0,1,49.86,45.35ZM48.35,69.28V53.54h3V69.28Z"/><path class="cls-1" d="M56.2,69.28V45.58h3.08v23.7Z"/><path class="cls-1" d="M77.33,64.8a7.13,7.13,0,0,1-7.07,5c-4.22,0-7.92-3.07-7.92-8.41,0-4.94,3.57-8.31,7.53-8.31,4.85,0,7.56,3.33,7.56,8.25a7.58,7.58,0,0,1-.06,1H65.52a4.67,4.67,0,0,0,4.74,4.78,4.29,4.29,0,0,0,4.42-3.18Zm-3.11-5a4,4,0,0,0-4.32-4,4.24,4.24,0,0,0-4.29,4Z"/><path class="cls-1" d="M85.2,60.28l4.26-.62c1-.13,1.21-.62,1.21-1.18,0-1.54-1-2.82-3.4-2.82a3.35,3.35,0,0,0-3.57,3.18l-3-.69c.33-3,3-5.1,6.45-5.1,4.72,0,6.55,2.68,6.55,5.76V66.7a14.15,14.15,0,0,0,.2,2.58h-3a12.09,12.09,0,0,1-.16-2.12,5.75,5.75,0,0,1-5.07,2.61c-3.21,0-5.28-2.22-5.28-4.71C80.42,62.25,82.49,60.67,85.2,60.28Zm5.47,2.26v-.72l-4.81.72a2.36,2.36,0,0,0-2.29,2.36,2.38,2.38,0,0,0,2.55,2.29C88.64,67.19,90.67,66,90.67,62.54Z"/><path class="cls-1" d="M99.77,69.45a4.19,4.19,0,0,0,4.29,3.86c3.31,0,4.81-1.7,4.81-5.11V65.94a5.24,5.24,0,0,1-4.81,2.59c-4.19,0-7.23-3.18-7.23-7.63,0-4.25,2.91-7.66,7.23-7.66,2.43,0,4.06.92,4.85,2.49V53.54h3V68.11c0,4-2,7.89-7.89,7.89-3.93,0-6.87-2.49-7.27-5.87ZM109,60.9c0-3-1.84-5-4.49-5s-4.55,2-4.55,5,1.77,5,4.55,5S109,64,109,60.9Z"/><path class="cls-1" d="M130.33,64.8a7.14,7.14,0,0,1-7.07,5c-4.23,0-7.92-3.07-7.92-8.41,0-4.94,3.56-8.31,7.53-8.31,4.84,0,7.56,3.33,7.56,8.25a5.91,5.91,0,0,1-.07,1H118.51a4.69,4.69,0,0,0,4.75,4.78,4.29,4.29,0,0,0,4.42-3.18Zm-3.11-5a4,4,0,0,0-4.32-4,4.24,4.24,0,0,0-4.29,4Z"/><path class="cls-1" d="M141.8,59.79v9.49h-3.21V46.07H147c4.29,0,7.17,3,7.17,6.88s-2.88,6.84-7.17,6.84Zm4.65-2.88c2.78,0,4.49-1.54,4.49-3.93s-1.71-4-4.49-4H141.8v8Z"/><path class="cls-1" d="M157.08,69.28V45.58h3.08v23.7Z"/><path class="cls-1" d="M168.77,60.28l4.25-.62c.95-.13,1.21-.62,1.21-1.18,0-1.54-1-2.82-3.4-2.82a3.35,3.35,0,0,0-3.57,3.18l-2.95-.69c.33-3,3.05-5.1,6.45-5.1,4.72,0,6.55,2.68,6.55,5.76V66.7a14.15,14.15,0,0,0,.2,2.58h-3a12.09,12.09,0,0,1-.16-2.12,5.75,5.75,0,0,1-5.07,2.61c-3.21,0-5.27-2.22-5.27-4.71C164,62.25,166.05,60.67,168.77,60.28Zm5.46,2.26v-.72l-4.81.72a2.36,2.36,0,0,0-2.29,2.36,2.38,2.38,0,0,0,2.55,2.29C172.2,67.19,174.23,66,174.23,62.54Z"/><path class="cls-1" d="M184.67,69.28H181.6V53.54h3v2.25a5.38,5.38,0,0,1,4.84-2.71c3.77,0,5.63,2.71,5.63,6.22v10H192V59.82c0-2.19-.92-4-3.67-4-2.42,0-3.67,1.93-3.67,4.32Z"/></g></g></svg>
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
  justify-center
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
