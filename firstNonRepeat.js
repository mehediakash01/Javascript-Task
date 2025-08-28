// Problem: Find the First Non-Repeating Character in a String
// Write a function that takes a string as input and returns 
// the first non-repeating character. If all characters repeat, return null.

const handleNonRepeat = (str) => {
  const freq = {};

  // Count frequency of each character (case insensitive)
  for (let ch of str.toLowerCase()) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Find the first character that occurs only once
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (freq[ch] === 1) {
      return str[i]; // return in original case
    }
  }

  return null;
};

// Test cases
console.log(handleNonRepeat("Akash"));   // → k
console.log(handleNonRepeat("aabbcc"));  // → null
console.log(handleNonRepeat("Swiss"));   // → w
