function pow(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else if (exponent === 1) {
      return base;
    } else if (exponent < 0) {
      return 1 / pow(base, -exponent);
    } else if (exponent % 2 === 0) {
      let result = pow(base, exponent / 2);
      return result * result;
    } else {
      return base * pow(base, exponent - 1);
    }
}

function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
}

function maxDigit(n) {
    if (n < 10) {
      return n;
    }
    let firstDigit = n % 10;
    let restDigits = Math.floor(n / 10);
    let maxRestDigit = maxDigit(restDigits);
    
    return Math.max(firstDigit, maxRestDigit);
}

function isPrime(num, divisor = 2) {
    if (num <= 2) {
      return (num === 2) ? true : false;
    }
    
    if (num % divisor === 0) {
      return false;
    } else if (divisor < Math.sqrt(num)) {
      return isPrime(num, divisor + 1);
    }
    
    return true;
}

function printFactors(num, factor = 2) {
    if (num < factor) {
      return;
    }
    
    if (num % factor === 0) {
      console.log(factor);
      printFactors(num / factor, factor);
    } else {
      printFactors(num, factor + 1);
    }
}

function fibonacci(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    
    return fibonacci(n-1) + fibonacci(n-2);
}



document.addEventListener("DOMContentLoaded", () => {

    
})