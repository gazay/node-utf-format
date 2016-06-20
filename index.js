// U+1D400 - U+1D433
const BOLD = {
  a: '𝐚', b: '𝐛', c: '𝐜', d: '𝐝', e: '𝐞', f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣',
  k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨', p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭',
  u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲', z: '𝐳',
  A: '𝐀', B: '𝐁', C: '𝐂', D: '𝐃', E: '𝐄', F: '𝐅', G: '𝐆', H: '𝐇', I: '𝐈', J: '𝐉',
  K: '𝐊', L: '𝐋', M: '𝐌', N: '𝐍', O: '𝐎', P: '𝐏', Q: '𝐐', R: '𝐑', S: '𝐒', T: '𝐓',
  U: '𝐔', V: '𝐕', W: '𝐖', X: '𝐗', Y: '𝐘', Z: '𝐙',
  // U+1D7CE - U+1D7D7
  0: '𝟎', 1: '𝟏', 2: '𝟐', 3: '𝟑', 4: '𝟒', 5: '𝟓', 6: '𝟔', 7: '𝟕', 8: '𝟖', 9: '𝟗',
};

// U+1D434 - U+1D467
const ITALIC = {
  a: '𝑎', b: '𝑏', c: '𝑐', d: '𝑑', e: '𝑒', f: '𝑓', g: '𝑔', h: '𝒉', i: '𝑖', j: '𝑗',
  k: '𝑘', l: '𝑙', m: '𝑚', n: '𝑛', o: '𝑜', p: '𝑝', q: '𝑞', r: '𝑟', s: '𝑠', t: '𝑡',
  u: '𝑢', v: '𝑣', w: '𝑤', x: '𝑥', y: '𝑦', z: '𝑧',
  A: '𝐴', B: '𝐵', C: '𝐶', D: '𝐷', E: '𝐸', F: '𝐹', G: '𝐺', H: '𝐻', I: '𝐼', J: '𝐽',
  K: '𝐾', L: '𝐿', M: '𝑀', N: '𝑁', O: '𝑂', P: '𝑃', Q: '𝑄', R: '𝑅', S: '𝑆', T: '𝑇',
  U: '𝑈', V: '𝑉', W: '𝑊', X: '𝑋', Y: '𝑌', Z: '𝑍',
  // Normal numbers
  0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
};

// U+1D468 - U+1D49B
const BOLD_ITALIC = {
  a: '𝒂', b: '𝒃', c: '𝒄', d: '𝒅', e: '𝒆', f: '𝒇', g: '𝒈', h: '𝒉', i: '𝒊', j: '𝒋',
  k: '𝒌', l: '𝒍', m: '𝒎', n: '𝒏', o: '𝒐', p: '𝒑', q: '𝒒', r: '𝒓', s: '𝒔', t: '𝒕',
  u: '𝒖', v: '𝒗', w: '𝒘', x: '𝒙', y: '𝒚', z: '𝒛',
  A: '𝑨', B: '𝑩', C: '𝑪', D: '𝑫', E: '𝑬', F: '𝑭', G: '𝑮', H: '𝑯', I: '𝑰', J: '𝑱',
  K: '𝑲', L: '𝑳', M: '𝑴', N: '𝑵', O: '𝑶', P: '𝑷', Q: '𝑸', R: '𝑹', S: '𝑺', T: '𝑻',
  U: '𝑼', V: '𝑽', W: '𝑾', X: '𝑿', Y: '𝒀', Z: '𝒁',
  // U+1D7CE - U+1D7D7
  0: '𝟎', 1: '𝟏', 2: '𝟐', 3: '𝟑', 4: '𝟒', 5: '𝟓', 6: '𝟔', 7: '𝟕', 8: '𝟖', 9: '𝟗',
};

// U+1D4D0 - U+1D503
const BOLD_SCRIPT = {
  a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳',
  k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽',
  u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃',
  A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔', F: '𝓕', G: '𝓖', H: '𝓗', I: '𝓘', J: '𝓙',
  K: '𝓚', L: '𝓛', M: '𝓜', N: '𝓝', O: '𝓞', P: '𝓟', Q: '𝓠', R: '𝓡', S: '𝓢', T: '𝓣',
  U: '𝓤', V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨', Z: '𝓩',
  // U+1D7CE - U+1D7D7
  0: '𝟎', 1: '𝟏', 2: '𝟐', 3: '𝟑', 4: '𝟒', 5: '𝟓', 6: '𝟔', 7: '𝟕', 8: '𝟖', 9: '𝟗',
};

