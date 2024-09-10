let roman = [[1,"I"],   [4,"IV"],   [5,"V"],   [9,"IV"],
    [10,"X"],  [40,"XL"],  [50,"L"],  [90,"XC"],
    [100,"C"], [400,"CD"], [500,"D"], [900,"CM"],
    [1000,"M"]];

function numberTransition(number) {
let sum = "";
for (let i = roman.length - 1; i >= 0; i--) {
   while (number >= roman[i][0]) {
       sum += roman[i][1];
       number -= roman[i][0];
   }
}
return sum;
}
console.log(numberTransition(1021));