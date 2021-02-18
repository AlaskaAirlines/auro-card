# auro-card

auro-card provides users a flexible way to convey a summary of information. The primary elements of a card include an
image, and details. The details are broken down into title, description, cta, and others. A card should be used to
grab the attention of a user and direct them to another resource for further information.  A card should not be used
as the primary source of information.

## Properties

| Property            | Attribute           | Type      | Default                                       | Description                                      |
|---------------------|---------------------|-----------|-----------------------------------------------|--------------------------------------------------|
| `banner`            | `banner`            | `Boolean` | false                                         | Indicates whether to force the card into "banner" mode (horizontal) at all breakpoints. |
| `bgImgClass`        | `bgImgClass`        | `String`  | "card-bg-image-cover card-bg-imageHeight-400" | A space-separates list of class names to be applied to the element with a<br />background image.  Only relevant when isBackgroundImage is true. |
| `card`              | `card`              | `Boolean` | false                                         | Indicates whether to force the card into "card" mode (vertical) at all breakpoints. |
| `cardBgColor`       | `cardBgColor`       | `String`  | "var(--auro-color-background-lightest)"       | Indicates a background color that spans the breadth of the component. |
| `cardBgImgAlt`      | `cardBgImgAlt`      | `String`  |                                               | If set, will serve as alt text for a full component background image.  Usage of this<br />property is only advised if the corresponding background image is considered relevant to the semantics of the page.<br />That is, if the image is not merely decorative. |
| `cardBgImgSrc`      | `cardBgImgSrc`      | `String`  |                                               | A background image that spans the breadth of the component. |
| `cardDetailsStyles` |                     | `object`  | {}                                            |                                                  |
| `coverImgContainer` | `coverImgContainer` | `Boolean` | false                                         | Indicates if the primary image should completely cover the image panel at all<br />times. This is accomplished by setting the primary image as a background image. |
| `cssClass`          | `cssClass`          | `String`  |                                               | Applies designated CSS class to DOM element.     |
| `hero`              | `hero`              | `Boolean` | false                                         | Indicates whether to apply "hero" styling to the card or banner. |
| `imgAltText`        | `imgAltText`        | `String`  |                                               | Alt text for the given image.  If background image, this text is used as aria-label. |
| `imgLeft`           | `imgLeft`           | `Boolean` | false                                         | Indicates whether the image panel prefers the left side when applicable. |
| `imgRight`          | `imgRight`          | `Boolean` | false                                         | Indicates whether the image panel prefers the right side when applicable. |
| `imgSrc`            | `imgSrc`            | `String`  |                                               | A url (relative or absolute) for card image.     |
| `justify`           | `justify`           | `String`  | "center"                                      | Indicates the text alignment for the card details section. Acceptable values are 'left',<br />'right', and 'center'. If any other value is provided, it will be defaulted to 'center'. |
| `miniBanner`        | `miniBanner`        | `Boolean` | false                                         | Indicates whether to force the card into "mini banner" mode at all breakpoints. |
| `padding`           | `padding`           | `String`  | "none"                                        | Indicates padding around the details section of the card. This can be one of the following<br />tokens: 'sm', 'md', or 'lg'.  It can also be a standard CSS 4-tuple of spacing, e.g. "5px 10px 2px 10px", and<br />supports CSS variable, e.g. "var(--t-padding) var(--r-padding) var(--b-padding) 20px" |
| `titleTop`          | `titleTop`          | `Boolean` | false                                         | Indicates whether to position the title above the primary image when applicable. |

## Methods

| Method                 | Type       |
|------------------------|------------|
| `setCardBgImg`         | `(): void` |
| `setCardDetailsStyles` | `(): void` |
| `setJustify`           | `(): void` |
| `setModifierClasses`   | `(): void` |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
| `cta`         | The call to action for this card.                |
| `description` | The main body of text on this card.              |
| `disclaimer`  | Any disclaimer text after the main body of text. |
| `image`       | Use to override the image with your own image markup format. |
| `subtitle`    | A subtitle, if needed.                           |
| `title`       | The card heading.                                |
