```js
// Import the class only
import { AuroCard } from '@aurodesignsystem/auro-card/class';

// Register with a custom name if desired
AuroCard.register('custom-card');
```

This will create a new custom element `<custom-card>` that behaves exactly like `<auro-card>`, allowing both to coexist on the same page without interfering with each other.
