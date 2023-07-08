const primeiroNome = prompt("Informe o primeiro nome:");
const sobrenome = prompt("Informe o seu sobrenome:");
const campoDeEstudo = prompt("Informe o seu campo de estudo:");
const AnoDeNascimento = prompt("Informe sua data de nascimento:");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome Completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    (2023 - AnoDeNascimento)
);
