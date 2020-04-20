// Palindrome Checker

function palindrome(str) {
  var palin = str.split("").reverse().join("");

  if (palin === str) {
    return str + " is a palindrome";
  } else {
    return str + " is not a palindrome";
  }
}
palindrome("eye"); //Succeeds
palindrome("Race car"); //Fails

// Duplicate Remover

function duplicateRemover(a) {
  return a.sort().filter(function (item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });
}

duplicateRemover(["John", "Mary", "Alex", "Steve", "Mary", "John"]);

// Does Item Exist In Array

function isInArray(value, array) {
  if (array.indexOf(value) > -1) {
    return value + " is in the array";
  } else {
    return value + " is not in the array";
  }
}

isInArray(1, [1, 2, 3]); // true

// Find Largest Number In An Array

function findBigNumberArray(array) {
  var bigNumber = Math.max.apply(Math, array);
  return bigNumber + " is the biggest number";
}

findBigNumberArray(["3", "2", "100"]);

// Find Smallest Number In An Array

function findSmallNumberArray(array) {
  var smallNumber = Math.min.apply(Math, array);
  return smallNumber + " is the smallest number";
}

findSmallNumberArray(["3", "2", "100"]);

//JavaScript FizzBuzz

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      return "FizzBuzz";
    } else if (i % 3 == 0) {
      return "Fizz";
    } else if (i % 5 == 0) {
      return "Buzz";
    } else {
      return i;
    }
  }
}

fizzBuzz();

// Even Or Odd

function evenOrOdd(int) {
  if (int % 2 == 0) return int + " is even";
  else return int + " is Odd";
}

evenOrOdd(1);

// Array Sort

function sortArray(array) {
  array.sort();
  return array;
}

sortArray([2, 5, 7, 3, 1]);
