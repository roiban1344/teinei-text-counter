FROM rust:latest

RUN cargo install wasm-pack --git https://github.com/rustwasm/wasm-pack --rev 713868b204f151acd1989c3f29ff9d3bc944c306

RUN cargo install cargo-generate

RUN apt-get update && apt-get install binaryen