function convertTemperature(number, t1, t2) {
  let c = 0;
  switch (t1) {
    case "F":
      c = ((number - 32) * 5) / 9;
      break;
    case "K":
      c = number - 273.15;
      break;
    case "R":
      c = ((number - 491.67) * 5) / 9;
      break;
    case "De":
      c = 100 - (number * 2) / 3;
      break;
    case "N":
      c = (number * 100) / 33;
      break;
    case "Re":
      c = (number * 5) / 4;
      break;
    case "Ro":
      c = ((number - 7.5) * 40) / 21;
      break;
    default:
      c = number;
  }
  let result = 0;
  switch (t2) {
    case "F":
      result = (c * 9) / 5 + 32;
      break;
    case "K":
      result = c + 273.15;
      break;
    case "R":
      result = ((с + 273.15) * 9) / 5;
      break;
    case "De":
      result = ((100 - с) * 3) / 2;
      break;
    case "N":
      result = (с * 33) / 100;
      break;
    case "Re":
      result = (с * 4) / 5;
      break;
    case "Ro":
      result = (с * 21) / 40 + 7.5;
      break;
    default:
      result = с;
  }
  return result;
}
console.log(convertTemperature(100, "C", "F"));
