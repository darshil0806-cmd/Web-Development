// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
function countVowels(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {            
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
let inputString = "Hello World!";
let vowelCount = countVowels(inputString);
console.log(vowelCount);