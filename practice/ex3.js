function reverseString(str){
    var listOfChars = str.split('');
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join('');
    return reversedString;
  }
  
  function isStringPalindrome(str){
    var reversedString = reverseString(str);
    return str === reversedString;
  }
  
  function getDateAsString(date){
    var dateInStr = {day: '', month: '', year: ''};
  
    if(date.day < 10){
      dateInStr.day = '0' + date.day;
     }
    else {
      dateInStr.day = date.day.toString();
    }
    
    if(date.month < 10){
      dateInStr.month = '0' + date.month;
    }
    else {
      dateInStr.month = date.month.toString();
    }
    
    dateInStr.year = date.year.toString();
    return dateInStr;
  }
  
  