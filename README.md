# node-utf-format
## Ⓕⓞⓡⓜⓐⓣ ᴛᴇxᴛ with utf-8 ｐｏｗｅｒ
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

str = '[]Hello[], *my little friend 111*!\n' +
      'You ()can() have `monospace text and numbers 1 2 3 4`\n' +
      'and you can have _capped text_';
console.log(md.format(str));
// 🄷🄴🄻🄻🄾, ᴍy ʟɪᴛᴛʟᴇ Fʀɪᴇɴᴅ 111!
// You ⓒⓐⓝ have ｍｏｎｏｓｐａｃｅ  ｔｅｘｔ  ａｎｄ  ｎｕｍｂｅｒｓ  １  ２  ３  ４
// and you can have ᴄᴀᴩᴩᴇᴅ ᴛᴇxᴛ

console.log(md.format('String to be squared', { to: 'sq' }));
// 🅂🅃🅁🄸🄽🄶 🅃🄾 🄱🄴 🅂🅀🅄🄰🅁🄴🄳

console.log(md.format('String to be circled', { to: 'ci' }));
// Ⓢⓣⓡⓘⓝⓖ ⓣⓞ ⓑⓔ ⓒⓘⓡⓒⓛⓔⓓ

console.log(md.format('String to be small capped', { to: 'sc' }));
// sᴛʀɪɴɢ ᴛᴏ ʙᴇ sᴍᴀʟʟ ᴄᴀᴩᴩᴇᴅ

console.log(md.format('String to be regionalized', { to: 'rg' }));
// 🇸​🇹​🇷​🇮​🇳​🇬​ 🇹​🇴​ 🇧​🇪​ 🇷​🇪​🇬​🇮​🇴​🇳​🇦​🇱​🇮​🇿​🇪​🇩

console.log(md.format('String to be full width', { to: 'fw' }));
// Ｓｔｒｉｎｇ  ｔｏ  ｂｅ  ｆｕｌｌ  ｗｉｄｔｈ
```

It seems that github code block doesn't show Small caps properly, here it is without code formatting:

  sᴛʀɪɴɢ ᴛᴏ ʙᴇ sᴍᴀʟʟ ᴄᴀᴩᴩᴇᴅ


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
