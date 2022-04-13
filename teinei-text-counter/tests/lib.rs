use teinei_text_counter::*;
use rstest::*;

#[rstest]
#[case("👩‍👩‍👧", 1)]
#[case("🌞", 1)]
#[case("𩸽", 1)]
#[case("𠮟る", 2)]
#[case("𠮷野家", 3)]
#[case("竈門禰󠄀豆子", 5)]
fn count_grapheme_clusters_works(#[case] s: &str, #[case] len: usize) {
    assert_eq!(count_grapheme_clusters(s), len)
}