# teinei-text-counter

`teinei-text-counter` is a minimal WebAssembly wrapper of the [unicode-segmentation](https://crates.io/crates/unicode-segmentation) crate just for counting [grapheme clusters](https://unicode.org/reports/tr29/). "δΈε―§"(teinei) means "careful" or "deliberate."

## API

### `countGraphemeClusters(string)`

Returns the length of a string with an extended grapheme cluster as a minimum unit.

```js
import { countGraphemeClusters } from 'teinei-text-counter'

const text = 'πHelloπ©βπ©βπ§'
console.log(text.length)
//-> π 15
console.log(countGraphemeClusters(text))
//-> π 7
```

### `splitIntoGraphemeClusters(string)`

Splits a string into extended grapheme clusters and returns as an array.

```js
import { splitIntoGraphemeClusters } from 'teinei-text-counter'

const text = 'π©Έ½γγγγπ'
console.log(text.split(''))
//-> π ['\uD867', '\uDE3D', 'γ', 'γ', 'γ', 'γ', '\uD83D', '\uDE0B']
console.log(splitIntoGraphemeClusters(text))
//-> π ['π©Έ½', 'γ', 'γ', 'γ', 'γ', 'π']
```