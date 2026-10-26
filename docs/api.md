# auro-card

A card that groups an image, a header, a description, and a call to action into one
summary of information, such as a destination, offer, or article teaser.

**Key capabilities**
- **Content areas**: four named slots (`image`, `header`, `description`, `cta`) that you
  fill with your own content.
- **Clickable card**: setting `href` makes the whole card a single link, built on
  `<auro-hyperlink>`, including its safe handling of URLs.
- **Spacing options**: set `variant` to `inset-content`, `inset-container`, or `inset-stretch`
  to choose how padding is applied around the image and text.
- **Border and alignment**: `border` adds an outline with rounded corners, and `center`
  centers the text.

**Example**
```html
<auro-card href="/destinations/hawaii" border>
  <img slot="image" src="hawaii.jpg" alt="A beach in Hawaii" />
  <span slot="header">Hawaii</span>
  <span slot="description">Fly nonstop from the West Coast.</span>
</auro-card>
```

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                    | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ---------- | --------- | ------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| border     | border     |           | boolean                                                 |         | Adds a thin border and rounded corners around the card.                                                                                                                                                                                                                                                                                                                                                                                                  |
| center     | center     |           | boolean                                                 |         | Centers the text within the card.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| href       | href       |           | string                                                  |         | Makes the whole card a single link to an address such as `/destinations/hawaii` (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#href) `href` attribute), including its safe handling of URLs. Because the card's content is rendered inside the link, avoid placing other links or buttons in the card's slots.                                                                                                         |
| rel        | rel        |           | string                                                  |         | Sets how the linked page relates to this one, such as `noopener` or `nofollow` (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#rel) `rel` attribute).                                                                                                                                                                                                                                                                   |
| relative   | relative   |           | boolean                                                 |         | Passes a `relative` attribute to the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api). The auro-hyperlink version this card uses does not currently act on it, so it has no visible effect.                                                                                                                                                                                                                                  |
| role       | role       |           | string                                                  |         | Sets the card's accessibility role. Without `href`, the role is `article`. With `href`, the value is passed to the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#role), and no role is set when it is empty.                                                                                                                                                                                                               |
| target     | target     |           | string                                                  |         | Sets where the link opens, such as `_blank` for a new tab or `_self` for the current tab (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#target) `target` attribute).                                                                                                                                                                                                                                                   |
|            | variant    |           | `inset-content` \| `inset-container` \| `inset-stretch` |         | Sets how padding is applied. Use `inset-content` to pad the text and leave the image edge to edge, `inset-container` to pad the whole card, image included, or `inset-stretch` to let the image and text reach the left and right edges, with space above the image and below the text. Without a value, the card adds no extra left, right, or top padding. When `href` is set, the text always gets left and right padding, even with `inset-stretch`. |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                               |
| -------- | ------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-card` on the same page. |

### Slots

| Name        | Description                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cta         | A call to action, such as a button or link, shown below the description. When the card is taller than its content, such as in a row of cards, it moves to the bottom so calls to action line up. |
| description | Supporting text shown below the header.                                                                                                                                                          |
| header      | The card's heading text.                                                                                                                                                                         |
| image       | An image for the top of the card. An `<img>` fills the full width of the card.                                                                                                                   |

### CSS Shadow Parts

| Name         | Description                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| content      | The container that holds the header, description, and cta slots.                                                                                  |
| cta          | The `<slot>` element that holds the call to action.                                                                                               |
| description  | The `<slot>` element that holds the description content.                                                                                          |
| header       | The `<slot>` element that holds the header content.                                                                                               |
| image        | The `<slot>` element that holds the image content.                                                                                                |
| imageWrapper | The container around the image slot.                                                                                                              |
| link         | The [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#link) that wraps the whole card. Only present when `href` is set. |

### CSS Custom Properties

| Name                            | Description                                                                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| --ds-auro-card-border-color     | Color of the card's border, which shows when `border` is set. A card with `href` also uses it for the outline around the card.            |
| --ds-auro-card-background-color | Color behind the card's content. Cards with `border` or `href` use the theme's surface color by default, and other cards are transparent. |