function convertToCamelCase (t) {
return text = t.split("-").map ((word,index)=> 
index===0 ? word:word[0].toUpperCase() +word.slice(1)).join("");
}

console.log(convertToCamelCase("the-stealth-warrior")); // вернет "theStealthWarrior"