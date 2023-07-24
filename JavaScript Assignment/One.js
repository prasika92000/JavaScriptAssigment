// Function to check whether a number is prime or not
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
  
    return true;
  }
  
  // Function to find the sum of Fibonacci series up to n
  function fibonacciSum(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
  
    let prev = 0;
    let current = 1;
    let sum = 1;
  
    for (let i = 2; i <= n; i++) {
      const next = prev + current;
      sum += next;
      prev = current;
      current = next;
    }
  
    return sum;
  }
  
  // Function to find count of even, odd, and zero in an array
  function countEvenOddZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    return { evenCount, oddCount, zeroCount };
  }
  
  // Test the functions
  const numberToCheck = 18;
  const fibonacciNum = 5;
  const numbersArray = [3, 6, 24,903, 88, 17, 6, 0, 101,129,0,546,177];
  
  console.log(`Is ${numberToCheck} prime? ${isPrime(numberToCheck) ? 'Yes' : 'No'}`);
  console.log(`Sum of Fibonacci series up to ${fibonacciNum}: ${fibonacciSum(fibonacciNum)}`);
  const counts = countEvenOddZero(numbersArray);
  console.log(`Even count: ${counts.evenCount}`);
  console.log(`Odd count: ${counts.oddCount}`);
  console.log(`Zero count: ${counts.zeroCount}`);
  