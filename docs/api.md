# auro-card

auro-card provides users a way to ...

## Attributes

| Attribute              | Type      | Description                                      |
|------------------------|-----------|--------------------------------------------------|
| `backgroundImageClass` | `String`  | A space-separates list of class names to be applied to the element with a<br />background image.  Only relevant when isBackgroundImage is true. |
| `imageAltText`         | `String`  | Alt text for the given image.  If background image, this text is used as aria-label. |
| `imageSrc`             | `String`  | A url (relative or absolute) for card image.     |
| `isBackgroundImage`    | `Boolean` | Indicates whether the given image should be set as a background image. |

## Properties

| Property          | Attribute         | Type      | Default                                 | Description                                  |
|-------------------|-------------------|-----------|-----------------------------------------|----------------------------------------------|
| `bgImgClass`      | `bgImgClass`      | `string`  | "bg-image"                              |                                              |
| `cardBgAlt`       | `cardBgAlt`       | `string`  |                                         |                                              |
| `cardBgColor`     | `cardBgColor`     | `string`  | "var(--auro-color-background-lightest)" |                                              |
| `cardBgImg`       | `cardBgImg`       | `string`  |                                         |                                              |
| `cssClass`        | `cssClass`        | `String`  |                                         | Applies designated CSS class to DOM element. |
| `imgAltText`      | `imgAltText`      | `string`  |                                         |                                              |
| `imgSrc`          | `imgSrc`          | `string`  |                                         |                                              |
| `isBgImg`         | `isBgImg`         | `boolean` | false                                   |                                              |
| `isTitleAboveImg` | `isTitleAboveImg` | `boolean` | false                                   |                                              |
| `padding`         | `padding`         | `string`  | "var(--auro-size-md)"                   |                                              |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
| `cta`         | The call to action for this card.                |
| `description` | The main body of text on this card.              |
| `disclaimer`  | Any disclaimer text after the main body of text. |
| `image`       | Use to override the image with your own image markup format. |
| `subtitle`    | A subtitle, if needed.                           |
| `title`       | The card heading.                                |
