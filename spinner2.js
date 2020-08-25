process.stdout.write('hello from spinner1.js...\rheyyy\n');
let timeDifference = 100;
let animeChar = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

animeChar.forEach((char) => {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeDifference);
  timeDifference += 200;
  })


// for...of before using forEach

//for (const char of animeChar) {
//  setTimeout(() => {
//    process.stdout.write(char);
//  }, timeDifference);
//  timeDifference += 200;
//}


/* this is the original spinner1 code
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);


setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);
*/