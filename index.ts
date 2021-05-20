import {dcCode} from './internal/sigils'
export * from './internal/sigils'

function trace( ...x: TemplateStringsArray[]) {
  console.trace(x.join())
}

export function obleos(x: TemplateStringsArray[]) {
  trace `${( args )}`
    var lines =  x.join().split('\n');
    var result = lines.filter( line => {
        if (line.charCodeAt(0) == dcCode) {
            console.debug( 'processing', line );
            return false;
        } else {return true;}
        }).join('');
    return result;
}

export default obleos;
