---
id: oracles
title: ์ค๋ผํด
sidebar_label: ๐ฎ ์ค๋ผํด
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

์ค๋ผํด์ ์์ฐ์ ํ์ฌ ๊ฐ๊ฒฉ์ ์กฐํํ  ์ ์๋ ์ค๋งํธ ์ปจํธ๋ํธ์๋๋ค. ์ค๋งํธ ์ปจํธ๋ํธ๋ ์ธํฐ๋ท์ ์ฐ๊ฒฐํ์ฌ ์ ๋ณด๋ฅผ ๊ฐ์ ธ์ฌ ์ ์๊ธฐ ๋๋ฌธ์, ์ค๋ผํด์ ๋๊ตฐ๊ฐ ์ง์์ ์ผ๋ก ๊ฐ๊ฒฉ์ ์๋ฐ์ดํธํ๋ ๋ฐ ์์กดํฉ๋๋ค. ๊ทธ๋ ๊ธฐ ๋๋ฌธ์ ์์ฅ์ ์ต์  ์ ๋ณด์ ์ค๋ผํด ๋ฐ์ดํฐ ์ฌ์ด์ ์ง์ฐ์ด ์์ ์ ์๋ค๋ ์ ์ ์ค๋ผํด์ ์ฌ์ฉํ  ๋ ์ผ๋์ ๋์ด์ผ ํฉ๋๋ค.

[FT](ft.md) ๋ฐ [NFT](nft.md)์ ๋ฌ๋ฆฌ ์ค๋ผํด ์ปจํธ๋ํธ๋ ํ์คํ๋์ง ์์์ต๋๋ค. ์ฌ๊ธฐ์๋ ๋ค์ํ ์ ๊ณต์์ฒด์ ๊ตฌ์ถ๋ ์ค๋ผํด์ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ๋์ดํฉ๋๋ค.

---

### Switchboard

- ๊ณ์ : **switchboard-v2.near** | **switchboard-v2.testnet**
- ์์ฑ์: [Switchboard](https://twitter.com/switchboardxyz)
- ๋ฌธ์: https://docs.switchboard.xyz/near/program/mainnet
- Typescript ๋ฌธ์: https://docs.switchboard.xyz/near/dev/javascript
- CLI ๋ฌธ์: https://docs.switchboard.xyz/near/dev/cli
- ํตํฉ ์์ : https://github.com/switchboard-xyz/sbv2-near/blob/main/programs/feed-parser/src/lib.rs
- crates.io: https://crates.io/crates/sbv2-near

## ๊ฐ๊ฒฉ ์ค๋ผํด - Promixityfi

- ๊ณ์ : **price-oracle.near** | **price-oracle.testnet**
- ์์ฑ์: [Proximity](https://twitter.com/proximityfi)
- ์ค๋งํธ ์ปจํธ๋ํธ: https://github.com/NearDeFi/price-oracle
- ์ปจํธ๋ํธ ์ฒด๊ฒฐ ๋ด: https://github.com/NearDeFi/near-price-oracle-bot

#### ์์ฐ ์กฐํ

<Tabs>
  <TabItem value="cli" label="CLI">

  ```bash
  NEAR_ENV=mainnet near view priceoracle.near get_assets
  ```
    
  </TabItem>

<!--  
  <TabItem value="xcc-rs" label="Contract Call">
  ```rs
  pub type AssetId = String;
  #[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize)]
  #[serde(crate = "near_sdk::serde")]
  pub struct Asset {
      pub reports: Vec<Report>,
      pub emas: Vec<AssetEma>,
  }
  #[ext_contract(price_oracle)]
  trait Oracle {
    fn get_assets(&mut self) -> Vec<(AssetId, Asset)>;
  }
  // Use this call in your method
  let promise = price_oracle::ext("price-oracle.near".parse().unwrap())
    .with_static_gas(Gas(5*TGAS))
    .get_assets();
  ```
  </TabItem> 
-->
</Tabs>

#### ์์ฐ ๊ฐ๊ฒฉ ๊ฐ์ ธ์ค๊ธฐ

<Tabs>
  <TabItem value="cli" label="CLI">

  ```bash
  NEAR_ENV=mainnet near view priceoracle.near get_price_data
  ```

  </TabItem>
</Tabs>

:::tip
  ๋ฐํ๋ `multiplier` ๊ฐ์ `10000`์ผ๋ก ๋๋ ์ USD ํํ๋ก ๊ฐ๊ฒฉ์ ์ป์ ์ ์์ต๋๋ค.
:::

