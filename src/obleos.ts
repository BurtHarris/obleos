import {dcCode} from './sigils'
export * from './sigils'

export function obleos(...x: TemplateStringsArray[]) {
    var lines =  x.join().split('\n');
    var result = lines.filter( line => {
        if (line.charCodeAt(0) == dcCode) {
            console.debug( 'processing', line );
            return false;
        } else {return true;}
        });
    return result;
}

export default obleos;
