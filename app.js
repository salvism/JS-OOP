/* TASK 1
Elə bir metod yazın ki parametr olaraq ancaq array qebul etsin (Array.isArray()).
Və consolda arrayın ən kiçik elementini qaytarsın */
let array = [1, 2, 3, 4];
function CheckArr(arr) {
  let minNum = array[0];

  if (Array.isArray(array)) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] < minNum) {
        minNum = array[index];
      }
    }
  } else {
    alert("not an array");
  }
  return minNum;
}

console.log(CheckArr(array));

/* TASK 2
Elə bir metod yazın ki parametr olaraq string qəbul eləsin.
və əgər stringin içərisində eyni hərf varsa eyni olanları consolda göstərsin */
let str = "Harry Potter";
let newStr = "";

let sortStr = function (str) {
  return str.toLowerCase().split("").sort().join("");
};

function CheckStr(str) {
  for (let index = 1; index < str.length; index++) {
    if (str[index] === str[index - 1]) {
      newStr += str[index];
    }
  }
  return newStr;
}

console.log(CheckStr(str));

/* TASK 3
Elə bir metod yazın ki parametr olaraq cümlə qəbul eləsin
və həmin cümlədə sözlərin sayını tapan alqoritm yazın. */
let sentenceStr = "  My name is Salvi.  ";
let count = 1;
let newSent = sentenceStr.trim();

function CountWords(newSent) {
  for (let index = 0; index < newSent.length; index++) {
    if (newSent[index] === " ") {
      count++;
    }
  }
  return count;
}

console.log(CountWords(newSent));

// EASY WAY
/* let sentenceArr = sentenceStr.split(" ");
   console.log(sentenceArr.length); */

/*TASK 4
Elə bir metod yazın ki ona bir parametr olaraq söz göndəriləcək(string)
və əgər həmin söz palindrome-dursa (yəni sondan oxunuşu əvvəldən oxunuşla eyni misal üçün ada, kiçik və s.)
bunu bildirsin(alert və ya başqa yerdə) */

let word = "kicik";

function checkPalindrome(word) {
  for (let index = 0; index < word.length / 2; index++) {
    if (word[index] !== word[word.length - 1 - index]) {
      alert("Not a palindrome");
      return;
    }
  }
  alert("Palindrome");
}

checkPalindrome(word);
