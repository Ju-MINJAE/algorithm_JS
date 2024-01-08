// Wrtie a function which takes in a string and returns counts of each character in the string.

charCount('aaaa'); // {a:4}
charCount('hello'); // {h:1, e:1, l:2, o:1}
charCount('Your PIN number is 1234!');

function charCount(str) {
  // make object to return at end
  var results = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if the char is a number/letter AND is akey in object, add one to count
    if (results[char] > 0) {
      results[char]++;
    } else {
      // if the char is a number/letter AND not in object, add it and set value to 1
      results[char] = 1;
    }
  }
  // if character is something else (space,period, etc.) don't do anything

  // return object at end
  return results;
}

console.log(charCount('Hi there!'));
