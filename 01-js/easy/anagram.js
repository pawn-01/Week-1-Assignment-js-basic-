/*

  <----- DONE -------->

  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function check(arrcap, arrsmall, str1){
  for(let i = 0; i<str1.length ; i++){
    let chr = str1[i]; 
    let  a = chr.toLowerCase().charCodeAt(0);

     if(a>='a'.charCodeAt(0) && a<='z'.charCodeAt(0)){
       a = a-'a'.charCodeAt(0)
       if(arrsmall[a]!=0) arrsmall[a]--;
       else return false;
      }
  
}
  return true;
}

function isAnagram(str1, str2) {
     if(str1.length!=str2.length) return false;
     let arrsmall = new Array(26).fill(0)
     let arrcap = new Array(26).fill(0);

     for(let i = 0; i<str1.length ; i++){
         let chr = str1[i]; 
         let  a = chr.toLowerCase().charCodeAt(0);
    
          if(a>='a'.charCodeAt(0) && a<='z'.charCodeAt(0)){
            a = a-'a'.charCodeAt(0)
            arrsmall[a]++;
           }
         }
     
 
   
   return check(arrcap,arrsmall,str2);
}

isAnagram("","clh");

module.exports = isAnagram;
