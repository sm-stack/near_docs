---
id: utils
title: 유틸리티
sidebar_label: 유틸리티
---

### NEAR => yoctoNEAR {#near--yoctonear}

```js
// converts NEAR amount into yoctoNEAR (10^-24)

const { utils } = nearAPI;
const amountInYocto = utils.format.parseNearAmount("1");
```

[<span class="typedoc-icon typedoc-icon-function"></span> `parseNearAmount` 함수](https://near.github.io/near-api-js/modules/utils_format#parsenearamount)

### YoctoNEAR => NEAR {#yoctonear--near}

```js
// converts yoctoNEAR (10^-24) amount into NEAR

const { utils } = nearAPI;
const amountInNEAR = utils.format.formatNearAmount("1000000000000000000000000");
```

[<span class="typedoc-icon typedoc-icon-function"></span> `formatNearAmount` 함수](https://near.github.io/near-api-js/modules/utils_format#formatnearamount)

