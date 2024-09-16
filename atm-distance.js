function atmDistance(count, distance, width) {
  return count > 1 ? (count - 1) * distance * 100 : 0;
}

console.log(atmDistance(1, 10, 10)); // вернет 0
console.log(atmDistance(2, 20, 25)); // вернет 2000
console.log(atmDistance(6, 10, 50)); // 5000
