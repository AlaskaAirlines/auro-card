# Card hero

The `auro-card-hero` element provides users a flexible way to convey a summary of information. The primary elements of a card include an image, and details.

The details are broken down into `title`, `description`, `cta`, and `disclaimer`.

## Component use cases

Use the `auro-card-hero` element to:

* grab the attention of a user
* direct your user to another resource for further information

## Do not...

Use `auro-card-hero` as the primary source of information.

## Default element

The default `auro-card-hero` element features a single configuration using the `background`, `image`, `description`, `action` and `disclaimer` slots for structured content placement.

Notice the use of the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink) element and the `action` slot in the following examples. All the [properties](https://auro.alaskaair.com/components/auro/hyperlink/api) of the Hyperlink element are directly applicable.

## Billboard

The `auro-card-hero` element with the `billboard` property features a single configuration using the `background`, `image`, `description`, `action` and `disclaimer` slots for structured content placement.

### Background image slot

The background image slot is configured to work with the HTML [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) element.

```html
<picture slot="background">
  <source srcset="https://picsum.photos/id/430/1024/600" media="(min-width: 736px)">
  <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
  <source srcset="https://picsum.photos/id/430/320/1200" media="(min-width: 320px)">
  <img src="https://picsum.photos/id/430/225/550" alt="" />
</picture>
```

This allows the editor the upmost in image flexibility for cropped images placed at different breakpoints. A slotted `img` element is the default image shown when less than the first defined breakpoint.

<div class="exampleWrapper">
  <auro-card-hero billboard>
    <picture slot="background">
      <source srcset="https://picsum.photos/id/430/1024/600" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/430/320/1200" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/430/225/550" alt="" />
    </picture>
    <img
      slot="image"
      src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
      alt="Random insert 0"/>
    <p slot="description">
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-card-hero>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card-hero billboard>
  <picture slot="background">
    <source srcset="https://picsum.photos/id/430/1024/600" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/430/320/1200" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/430/225/550" alt="" />
  </picture>
  <img
    slot="image"
    src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
    alt="Random insert 0"/>
  <p slot="description">
    We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
  </p>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-card-hero>
```
</auro-accordion>

## Slim / alignRight / onDark

The following example illustrates a series of additional API options available to the `auro-card-hero` element. In this example, this shows how a user can augment the `billboard` theme of the `auro-card-hero`. Also notice the use of the `title` slot versus the `image` slot in the previous example.

<div class="exampleWrapper">
  <auro-card-hero billboard slim alignRight onDark>
    <picture slot="background">
      <source srcset="https://picsum.photos/id/120/1024/600" media="(min-width: 736px)">
      <source srcset="https://picsum.photos/id/120/736/1400" media="(min-width: 375px)">
      <source srcset="https://picsum.photos/id/120/320/1200" media="(min-width: 320px)">
      <img src="https://picsum.photos/id/120/225/550" alt="" />
    </picture>
    <span slot="title">Car Rental</span>
    <p slot="description">
      We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
    </p>
    <auro-hyperlink
      cta
      secondary
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
  </auro-card-hero>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card-hero billboard slim alignRight onDark>
  <picture slot="background">
    <source srcset="https://picsum.photos/id/120/1024/600" media="(min-width: 736px)">
    <source srcset="https://picsum.photos/id/120/736/1400" media="(min-width: 375px)">
    <source srcset="https://picsum.photos/id/120/320/1200" media="(min-width: 320px)">
    <img src="https://picsum.photos/id/120/225/550" alt="" />
  </picture>
  <span slot="title">Car Rental</span>
  <p slot="description">
    We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
  </p>
  <auro-hyperlink
    cta
    secondary
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
</auro-card-hero>
```
</auro-accordion>
