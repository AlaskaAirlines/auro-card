# auro-card

auro-card provides users a flexible way to convey a summary of information. The primary elements of a card include an
image, and details. The details are broken down into title, description, cta, and others. A card should be used to
grab the attention of a user and direct them to another resource for further information. A card should not be used
as the primary source of information.

## Attributes

| Attribute              | Type      | Description                                                                                                                                    |
| ---------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `backgroundImageClass` | `String`  | A space-separates list of class names to be applied to the element with a<br />background image. Only relevant when isBackgroundImage is true. |
| `imageAltText`         | `String`  | Alt text for the given image. If background image, this text is used as aria-label.                                                            |
| `imageSrc`             | `String`  | A url (relative or absolute) for card image.                                                                                                   |
| `isBackgroundImage`    | `Boolean` | Indicates whether the given image should be set as a background image.                                                                         |

## Properties

| Property          | Attribute         | Type      | Default                                 | Description                                                                                                                                                                                                                                                                                             |
| ----------------- | ----------------- | --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bgImgClass`      | `bgImgClass`      | `String`  | "bg-image"                              | A space-separates list of class names to be applied to the element with a<br />background image. Only relevant when isBackgroundImage is true.                                                                                                                                                          |
| `cardBgColor`     | `cardBgColor`     | `String`  | "var(--auro-color-background-lightest)" | Indicates a background color that spans the breadth of the component.                                                                                                                                                                                                                                   |
| `cardBgImgAlt`    | `cardBgImgAlt`    | `String`  |                                         | If set, will serve as alt text for a full component background image. Usage of this<br />property is only advised if the corresponding background image is considered relevant to the semantics of the page.<br />That is, if the image is not merely decorative.                                       |
| `cardBgImgSrc`    | `cardBgImgSrc`    | `String`  |                                         | A background image that spans the breadth of the component.                                                                                                                                                                                                                                             |
| `cssClass`        | `cssClass`        | `String`  |                                         | Applies designated CSS class to DOM element.                                                                                                                                                                                                                                                            |
| `imgAltText`      | `imgAltText`      | `String`  |                                         | Alt text for the given image. If background image, this text is used as aria-label.                                                                                                                                                                                                                     |
| `imgSrc`          | `imgSrc`          | `String`  |                                         | A url (relative or absolute) for card image.                                                                                                                                                                                                                                                            |
| `isBgImg`         | `isBgImg`         | `Boolean` | false                                   | Indicates whether the given image should be set as a background image.                                                                                                                                                                                                                                  |
| `isTitleAboveImg` | `isTitleAboveImg` | `Boolean` | false                                   | Indicates whether the title prefers to appear above the image. This property does<br />not affect the position of the title when in a banner layout.                                                                                                                                                    |
| `padding`         | `padding`         | `String`  | "var(--auro-size-md)"                   | Indicates padding around the details section of the card. This can be one of the following<br />tokens: 'sm', 'md', or 'lg'. It can also be a standard CSS 4-tuple of spacing, e.g. "5px 10px 2px 10px", and<br />supports CSS variable, e.g. "var(--t-padding) var(--r-padding) var(--b-padding) 20px" |

## Slots

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `cta`         | The call to action for this card.                            |
| `description` | The main body of text on this card.                          |
| `disclaimer`  | Any disclaimer text after the main body of text.             |
| `image`       | Use to override the image with your own image markup format. |
| `subtitle`    | A subtitle, if needed.                                       |
| `title`       | The card heading.                                            |
