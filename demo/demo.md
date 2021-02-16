# auro-card

TODO: Write description

## auro-card use cases

The `auro-card` element should be used in situations where users may:

* use case 1
* use case 2
* use case 3

<auro-card
    cssClass="my-class"
    imageSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    teaserText="oneworld Explorer fare makes it easy to travel from city to city, and continent to continent. And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance."
    linkTarget="https://www.alaskaair.com/">
  </auro-card>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-card
    cssClass="my-class"
    imageSrc="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/blue.png"
    titleText="oneworld Explorer"
    teaserText="oneworld Explorer fare makes it easy to travel from city to city, and continent to continent. And, for every dot you connect, you earn more miles and points to spend across the oneworld Alliance."
    linkTarget="https://www.alaskaair.com/">
  </auro-card>
  ```

</auro-accordion>

## Then there is more

Aenean at blandit lorem. Fusce imperdiet mi nec gravida maximus. Quisque nisl libero, condimentum in nisi a, imperdiet lacinia arcu.

```javascript
toggleDialog = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  html.style.overflow = 'hidden';
  dialog.removeAttribute("open");
  dialog.setAttribute("open", true);
}

toggleDialogClose = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  html.style.overflow = '';
  dialog.removeAttribute("open");
}
```
