/*EASY: An app with a function which returns the number of characters in a 
string and returns the first character in the string

*/

// created function called words thats passes in a characters parameter

const words = function(characters) {
  
  
    
  // here we return  the length of our characters parameter 
  // this gives us how many single characters are in  a word
  return characters.length ;
  
};
  // exports words so we can import(or require) it in our testing file
  module.exports = words;