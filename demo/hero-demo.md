# Card hero

The `auro-card` element provides users a flexible way to convey a summary of information. The primary elements of a card include an image, and details.

The details are broken down into `title`, `description`, `cta`, and `disclaimer`.

## Component use cases

Use the `auro-card` element to:

* grab the attention of a user
* direct your user to another resource for further information

## Do not...

Use `auro-card` as the primary source of information.

## Default element

The default `auro-card` element features a single configuration using the `title`, `image`, `description`, `action` and `disclaimer` slots for structured content placement.

The card has a maximum width of `19rem`. The element will remain centered within the scope of a parent element.

Notice the use of the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink) element and the `action` slot. Given this example, all the [properties](https://auro.alaskaair.com/components/auro/hyperlink/api) of the Hyperlink element are directly applicable.

<div class="exampleWrapper">
  <auro-card-hero>
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
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card-hero>
</div>

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
<div class="exampleWrapper">
  <auro-card-hero>
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
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card-hero>
</div>
```

</auro-accordion>