// U+1D5A0 - U+1D5D3
const SS_REGULAR = {
  A: '𝖠', B: '𝖡', C: '𝖢', D: '𝖣', E: '𝖤', F: '𝖥', G: '𝖦', H: '𝖧', I: '𝖨', J: '𝖩',
  K: '𝖪', L: '𝖫', M: '𝖬', N: '𝖭', O: '𝖮', P: '𝖯', Q: '𝖰', R: '𝖱', S: '𝖲', T: '𝖳',
  U: '𝖴', V: '𝖵', W: '𝖶', X: '𝖷', Y: '𝖸', Z: '𝖹',
  a: '𝖺', b: '𝖻', c: '𝖼', d: '𝖽', e: '𝖾', f: '𝖿', g: '𝗀', h: '𝗁', i: '𝗂', j: '𝗃',
  k: '𝗄', l: '𝗅', m: '𝗆', n: '𝗇', o: '𝗈', p: '𝗉', q: '𝗊', r: '𝗋', s: '𝗌', t: '𝗍',
  u: '𝗎', v: '𝗏', w: '𝗐', x: '𝗑', y: '𝗒', z: '𝗓',
  // U+1D7E2 - U+1D7EB
  0: '𝟢', 1: '𝟣', 2: '𝟤', 3: '𝟥', 4: '𝟦', 5: '𝟧', 6: '𝟨', 7: '𝟩', 8: '𝟪', 9: '𝟫',
};

// U+1D5D4 - U+1D607
const SS_BOLD = {
  A: '𝗔', B: '𝗕', C: '𝗖', D: '𝗗', E: '𝗘', F: '𝗙', G: '𝗚', H: '𝗛', I: '𝗜', J: '𝗝',
  K: '𝗞', L: '𝗟', M: '𝗠', N: '𝗡', O: '𝗢', P: '𝗣', Q: '𝗤', R: '𝗥', S: '𝗦', T: '𝗧',
  U: '𝗨', V: '𝗩', W: '𝗪', X: '𝗫', Y: '𝗬', Z: '𝗭',
  a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳', g: '𝗴', h: '𝗵', i: '𝗶', j: '𝗷',
  k: '𝗸', l: '𝗹', m: '𝗺', n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿', s: '𝘀', t: '𝘁',
  u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅', y: '𝘆', z: '𝘇',
  // U+1D7EC - U+1D7F5
  0: '𝟬', 1: '𝟭', 2: '𝟮', 3: '𝟯', 4: '𝟰', 5: '𝟱', 6: '𝟲', 7: '𝟳', 8: '𝟴', 9: '𝟵',
};

// U+1D608 - U+1D63B
const SS_ITALIC = {
  A: '𝘈', B: '𝘉', C: '𝘊', D: '𝘋', E: '𝘌', F: '𝘍', G: '𝘎', H: '𝘏', I: '𝘐', J: '𝘑',
  K: '𝘒', L: '𝘓', M: '𝘔', N: '𝘕', O: '𝘖', P: '𝘗', Q: '𝘘', R: '𝘙', S: '𝘚', T: '𝘛',
  U: '𝘜', V: '𝘝', W: '𝘞', X: '𝘟', Y: '𝘠', Z: '𝘡',
  a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫',
  k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵',
  u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻',
  // U+1D7E2 - U+1D7EB
  0: '𝟢', 1: '𝟣', 2: '𝟤', 3: '𝟥', 4: '𝟦', 5: '𝟧', 6: '𝟨', 7: '𝟩', 8: '𝟪', 9: '𝟫',
};

// U+1D63C - U+1D66F
const SS_BOLD_ITALIC = {
  A: '𝘼', B: '𝘽', C: '𝘾', D: '𝘿', E: '𝙀', F: '𝙁', G: '𝙂', H: '𝙃', I: '𝙄', J: '𝙅',
  K: '𝙆', L: '𝙇', M: '𝙈', N: '𝙉', O: '𝙊', P: '𝙋', Q: '𝙌', R: '𝙍', S: '𝙎', T: '𝙏',
  U: '𝙐', V: '𝙑', W: '𝙒', X: '𝙓', Y: '𝙔', Z: '𝙕',
  a: '𝙖', b: '𝙗', c: '𝙘', d: '𝙙', e: '𝙚', f: '𝙛', g: '𝙜', h: '𝙝', i: '𝙞', j: '𝙟',
  k: '𝙠', l: '𝙡', m: '𝙢', n: '𝙣', o: '𝙤', p: '𝙥', q: '𝙦', r: '𝙧', s: '𝙨', t: '𝙩',
  u: '𝙪', v: '𝙫', w: '𝙬', x: '𝙭', y: '𝙮', z: '𝙯',
  // U+1D7EC - U+1D7F5
  0: '𝟬', 1: '𝟭', 2: '𝟮', 3: '𝟯', 4: '𝟰', 5: '𝟱', 6: '𝟲', 7: '𝟳', 8: '𝟴', 9: '𝟵',
};

