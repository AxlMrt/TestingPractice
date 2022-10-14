export function capitalize(word){
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

export function reverseStr(str){
    return str.split('').reverse().join('');
}

export function calcul(op, a, b){
    switch(op){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

export function caesarCipher(str, key){
    return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
}

export function analyzeArray(array){
  const max = Math.max(...array);
  const min = Math.min(...array);
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  const length = array.length;

  const analyzedArr = {
    average: average,
    min: min,
    max: max,
    length: length,
  }

  return analyzedArr;
}