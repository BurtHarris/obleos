import {obleos, dc, dcCode} from './obleos';

console.clear();
console.debug('experiment begins')
console.log(`${dc} is codePoint ${dcCode} (U+${dcCode.toString(16)})}, A.K.A. DOTTED CROSS` )
console.log(obleos`
⁜ sigil
- line
- end
⁜ end
`);

obleos`⁜ done!`;
