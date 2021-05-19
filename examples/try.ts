import {obleos, dc, dcCode} from '..';

console.clear();
console.debug('experiment begins')
console.log(`${dc} is codePoint ${dcCode} (U+${dcCode.toString(16)})}, A.K.A. DOTTED CROSS` )
console.log(`JSON Output:`, JSON.stringify(obleos`
⁜ sigil
- line
- end
⁜ end
`));

console.debug(`done`)

