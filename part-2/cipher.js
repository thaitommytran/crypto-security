const cipher = (inputStr) => {
  let vowels = "aeiouy";
  let reversedVowels = "yuoiea";
  let result = "";

  for (let i = 0; i < inputStr.length; i++) {
    if (!vowels.includes(inputStr[i])) {
      result += inputStr[i];
    } else {
      for (let j = 0; j < vowels.length; j++) {
        if (inputStr[i] === vowels[j]) {
          result += reversedVowels[j];
        }
      }
    }
  }

  return result;
};

console.log("[originalMessage]:", "I love cryptography!");
console.log("[cipheredMessage]:", cipher("I love cryptography!"));
