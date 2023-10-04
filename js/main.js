let numOrStr = prompt('input number or string');
console.log(numOrStr);
switch(true) {
  case (+numOrStr > 0 || +numOrStr < 0) && isNaN(+numOrStr) === false:
  case Number.parseInt(numOrStr) === 0:
    console.log('Number');
    break;
  case numOrStr === null:
    console.log('ви скасували');
    break;
  case numOrStr.trim() === '':
    console.log('Empty string');
    break;
  case isNaN(+numOrStr):
    console.log('number is Ba_NaN');
    break;
  default:
    console.log('OK!');
}