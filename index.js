//Fonctions de manipulation de chaînes de caractères
//Inverser une chaîne

function reverseString(str) {
  return str.split("").reverse().join("");
}

//Compter les caractères

function countCharacters(str) {
  return str.length;
}

//Mettre en majuscule chaque mot

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

//Fonctions sur les tableaux
//Trouver le maximum

function findMax(arr) {
  return Math.max(...arr);
}

//Trouver le minimum

function findMin(arr) {
  return Math.min(...arr);
}

//Somme d’un tableau

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

//Filtrer un tableau

function filterArray(arr, condition) {
  return arr.filter(condition);
}

//Fonctions mathématiques
//Factorielle

function factorial(n) {
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//Vérifier si un nombre est premier

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

//Suite de Fibonacci

function fibonacci(n) {
  if (n <= 0) return [];

  if (n === 1) return [0];

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}