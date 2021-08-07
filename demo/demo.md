# Card

The `<auro-card>` element provides users a flexible way to convey a summary of information. The primary elements of a card include an image, and details.

The details are broken down into `title`, `description`, `cta`, and `disclaimer`.

## Component use cases

Use the `<auro-card>` element to:

* grab the attention of a user
* direct your user to another resource for further information

## Do not...

Use `<auro-card>` as the primary source of information.

## Default element

The default `<auro-card>` element features a single configuration using the `title`, `image`, `description`, `action` and `disclaimer` slots for structured content placement.

The card has a maximum width of `19rem`. The element will remain centered within the scope of a parent element.

Notice the use of the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink) element and the `action` slot. Given this example, all the [properties](https://auro.alaskaair.com/components/auro/hyperlink/api) of the Hyperlink element are directly applicable.

<div class="exampleWrapper">
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=0"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card>
  <span slot="title">
    Pri dicat graece abhorreant
  </span>
  <img
    slot="blockImage"
    src="https://picsum.photos/304?random=0"
    alt="Random insert 0"/>
  <p slot="description">
    Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
  </p>
  <auro-hyperlink
    nav
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
  <p slot="disclaimer">
    * Errem tempor eligendi cu eos
  </p>
</auro-card>
```

</auro-accordion>

## Align left

For card content to `align-left` within the context of the custom element, use the `alignLeft` property.

<div class="exampleWrapper">
  <auro-card alignLeft>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=1"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<auro-card alignLeft>
  <span slot="title">
    Pri dicat graece abhorreant
  </span>
  <img
    slot="blockImage"
    src="https://picsum.photos/304?random=1"
    alt="Random insert 0"/>
  <p slot="description">
    Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
  </p>
  <auro-hyperlink
    nav
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
  <p slot="disclaimer">
    * Errem tempor eligendi cu eos
  </p>
</auro-card>
```

</auro-accordion>

## Multi-option layout

When placing multiple `<auro-card>` elements within a single parent container, the following example illustrates using `flexbox` for layout support.

<style>
  @media screen and (min-width: 1024px) {
    .flexLayout {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<div class="exampleWrapper flexLayout">
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>

  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=4"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>

  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=5"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<style>
  @media screen and (min-width: 1024px) {
    .flexLayout {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<div class="flexLayout">
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>

  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=4"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>

  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=5"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
</div>
```

</auro-accordion>


## Lazy loading

With the `lazyLoad` attribute enabled in the `<auro-card>`, the card image will not load until the user's viewport gets close enough, thus improving performance. To ensure lazy loading works on all browsers, use the `data-src` property instead of the `src` property when defining the `<image>`.

<style>
  @media screen and (min-width: 1024px) {
    .flexLayout {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<div class="exampleWrapper">
  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=0"
        alt="Random insert 0"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=1"
        alt="Random insert 1"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=2"
        alt="Random insert 2"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=3"
        alt="Random insert 3"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=4"
        alt="Random insert 4"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=5"
        alt="Random insert 5"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=6"
        alt="Random insert 6"
      />
  </auro-card>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<style>
  @media screen and (min-width: 1024px) {
    .flexLayout {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<div class="exampleWrapper">
  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=0"
        alt="Random insert 0"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=1"
        alt="Random insert 1"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=2"
        alt="Random insert 2"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=3"
        alt="Random insert 3"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=4"
        alt="Random insert 4"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=5"
        alt="Random insert 5"
      />
  </auro-card>

  <auro-card lazyLoad>
    <img
        slot="image"
        data-src="https://picsum.photos/304?random=6"
        alt="Random insert 6"
      />
  </auro-card>
</div>
```
</auro-accordion>