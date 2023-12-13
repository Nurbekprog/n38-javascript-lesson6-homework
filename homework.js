// Func1
// function power(a, n) {
//   return Math.pow(a, n);
// }

// console.log(power(3, 5));

// Func2
// function mean(a, b) {
//   const arithmeticMean = (a + b) / 2;
//   const geometricMean = Math.pow((a * b), 1 / 2);
//   return [arithmeticMean, geometricMean];
// }


// const result = mean(12, 48);
// console.log("Arithmetic Mean:", result[0]); 
// console.log("Geometric Mean:", result[1]); 

// Func3
// function sign(n) {
//   if (n > 0) {
//     return 1;
//   } else if (n < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// console.log(sign(10)); 

// Func4
// function numberOfRoots(A, B, C) {
//   const discriminant = B**2 - 4*A*C;

//   if (discriminant > 0) {
//     return 2;
//   } else if (discriminant === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(numberOfRoots(1, -6, 9)); 

// Func5
// function areaCircle(R) {
//   const pi = Math.PI;
//   return pi * Math.pow(R, 2);
// }

// console.log(areaCircle(5)); 

// Func6
// function sumRange(A, B) {
//   if (A > B) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = A; i <= B; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumRange(8, 10)); 

// Func7
// function calc(A, B, S) {
//   switch (S) {
//     case "+":
//       return A + B;
//     case "-":
//       return A - B;
//     case "*":
//       return A * B;
//     case "/":
//       return B !== 0 ? A / B : 0;
//     default:
//       return 0;
//   }
// }

// console.log(calc(10, 15, "*")); 
// console.log(calc(7, 8, "+")); 

// Func8

// function isEven(K) {
//   return K % 2 === 0;
// }

// console.log(isEven(10)); 

// Func9
// function sortABC(a, b, c) {
//   const smallest = Math.min(a, b, c);
//   const largest = Math.max(a, b, c);
//   const middle = a + b + c - smallest - largest;
//   console.log(smallest + ', ' + middle + ', ' + largest);
// }

// sortABC(10, 5, 8);

// Func10
// function isPowerN(K, N) {
//   if (K > 0 && Number.isInteger(K) && N > 0 && Number.isInteger(N)) {
//     return Number.isInteger(Math.pow(K, 1 / N));
//   } else {
//     return false;
//   }
// }
// console.log(isPowerN(8, 2));  
// console.log(isPowerN(27, 3));  
// console.log(isPowerN(5, 2));  

// Func11
// function isPrime(N) {
//   if (N <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(7)); 
// console.log(isPrime(14)); 

