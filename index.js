// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); */

function writeCards(names,event) {
    let arr = []
    for (let i = 0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        arr.push(message);
        debugger;
    }
    return arr;
}


function countDown (int) {
    while (int >= 0) {
        console.log(int);
        int--
    }
    return int;
} 

