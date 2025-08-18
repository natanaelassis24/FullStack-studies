// Variáveis do jogo
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

const inputPalpite = document.getElementById("palpite");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

function verificarPalpite() {
  const palpite = Number(inputPalpite.value);

  // Verifica se o número é válido
  if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
    mensagem.textContent = "Por favor, insira um número entre 1 e 100.";
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = "Você acertou! Parabéns!";
    desabilitarJogo();
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é maior.";
  } else {
    mensagem.textContent = "O número secreto é menor.";
  }

  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

  if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
    mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
    desabilitarJogo();
  }

  inputPalpite.value = "";
}

function desabilitarJogo() {
  inputPalpite.disabled = true;
  document.querySelector("button").disabled = true;
}
