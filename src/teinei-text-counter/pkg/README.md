# teinei-text-counter

`teinei-text-counter` is a minimal WebAssembly wrapper of the [unicode-segmentation](https://crates.io/crates/unicode-segmentation) crate just for counting [grapheme clusters](https://unicode.org/reports/tr29/). "丁寧"(teinei) means "careful" or "deliberate."

## API

### `countGraphemeClusters(string)`

Returns the length of a string with an extended grapheme cluster as a minimum unit.

```js
import { countGraphemeClusters } from 'teinei-text-counter'

const text = '🌞Hello👩‍👩‍👧'
console.log(text.length)
//-> 🙁 15
console.log(countGraphemeClusters(text))
//-> 🙂 7
```

### `splitIntoGraphemeClusters(string)`

Splits a string into extended grapheme clusters and returns as an array.

```js
import { splitIntoGraphemeClusters } from 'teinei-text-counter'

const text = '𩸽おいしい😋'
console.log(text.split(''))
//-> 🙁 ['\uD867', '\uDE3D', 'お', 'い', 'し', 'い', '\uD83D', '\uDE0B']
console.log(splitIntoGraphemeClusters(text))
//-> 🙂 ['𩸽', 'お', 'い', 'し', 'い', '😋']
```