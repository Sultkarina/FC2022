function palindromeCheck(text) {
  const cleanText = text.replace(/[,:' ]/g, "").toLowerCase();
  const reversed = cleanText.split("").reverse().join("");
  return cleanText == reversed ? "valid" : "invalid";
}

console.log(palindromeCheck("Amore, Roma")); // вернет "valid"
console.log(palindromeCheck("A man, a plan, a canal: Panama")); // вернет "valid"
console.log(palindromeCheck("No 'x' in 'Nixon'")); // вернет "valid"
console.log(palindromeCheck("Abba Zabba, you're my only friend")); // вернет "invalid"
