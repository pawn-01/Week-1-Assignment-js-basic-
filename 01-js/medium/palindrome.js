/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function check(str, i, j){
  if(str[i].charCodeAt(0)>='a'.charCodeAt(0) && str[i].charCodeAt(0)<='z'.charCodeAt(0) && str[j].charCodeAt(0)>='a'.charCodeAt(0) && str[j].charCodeAt(0)<='z'.charCodeAt(0)){
    return true;
  }
  return false;
}

function isPalindrome(str) {
        str = str.toLowerCase(); 
        let  i = 0;
        let j = str.length-1;
        while(i<=j){
            if(check(str,i,j)){
                if(str[i]!=str[j]) return false;
                   i++;
                   j--;
            }
            else if(str[i].charCodeAt(0)<'a'.charCodeAt(0) || str[i].charCodeAt(0)>'z'.charCodeAt(0)){
                   i++;
            }
            else{
              j--;
            }
        }
    return true
}

module.exports = isPalindrome;
