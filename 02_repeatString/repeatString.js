const repeatString = function(string, times) {
    //creating empty string that will host the repeated string
  var repeatedString = '';
  //While loop with >0 as the condition to check
  while (times > 0) { //As long as times is greater than 0, the statement is executed
    // The statement
      repeatedString += string; // Short for repeatedString = repeatedString + string
      times--;// Short for times = times - 1
  }
  /* While loop logic
                      Condition       T/F       repeatedString += string      repeatedString        times
    First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
    Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
    Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
    Fourth iteration   (0 > 0)        false
    
  */
 // Return the repeated string
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
