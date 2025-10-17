# auro-card

The `<auro-card>` element provides users a flexible way to convey a summary of information.


### Properties & Attributes

| Properties | Attributes | Type | Default | Description  |
| --- | --- | --- | --- | --- |
variant | variant | string |  | Sets the variant of the card. Options `inset-content`, `inset-container`, `inset-stretch`.
href | href | string |  | Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot.
rel | rel | string |  | Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel).
relative | relative | boolean |  | If true, the auto URL re-write feature will be disabled. [see here for hyperlink relative](https://auro.alaskaair.com/components/auro/hyperlink/api#relative)
role | role | string |  | Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role).
target | target | string |  | Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target).
 | border | Boolean |  | Adds desired UI border to the `auro-card` element.
 | center | Boolean |  | Centers content within the scope of the `auro-card`.


### Methods

| Name | Parameters | Return | Description |
| --- | --- | --- | --- |
register | `name` (string) - The name of element that you want to register to. |  | This will register this element with the browser.


### Slots

| Name | Description |
| --- | --- |
image | Content slot for image content.
header | Content slot for string text header content.
description | Content slot for string text description content.
cta | Content slot for call-to-action content.


### CSS Shadow Parts

| Name | Description |
| --- | --- |
content | Apply styles to the outer string text container.
link | Apply styles to the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#link) element.
imageWrapper | Apply styles to the outer image slot container.
image | Apply styles to the named image slot container.
header | Apply styles to the named header slot container.
description | Apply styles to the named description slot container.
cta | Apply styles to the named cta slot container.


    