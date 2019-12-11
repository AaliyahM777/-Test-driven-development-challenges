//EASY:and returns the first character in the string

// created second function  firstchar with a function passing in letter
const firstchar = function(letter) {
  
   
  // returns the first characters for our letter parameter
  // this will give us the first character of any word
  return letter.charAt(0);
  
};
  // will help allows us to import(require) firstchar to testing file
  module.exports = firstchar;