// Func12
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function numberOfPrime(N) {
//   let count = 0;

//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(numberOfPrime(10)); 

// Func13
// function digitCount(num) {
//   return num.toString().length;
// }

// function digitNth(K, N) {
//   const numDigits = digitCount(K);

//   if (N > numDigits) {
//     return -1;
//   }

//   const strK = K.toString();
//   const digit = parseInt(strK[numDigits - N]);

//   return digit;
// }

// console.log(digitNth(105782, 5)); 
// console.log(digitNth(1057, 5)); 

// Func14
// function inverseNumber(N) {
//   const strN = N.toString();
//   const inverseStr = strN.split('').reverse().join('');
//   const inverseNum = parseInt(inverseStr);
//   return inverseNum;
// }

// console.log(inverseNumber(56814)); 

// Func15
// function inverseNumber(N) {
//   const strN = N.toString();
//   const inverseStr = strN.split('').reverse().join('');
//   const inverseNum = parseInt(inverseStr);
//   return inverseNum;
// }

// function isPalindrom(N) {
//   const inverseN = inverseNumber(N);
//   return N === inverseN;
// }

// console.log(isPalindrom(1678761));  
// console.log(isPalindrom(12345));  

// Func16
// function factorial(N) {
//   if (N < 0) {
//     return 1;
//   }

//   let result = 1;
//   for (let i = 1; i <= N; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5)); 
// console.log(factorial(-3));

// Func17
// function getSum3(N) {
//   let sum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getSum3(15)); 

// Func18
// function sumOddEven(N) {
//   let sumOdd = 0;
//   let sumEven = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) {
//       sumEven += i;
//     } else {
//       sumOdd += i;
//     }
//   }
//   return [sumOdd, sumEven];
// }

// console.log(sumOddEven(10));

// Func19
// function invertTime(H, M, S) {
//   const totalSeconds = H * 3600 + M * 60 + S;
//   return totalSeconds;
// }

// console.log(invertTime(0, 6, 40)); 

// Func20
// function decTime(H, M, S) {
//   if (H < 0 || M < 0 || S < 0) {
//     return "Invalid time input";
//   }

//   const totalSeconds = H * 3600 + M * 60 + S;

//   if (totalSeconds === 0) {
//     return "00:00:00";
//   }
//   const newTotalSeconds = totalSeconds - 1;
//   const newH = Math.floor(newTotalSeconds / 3600);
//   const newM = Math.floor((newTotalSeconds % 3600) / 60);
//   const newS = newTotalSeconds % 60;
//   const formattedTime =
//     String(newH).padStart(2, "0") +
//     ":" +
//     String(newM).padStart(2, "0") +
//     ":" +
//     String(newS).padStart(2, "0");
//   return formattedTime;
// }

// console.log(decTime(0, 6, 40));

// Func21
// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// console.log(isLeapYear(2020));  
// console.log(isLeapYear(2023));

// Func22
// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//   // Oylar soni
//   const daysInMonth = [
//     31, // Yanvar
//     isLeapYear(Y) ? 29 : 28, // Fevral (kabisa yili bo'lsa 29, aks holda 28 kun)
//     31, // Mart
//     30, // Aprel
//     31, // May
//     30, // Iyun
//     31, // Iyul
//     31, // Avgust
//     30, // Sentabr
//     31, // Oktabr
//     30, // Noyabr
//     31, // Dekabr
//   ];

//   return daysInMonth[M - 1];
// }

// // Test qilish
// console.log(monthDays(2, 2020)); // Natija: 29
// console.log(monthDays(3, 2021)); // Natija: 31

// Func23
// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//   const daysInMonth = [
//     31, // Yanvar
//     isLeapYear(Y) ? 29 : 28, // Fevral (kabisa yili bo'lsa 29, aks holda 28 kun)
//     31, // Mart
//     30, // Aprel
//     31, // May
//     30, // Iyun
//     31, // Iyul
//     31, // Avgust
//     30, // Sentabr
//     31, // Oktabr
//     30, // Noyabr
//     31, // Dekabr
//   ];

//   return daysInMonth[M - 1];
// }

// function prevDate(D, M, Y) {
//   // Oyning birinchi kunidan oldingi kunni aniqlash
//   let prevDay = D - 1;
//   let prevMonth = M;
//   let prevYear = Y;

//   if (prevDay === 0) {
//     // Agar kun birinchi kunga teng bo'lsa, oldingi oyning oxirgi kuni
//     prevMonth -= 1;
//     if (prevMonth === 0) {
//       // Agar oy birinchi oygacha teng bo'lsa, oldingi yilning dekabr oyining oxirgi kuni
//       prevYear -= 1;
//       prevMonth = 12;
//     }
//     // Oldingi oyning oxirgi kuni
//     prevDay = monthDays(prevMonth, prevYear);
//   }

//   const formattedPrevDate =
//     String(prevDay).padStart(2, "0") +
//     "." +
//     String(prevMonth).padStart(2, "0") +
//     "." +
//     String(prevYear);

//   return formattedPrevDate;
// }

// // Test qilish
// console.log(prevDate(10, 3, 2022)); // Natija: "09.03.2022"

// Func24
// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//   const daysInMonth = [
//     31, // Yanvar
//     isLeapYear(Y) ? 29 : 28, // Fevral (kabisa yili bo'lsa 29, aks holda 28 kun)
//     31, // Mart
//     30, // Aprel
//     31, // May
//     30, // Iyun
//     31, // Iyul
//     31, // Avgust
//     30, // Sentabr
//     31, // Oktabr
//     30, // Noyabr
//     31, // Dekabr
//   ];

//   return daysInMonth[M - 1];
// }
// function nextDate(D, M, Y) {
//   const daysInMonthCurrent = monthDays(M, Y);
//   let nextDay = D + 1;
//   let nextMonth = M;
//   let nextYear = Y;
//   if (nextDay > daysInMonthCurrent) {
//     nextMonth += 1;
//     if (nextMonth > 12) {
//       nextYear += 1;
//       nextMonth = 1;
//     }
//     nextDay = 1;
//   }
//   const formattedNextDate =
//     String(nextDay).padStart(2, "0") +
//     "." +
//     String(nextMonth).padStart(2, "0") +
//     "." +
//     String(nextYear);

//   return formattedNextDate;
// }
// console.log(nextDate(10, 3, 2022));

// Func25
// function getDividersNumberAndSum(N) {
//   let dividersCount = 0;
//   let dividersSum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       dividersCount++;
//       dividersSum += i;
//     }
//   }
//   return [dividersCount, dividersSum];
// }
// console.log(getDividersNumberAndSum(12)); 