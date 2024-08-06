const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morse = Object.entries(MORSE_TABLE);
    const newMorse = {};

    for(let [key, value] of morse){
        let str = '';
        for(let i of key){
            if(i === '-'){
                str += '11';
            }
            if(i === '.'){
                str += '10';
            }
        }
        if(str.length < 10){
            for(let j = str.length; j < 10; j++){
                str = '0' + str;
            }
        }
        
        newMorse[str] = value;
    }
    
    newMorse['**********'] = ' ';

    let decodeExpr = '',
        decodeLetter = '';
        
    for(let i = 0; i < expr.length; i += 10){
        decodeLetter = expr.slice(i, i + 10);
        decodeExpr += newMorse[decodeLetter];
    }

    return decodeExpr;
}

module.exports = {
    decode
}