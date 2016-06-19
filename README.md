# node-utf-format: F̲r̲o̲m̲a̲t̲ your t⃨e⃨x⃨t⃨ with utf-8 ｐｏｗｅｒ
[![Build Status](https://travis-ci.org/gazay/node-utf-format.svg)](https://travis-ci.org/gazay/node-utf-format) [![NPM version](https://badge.fury.io/js/node-utf-format.svg)](https://www.npmjs.com/package/node-utf-format)

If all you have to display your text is utf-8 range – use this package to display it almost as github markdown does

<a href="https://evilmartians.com/?utm_source=node-utf-format">
<img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg" alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Install

```
npm install node-utf-format
```

## Usage

This is compatible formatter, which uses utf-8 symbols till `ffff`:
```js
const md = require('node-utf-format');

str = 'Hello, *my little friend 111*! You can have `monospace text and numbers 1 2 3 4`\n' +
      'and you can have _italic text_';
console.log(md.format(str));
// Hello, m̲y l̲i̲t̲t̲l̲e̲ f̲r̲i̲e̲n̲d̲ 1̲1̲1̲! You can have ｆｕｌｌ  ｗｉｄｔｈ  ｔｅｘｔ  ａｎｄ  ｎｕｍｂｅｒｓ  １  ２  ３  ４
// and you can have u⃨n⃨d⃨e⃨r⃨d⃨o⃨t⃨t⃨e⃨d⃨ ⃨t⃨e⃨x⃨t⃨

console.log(md.format('String to be underlined', { to: 'cl' }));
// S̲t̲r̲i̲n̲g t̲o̲ b̲e̲ u̲n̲d̲e̲r̲l̲i̲n̲e̲d̲

console.log(md.format('String to be underdotted', { to: 'cu' }));
// S⃨t⃨r⃨i⃨n⃨g⃨ ⃨t⃨o⃨ ⃨b⃨e⃨ ⃨u⃨n⃨d⃨e⃨r⃨d⃨o⃨t⃨t⃨e⃨d⃨

console.log(md.format('String to be full width', { to: 'fw' }));
// Ｓｔｒｉｎｇ  ｔｏ  ｂｅ  ｆｕｌｌ  ｗｉｄｔｈ


// Those two are ugly as __

console.log(md.format('String to be overlined', { to: 'co' }));
// S̅tr̅in̅g̅ to̅ be̅ o̅v̅e̅r̅lin̅e̅d

console.log(md.format('String to be over-low-lined', { to: 'col' }));
// S̲̅t̲r̲̅i̲n̲̅g̅ t̲o̲̅ b̲e̲̅ o̲̅v̲̅e̲̅r̲̅-l̲o̲̅w̲̅-l̲i̲n̲̅e̲̅d̲
```


Those are from U+1D400, so as I see - they supported by mac and some of them - by linux
by default.
```js
const md = require('./index'); //node-utf-format');

str = 'Hello, *my little friend 111*! You can have `monospace text and numbers 1 2 3 4`\n' +
      'and you can have _italic text_';
console.log(md.format(str));
// Hello, 𝐦𝐲 𝐥𝐢𝐭𝐭𝐥𝐞 𝐟𝐫𝐢𝐞𝐧𝐝 𝟏𝟏𝟏! You can have 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝚝𝚎𝚡𝚝 𝚊𝚗𝚍 𝚗𝚞𝚖𝚋𝚎𝚛𝚜 𝟷 𝟸 𝟹 𝟺
// and you can have 𝑖𝑡𝑎𝑙𝑖𝑐 𝑡𝑒𝑥𝑡

console.log(md.format(str, { font: 'ss' }));
// 𝖧𝖾𝗅𝗅𝗈, 𝗺𝘆 𝗹𝗶𝘁𝘁𝗹𝗲 𝗳𝗿𝗶𝗲𝗻𝗱 𝟭𝟭𝟭! 𝖸𝗈𝗎 𝖼𝖺𝗇 𝗁𝖺𝗏𝖾 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝚝𝚎𝚡𝚝 𝚊𝚗𝚍 𝚗𝚞𝚖𝚋𝚎𝚛𝚜 𝟷 𝟸 𝟹 𝟺
// 𝖺𝗇𝖽 𝗒𝗈𝗎 𝖼𝖺𝗇 𝗁𝖺𝗏𝖾 𝘪𝘵𝘢𝘭𝘪𝘤 𝘵𝘦𝘹𝘵

console.log(md.format('String to be bold', { to: 'b' }));
// 𝐒𝐭𝐫𝐢𝐧𝐠 𝐭𝐨 𝐛𝐞 𝐛𝐨𝐥𝐝

console.log(md.format('String to be italic', { to: 'i' }));
// 𝑆𝑡𝑟𝑖𝑛𝑔 𝑡𝑜 𝑏𝑒 𝑖𝑡𝑎𝑙𝑖𝑐

console.log(md.format('String to be monospace', { to: 'm' }));
// 𝚂𝚝𝚛𝚒𝚗𝚐 𝚝𝚘 𝚋𝚎 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎

console.log(md.format('String to be bold italic', { to: 'bi' }));
// 𝑺𝒕𝒓𝒊𝒏𝒈 𝒕𝒐 𝒃𝒆 𝒃𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄

console.log(md.format('String to be sans serif', { to: 'ss' }));
// 𝖲𝗍𝗋𝗂𝗇𝗀 𝗍𝗈 𝖻𝖾 𝗌𝖺𝗇𝗌 𝗌𝖾𝗋𝗂𝖿

console.log(md.format('String to be sans serif bold', { to: 'ssb' }));
// 𝗦𝘁𝗿𝗶𝗻𝗴 𝘁𝗼 𝗯𝗲 𝘀𝗮𝗻𝘀 𝘀𝗲𝗿𝗶𝗳 𝗯𝗼𝗹𝗱

console.log(md.format('String to be sans serif italic', { to: 'ssi' }));
// 𝘚𝘵𝘳𝘪𝘯𝘨 𝘵𝘰 𝘣𝘦 𝘴𝘢𝘯𝘴 𝘴𝘦𝘳𝘪𝘧 𝘪𝘵𝘢𝘭𝘪𝘤

console.log(md.format('String to be sans serif bold italic', { to: 'ssbi' }));
// 𝙎𝙩𝙧𝙞𝙣𝙜 𝙩𝙤 𝙗𝙚 𝙨𝙖𝙣𝙨 𝙨𝙚𝙧𝙞𝙛 𝙗𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘

console.log(md.format('And bold script string', { to: 'bs' }));
// 𝓐𝓷𝓭 𝓫𝓸𝓵𝓭 𝓼𝓬𝓻𝓲𝓹𝓽 𝓼𝓽𝓻𝓲𝓷𝓰
```

## License

The MIT License
