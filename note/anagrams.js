function validAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let val of str1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (let val of str2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('anagram', 'nagaram'));
