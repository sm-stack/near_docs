---
id: quickstart-guide
title: Hello NEAR π
sidebar_label: β­ λΉ λ₯Έ μμ
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"

μλνμΈμ! NEAR: Hello NEARμμ μ²« λ²μ§Έ νμ€μν μ±(dApp)μ μμνκ³ , μ±κ³Ό μνΈ μμ©νλ λ°©λ²μ μλ΄ν΄ λλ¦¬κ² μ΅λλ€.

**Hello NEAR**λ λ κ°μ§ μμλ‘ κ΅¬μ±λ μΉκ·Όν dAppμλλ€.
  1. μΈμ¬λ§μ μ μ₯νκ³  κ²μνλ μ€λ§νΈ μ»¨νΈλνΈ
  2. μΈμ¬λ§μ νμνκ³  λ³κ²½ν  μ μλ κ°λ¨ν μΉ κΈ°λ° νλ‘ νΈμλ

---

## λΈλΌμ°μ μμ Hello NEARλ₯Ό μ¬μ©ν΄ λ³΄μΈμ

μ λΈλΌμ°μ  μ°½μ΄ μ½λμ ν¨κ» μλμΌλ‘ μ΄λ¦¬κ³ , μ μ κΈ°λ€λ¦¬λ©΄ νλ‘ νΈμλμμ νμ μ°½μ΄ μμ±λ©λλ€(νμ μ°½μ΄ μ°¨λ¨λμ§ μμλμ§ νμΈνμΈμ).

| π JavaScript                                                                                                                                                     | π¦ Rust                                                                                                                                                           | π AssemblyScript |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- | 
| <a href="https://gitpod.io/#https://github.com/near-examples/hello-near-js.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | <a href="https://gitpod.io/#https://github.com/near-examples/hello-near-rs.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> |<a href="https://gitpod.io/#https://github.com/near-examples/hello-near-as.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> |

---

## λ‘μ»¬ νκ²½μμ Hello NEARλ₯Ό μ¬μ©ν΄ λ³΄μΈμ

λΈλκ° μ΄λ―Έ μ€μΉλμ΄ μμΌλ©΄ λ€μμ μ€νν΄ λ³΄μΈμ.

```bash 
  npx create-near-app@latest
```

λνν μ°½μ ν΅ν΄ μ²« λ²μ§Έ νλ‘μ νΈ ν΄λλ₯Ό μ€μ ν©λλ€.

ν΄λκ° μ€λΉλλ©΄, READMEλ₯Ό νμΈνμΈμ! μ΄λ μ»¨νΈλνΈλ₯Ό **μμ±**νκ³ , **λ°°ν¬**νλ©°, νλ‘ νΈμλλ₯Ό **μμ**νλ λ°©λ²μ λ³΄μ¬μ€λλ€ .

---

## Hello NEARμ μνΈμμ©νλ λ°©λ²

μ±μ΄ μ€νλλ©΄ μλμ κ°μ νλ©΄μ΄ λνλ©λλ€. μ΄μ  NEAR κ³μ μΌλ‘ λ‘κ·ΈμΈνμΈμ. κ³μ μ΄ μλ κ²½μ°, μ¦μ λ§λ€ μ μμ΅λλ€.

![img](/docs/assets/examples/hello-near.png)
*Hello NEARμ νλ‘ νΈμλ*

λ‘κ·ΈμΈν ν, μΈμ¬λ§μ λ³κ²½νκ³  Hello NEAR μ±μ΄ μ΄λ»κ² μΈμ¬νλμ§ νμΈν΄ λ³΄μΈμ!



---

## dAppμ κ΅¬μ‘°

μ΄μ  dAppμ΄ λ¬΄μμ νλμ§ μ΄ν΄νμΌλ―λ‘, κ·Έ κ΅¬μ‘°λ₯Ό μμΈν μ΄ν΄λ³΄κ² μ΅λλ€.

1. νλ‘ νΈμλ μ½λλ `/frontend` ν΄λμ μμ΅λλ€.
2. μ€λ§νΈ μ»¨νΈλνΈ μ½λλ `/contract` ν΄λμ μμ΅λλ€.
3. μ»΄νμΌλ μ€λ§νΈ μ»¨νΈλνΈλ `/out/main.wasm`μμ μ°Ύμ μ μμ΅λλ€.
4. μ»¨νΈλνΈκ° λ°°ν¬λ κ³μ μ μ΄λ¦μ `/neardev/dev-account`μ μμ΅λλ€.

### μ»¨νΈλνΈ
μ»¨νΈλνΈμλ `set_greeting`κ³Ό `get_greeting`μ΄λΌλ λ κ°μ§ λ©μλκ° μμ΅λλ€. μ²« λ²μ§Έλ  μ»¨νΈλνΈμ λ§€κ°λ³μ `message`μ `String`μ μ μ₯νκ³ , λ λ²μ§Έλ μ΄λ₯Ό κ²μνλ κΈ°λ₯μ ν©λλ€. κΈ°λ³Έμ μΌλ‘ μ»¨νΈλνΈλ `"Hello"`λΌλ λ©μμ§λ₯Ό λ°νν©λλ€.

<CodeTabs>
  <Language value="π JavaScript" language="js">
    <Github fname="index.js"
            url="https://github.com/near-examples/hello-near-js/blob/master/contract/src/contract.ts"
            start="3" end="18" />
  </Language>
  <Language value="π¦ Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/hello-near-rs/blob/main/contract/src/lib.rs"
            start="9" end="43" />
  </Language>
  <Language value="π AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/hello-near-as/blob/main/contract/assembly/index.ts"
            start="9" end="23"/>
  </Language>
