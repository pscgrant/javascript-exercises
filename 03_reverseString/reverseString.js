const reverseString = function(str) {
  var splitString = str.split(""); // This puts the string into an array
  var reverseArray = splitString.reverse(); // reverses the original array
  var joinArray = reverseArray.join("");// joins the array into string
  return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
