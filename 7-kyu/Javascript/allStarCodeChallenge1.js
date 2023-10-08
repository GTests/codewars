// 7kyu
// All Star Code Challenge #1
// https://www.codewars.com/kata/5863f97fb3a675d9a700003f

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// Tags: split(), filter()

/*
  Finds count of a given letter in the input string
  
  @param {string} - str is the input string
  @letter {string} - letter is the character to look for
  
  @return {number} is the total occurences of a given letter
*/
function strCount(str, letter) {
    const matchingCharArr = str.split('').filter((char) => char.toLowerCase() === letter.toLowerCase());
    return matchingCharArr.length;
}