</CodeTabs>

### νλ‘ νΈμλ
νλ‘ νΈμλλ νλμ HTML νμΌλ‘ κ΅¬μ±λμ΄ μμ΅λλ€(`frontend/index.html`). μ΄ νμΌμ νλ©΄μ νμλλ μμλ€μ μ μν©λλ€.

μΉμ¬μ΄νΈμ λ‘μ§μ `frontend/index.js`μ μμΌλ©°, `frontend/near-interface.js`μ ν΅ν΄ μ»¨νΈλνΈμ ν΅μ ν©λλ€. λ€μ μ½λμμ `/frontend/index.js`λ₯Ό νμΈν  μ μμ΅λλ€.

<CodeTabs>
  <Language value="π JavaScript" language="js">
    <Github fname="index.js"
            url="https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js"
            start="11" end="21" />
  </Language>
</CodeTabs>

μ΄λ μ±μ΄ μμλ  λ μ¬μ©μκ° μ΄λ―Έ λ‘κ·ΈμΈλμ΄ μλμ§ νμΈν ν `signedInFlow()` λλ `signedOutFlow()`λ₯Ό μ€ννλλ‘ μ±μκ² μλ €μ£Όλ μ­ν μ μνν©λλ€.


---

## νμ€νΈ

μ€λ§νΈ μ»¨νΈλνΈλ₯Ό μμ±ν  λ, λͺ¨λ  λ©μλλ₯Ό μ² μ νκ² νμ€νΈνλ κ²μ λ§€μ° μ€μν©λλ€. μ΄ νλ‘μ νΈμλ **λ¨μ** νμ€νΈμ **ν΅ν©** νμ€νΈκ° λͺ¨λ μμ΅λλ€. μ½λλ₯Ό νν€μΉκΈ° μ μ, `npm run test`μ μ€νν΄λ³΄μΈμ.

### λ¨μ νμ€νΈ
λ¨μ νμ€νΈλ μ€λ§νΈ μ»¨νΈλνΈμ κ° ν¨μλ₯Ό νμΈν©λλ€. μ΄λ μ€λ§νΈ μ»¨νΈλνΈμ λμΌν μΈμ΄λ‘ μμ±λ©λλ€. μ»¨νΈλνΈκ° Rustλ‘ μμ±λ κ²½μ°, κ° `.rs` νμΌμ λ§¨ μλμμ νμ€νΈλ₯Ό μ°Ύμ μ μμ΅λλ€.


<CodeTabs>
  <Language value="π¦ Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/hello-near-rs/blob/main/contract/src/lib.rs"
            start="46" end="58" />
  </Language>
  <Language value="π AssemblyScript" language="ts">
    <Github fname="main.spec.ts"
            url="https://github.com/near-examples/hello-near-as/blob/main/contract/assembly/__tests__/main.spec.ts" />
  </Language>
</CodeTabs>

### ν΅ν© νμ€νΈ

ν΅ν© νμ€νΈλ Javascriptμ Rustλ‘ μμ±ν  μ μμ΅λλ€. μ΄λ **μλλ°μ€**μ μ»¨νΈλνΈλ₯Ό λ°°ν¬νκ³  κ·Έ μμμ λ©μλλ₯Ό μ€ννλ λ°©μμΌλ‘ λμν©λλ€. μ΄λ₯Ό ν΅ν΄, ν΅ν© νμ€νΈλ νμ€μ μΈ μλλ¦¬μ€ μμμ μ¬μ©μμμ μνΈ μμ©μ μλ?¬λ μ΄μν©λλ€. `integration-tests/`μμ `hello-near`μ λν ν΅ν© νμ€νΈλ₯Ό μ°Ύμ μ μμ΅λλ€.


<CodeTabs>
  <Language value="π JavaScript" language="js">
    <Github fname="main.ava.ts"
            url="https://github.com/near-examples/hello-near-js/blob/master/integration-tests/src/main.ava.ts"
            start="32" end="43" />
  </Language>
</CodeTabs>

---

## λ€μμΌλ‘

μ²« λ²μ§Έ λΉ λ₯Έ μμ νν λ¦¬μΌμ μ¬κΈ°κΉμ§μλλ€. μ΄μ  μ΅μνμ μ¬μ©μ μΈν°νμ΄μ€μ νμ€νΈλ‘ μμ ν κΈ°λ₯μ κ°μΆ μ»¨νΈλνΈλ₯Ό νμΈν΄ λ³΄μμ΅λλ€. κ³μν΄μ [μμ λ€](/tutorials/welcome)μ νμΈνκ±°λ, μ§μ  [κ°λ° μΉμ](./contracts/anatomy.md)μΌλ‘ μ΄λνμ¬ μμ λ§μ μ»¨νΈλνΈλ₯Ό μμ±νλ λ°©λ²μ μμλ³΄μΈμ.


μ§λ¬Έμ΄ μμΌμλ©΄ μ£Όμ νμ§ λ§μκ³  [Discord](https://near.chat)μμ μ ν¬μ ν¨κ» νμΈμ. μ ν¬λ μμ± μ±λμ μ°Έμ¬νκ³  μ§λ¬Έν  μ μλ Office Hoursλ₯Ό μ κΈ°μ μΌλ‘ κ°μ΅νκ³  μμ΅λλ€.

μ¦κ±°μ΄ μ½λ© μκ° λμΈμ!
