function convertToCamelCase (t) {
let text = t.split("");
let result = "";
for (let i=0;i<text.length;i++) {
    if (text[i] === "-"){
    result+=text[i+1].toUpperCase();
    i++;}
    else result+=text[i]; 
}
  
return result; 
}

console.log(convertToCamelCase("the-stealth-warrior")); // вернет "theStealthWarrior"