// U+1D670 - U+1D6A3
const MONOSPACE = {
  A: '𝙰', B: '𝙱', C: '𝙲', D: '𝙳', E: '𝙴', F: '𝙵', G: '𝙶', H: '𝙷', I: '𝙸', J: '𝙹',
  K: '𝙺', L: '𝙻', M: '𝙼', N: '𝙽', O: '𝙾', P: '𝙿', Q: '𝚀', R: '𝚁', S: '𝚂', T: '𝚃',
  U: '𝚄', V: '𝚅', W: '𝚆', X: '𝚇', Y: '𝚈', Z: '𝚉',
  a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓',
  k: '𝚔', l: '𝚕', m: '𝚖', n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝',
  u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣',
  // U+1D7F6 - U+1D7FF
  0: '𝟶', 1: '𝟷', 2: '𝟸', 3: '𝟹', 4: '𝟺', 5: '𝟻', 6: '𝟼', 7: '𝟽', 8: '𝟾', 9: '𝟿',
};

const FULL_WIDTH = {
  A: 'Ａ', B: 'Ｂ', C: 'Ｃ', D: 'Ｄ', E: 'Ｅ', F: 'Ｆ', G: 'Ｇ', H: 'Ｈ', I: 'Ｉ',
  J: 'Ｊ', K: 'Ｋ', L: 'Ｌ', M: 'Ｍ', N: 'Ｎ', O: 'Ｏ', P: 'Ｐ', Q: 'Ｑ', R: 'Ｒ',
  S: 'Ｓ', T: 'Ｔ', U: 'Ｕ', V: 'Ｖ', W: 'Ｗ', X: 'Ｘ', Y: 'Ｙ', Z: 'Ｚ',
  a: 'ａ', b: 'ｂ', c: 'ｃ', d: 'ｄ', e: 'ｅ', f: 'ｆ', g: 'ｇ', h: 'ｈ', i: 'ｉ',
  j: 'ｊ', k: 'ｋ', l: 'ｌ', m: 'ｍ', n: 'ｎ', o: 'ｏ', p: 'ｐ', q: 'ｑ', r: 'ｒ',
  s: 'ｓ', t: 'ｔ', u: 'ｕ', v: 'ｖ', w: 'ｗ', x: 'ｘ', y: 'ｙ', z: 'ｚ',
  0: '０', 1: '１', 2: '２', 3: '３', 4: '４', 5: '５', 6: '６', 7: '７', 8: '８',
  9: '９',
  '!': '！', '"': '＂', '#': '＃', $: '＄', '%': '％', '&': '＆', '\'': '＇',
  '(': '（', ')': '）', '*': '＊', '+': '＋', ',': '，', '-': '－', '.': '．',
  '/': '／', ':': '：', ';': '；', '<': '＜', '=': '＝', '>': '＞', '?': '？',
  '@': '＠', '[': '［', '\\': '＼', ']': '］', '^': '＾', _: '＿', '`': '｀',
  '{': '｛', '|': '｜', '}': '｝', '~': '～', ' ': '  ',
};

const SQUARED = {
  A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵', G: '🄶', H: '🄷', I: '🄸', J: '🄹',
  K: '🄺', L: '🄻', M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁', S: '🅂', T: '🅃',
  U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈', Z: '🅉',
  a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸', j: '🄹',
  k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃',
  u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
};

const CIRCLED = {
  A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ', H: 'Ⓗ', I: 'Ⓘ', J: 'Ⓙ',
  K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ', O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ',
  U: 'Ⓤ', V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ',
  a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ',
  k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ',
  u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
  1: '①', 2: '②', 3: '③', 4: '④', 5: '⑤', 6: '⑥', 7: '⑦', 8: '⑧', 9: '⑨', 0: '⓪',
};

const SMALL_CAPS = {
  A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'F', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ',
  K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴩ', Q: 'q', R: 'ʀ', S: 's', T: 'ᴛ',
  U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'Y', Z: 'ᴢ',
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'F', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
  k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴩ', q: 'q', r: 'ʀ', s: 's', t: 'ᴛ',
  u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'y', z: 'ᴢ',
};

