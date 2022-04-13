use js_sys::Array;
use unicode_segmentation::UnicodeSegmentation;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(js_name=countGraphemeClusters)]
pub fn count_grapheme_clusters(s: &str) -> usize {
    s.graphemes(true).count()
}

#[wasm_bindgen(js_name=splitIntoGraphemeClusters)]
pub fn split_into_grapheme_clusters(s: &str) -> Array {
    s.graphemes(true).map(|g| JsValue::from_str(g)).collect()
}
