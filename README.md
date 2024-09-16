Задание 6

На одном из корпоративных мероприятий сотрудникам предложили конкурс: “Кто придумает больше всех палиндромов”.
Однако проверку хотелось бы автоматизировать.
Напишите функцию, которая бы проверяла, является ли фраза, придуманная сотрудниками палиндромом.
Знаки препинания необходимо игнорировать. Пустую строку можно считать палиндромом.

    Примеры:
    palindromeCheck("Amore, Roma"); // вернет "valid"
    palindromeCheck("A man, a plan, a canal: Panama"); // вернет "valid"
    palindromeCheck("No 'x' in 'Nixon'"); // вернет "valid"
    palindromeCheck("Abba Zabba, you're my only friend"); // вернет "invalid"



console.log(palindromeCheck("Amore, Roma")); // вернет "valid"
console.log(palindromeCheck("A man, a plan, a canal: Panama")); // вернет "valid"
console.log(palindromeCheck("No 'x' in 'Nixon'")); // вернет "valid"
console.log(palindromeCheck("Abba Zabba, you're my only friend")); // вернет "invalid" 