const REGIONAL = {
  A: '🇦​', B: '🇧​', C: '🇨​', D: '🇩​', E: '🇪​', F: '🇫​', G: '🇬​', H: '🇭​', I: '🇮​', J: '🇯​',
  K: '🇰​', L: '🇱​', M: '🇲​', N: '🇳​', O: '🇴​', P: '🇵​', Q: '🇶​', R: '🇷​', S: '🇸​', T: '🇹​',
  U: '🇺​', V: '🇻​', W: '🇼​', X: '🇽​', Y: '🇾​', Z: '🇿​',
  a: '🇦​', b: '🇧​', c: '🇨​', d: '🇩​', e: '🇪​', f: '🇫​', g: '🇬​', h: '🇭​', i: '🇮​', j: '🇯​',
  k: '🇰​', l: '🇱​', m: '🇲​', n: '🇳​', o: '🇴​', p: '🇵​', q: '🇶​', r: '🇷​', s: '🇸​', t: '🇹​',
  u: '🇺​', v: '🇻​', w: '🇼​', x: '🇽​', y: '🇾​', z: '🇿​',
}

const AVAILABLE_TYPES = {
  // Supported only on mac as I know
  b: BOLD,
  i: ITALIC,
  bi: BOLD_ITALIC,
  m: MONOSPACE,
  ss: SS_REGULAR,
  ssb: SS_BOLD,
  ssi: SS_ITALIC,
  ssbi: SS_BOLD_ITALIC,
  bs: BOLD_SCRIPT,
  // Supported everywhere
  fw: FULL_WIDTH,
  sq: SQUARED,
  sc: SMALL_CAPS,
  ci: CIRCLED,
  rg: REGIONAL,
};

function formatAll(text, formatter) {
  const res = text.split('').map(ch => (formatter[ch] || ch));
  return res.join('');
}

function formatPart(part, type, symbolRegex, font) {
  const result = [];
  if (font === 'ss' && type !== 'm') {
    result.push(formatAll(part, AVAILABLE_TYPES.ss));
    result.push(formatAll(part.replace(symbolRegex, ''), AVAILABLE_TYPES[`ss${type}`]));
  } else {
    result.push(part);
    result.push(formatAll(part.replace(symbolRegex, ''), AVAILABLE_TYPES[type]));
  }
  return result;
}

function markdownParser(text, font) {
  let result = text;
  let bold = text.match(/(\*[^\*]+\*)/g);
  if (bold) {
    bold = bold.map(b => formatPart(b, 'b', /\*/g, font));
  }
  let mono = text.match(/(`[^`]+`)|(```[^`]+```)/g);
  if (mono) {
    mono = mono.map(m => formatPart(m, 'm', /`/g, font));
  }
  let italic = text.match(/(_[^_]+_)/g);
  if (italic) {
    italic = italic.map(i => formatPart(i, 'i', /_/g, font));
  }
  if (font === 'ss') {
    result = formatAll(result, AVAILABLE_TYPES.ss);
  }
  if (bold) {
    bold.forEach(repl => {
      result = result.replace(repl[0], repl[1]);
    });
  }
  if (mono) {
    mono.forEach(repl => {
      result = result.replace(repl[0], repl[1]);
    });
  }
  if (italic) {
    italic.forEach(repl => {
      result = result.replace(repl[0], repl[1]);
    });
  }
  return result;
}

function markdownCompatibleParser(text) {
  let result = text;
  let bold = text.match(/(\*[^\*]+\*)|(_[^_]+_)|(`[^`]+`)|(```[^`]+```)/g);
  if (bold) {
    bold = bold.map(b => formatPart(b, 'sc', /\*|_|`/g));
  }
  let reg = text.match(/(~[^~]+~)/g);
  if (reg) {
    reg = reg.map(r => formatPart(r, 'rg', /~/g));
  }
  let squared = text.match(/(\[\][^\[]+\[\])/g);
  if (squared) {
    squared = squared.map(i => formatPart(i, 'sq', /\[\]/g));
  }
  let circled = text.match(/(\(\)[^\(]+\(\))/g);
  if (circled) {
    circled = circled.map(i => formatPart(i, 'ci', /\(\)/g));
  }
  if (bold) {
    bold.forEach(repl => {
      result = result.replace(repl[0], repl[1]);
    });
  }
  if (reg) {
    reg.forEach(repl => {
      result = result.replace(repl[0], repl[1]);
    });
  }
  if (squared) {
    squared.forEach(repl => {
      result = result.replace(repl[0], repl[1]);
    });
  }
  if (circled) {
    circled.forEach(repl => {
      result = result.replace(repl[0], repl[1]);
    });
  }
  return result;
}

const AVAILABLE_PARSERS = {
  md: markdownParser,
  mdc: markdownCompatibleParser,
};

function format(text, opts = {}) {
  const formatter = AVAILABLE_TYPES[opts.to];
  const parser = AVAILABLE_PARSERS[opts.parser];
  if (formatter) {
    return formatAll(text, formatter);
  } else if (parser) {
    return parser(text, opts.font);
  }
  return markdownCompatibleParser(text, opts.font);
}

module.exports = {
  format: format,
};
