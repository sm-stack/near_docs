---
id: introduction
title: 전제 조건
---

스마트 컨트랙트를 개발하려면 Node.js를 설치해야 합니다. Rust를 기본 언어로 사용하고 싶다면 추가로 `rustup`을 설치해야 합니다.

<hr class="subsection" />

## Node.js
[Node.js](https://nodejs.org/en/download/)를 다운로드하고 설치하세요.

:::tip
`npm install -g yarn`을 사용하여 [yarn](https://yarnpkg.com)을 설치하는 것이 좋습니다.
:::

<hr class="subsection" />

## Rust와 Wasm

Rust를 설정하려면, [다음 지침](https://doc.rust-lang.org/book/ch01-01-installation.html)을 따르세요. 그런 다음, Rust를 [웹 어셈블리어(wasm)](https://webassembly.org/)로 컴파일할 수 있는 `wasm32-unknown-unknown` 툴체인을 추가합니다. WASM은 NEAR 플랫폼에서 사용되는 저수준 언어입니다.

```bash
# Installing Rust in Linux and MacOS
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env

# Add the wasm toolchain
rustup target add wasm32-unknown-unknown
```