const entrada1 = prompt("  Informe o primeiro número");
const entrada2 = prompt("  Informe o segundo número");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtr = x - y;
const div = x / y;
const multi = x * y;

alert(
  "Resultado:\n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtr +
    "\nDivisão: " +
    div +
    "\nMultiplicação: " +
    multi
);
