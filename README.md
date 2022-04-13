# teinei-text-counter

`teinei-text-counter` is a minimal WebAssembly wrapper of the [unicode-segmentation](https://crates.io/crates/unicode-segmentation) crate just for counting [grapheme clusters](https://unicode.org/reports/tr29/). "丁寧"(teinei) means "careful" or "deliberate."

## Usage

### `countGraphemeClusters`

```js
import { countGraphemeClusters } teinei-text-counter

const text = '𩸽おいしい😋'
console.log(text.length)
//-> 🙁 8
console.log(countGraphemeClusters(text))
//-> 🙂 6
```

### `splitIntoGraphemeClusters`

```js
import { splitIntoGraphemeClusters } teinei-text-counter

const text = "🌞Hello👩‍👩‍👦"
console.log(text.split(''))
//-> 🙁 ['\uD83C', '\uDF1E', 'H', 'e', 'l', 'l', 'o', '\uD83D', '\uDC69', '‍', '\uD83D', '\uDC69', '‍', '\uD83D', '\uDC66']
//

console.log(splitIntoGraphemeClusters(text))
//-> 🙂 ['🌞', 'H', 'e', 'l', 'l', 'o', '👩‍👩‍👦']
```