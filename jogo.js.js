// Número secreto entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Número máximo de tentativas
let maxTentativas = 10;
let tentativasRestantes = maxTentativas;

document.getElementById('tentativas').innerText =
  'Tentativas restantes: ' + tentativasRestantes;

function chutar() {
  let palpite = parseInt(document.getElementById('palpite').value);
  let mensagem = document.getElementById('mensagem');

  // Validação
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.innerText = '⚠️ Digite um número válido entre 1 e 100!';
    return;
  }

  // Verifica se ainda há tentativas
  if (tentativasRestantes <= 0) {
    mensagem.innerText =
      '❌ Você perdeu! O número secreto era ' + numeroSecreto;
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.innerText = '🎉 Você acertou! Parabéns!';
    document.getElementById('tentativas').innerText =
      'Tentativas restantes: ' + tentativasRestantes;
    return;
  } else if (palpite < numeroSecreto) {
    mensagem.innerText = '📈 O número secreto é MAIOR';
  } else {
    mensagem.innerText = '📉 O número secreto é MENOR';
  }

  document.getElementById('tentativas').innerText =
    'Tentativas restantes: ' + tentativasRestantes;

  // Verifica se acabou
  if (tentativasRestantes === 0) {
    mensagem.innerText =
      '❌ Você perdeu! O número secreto era ' + numeroSecreto;
  }
}
function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = maxTentativas;

  document.getElementById('palpite').value = '';
  document.getElementById('mensagem').innerText =
    '🔁 Jogo reiniciado! Tente adivinhar o novo número.';
  document.getElementById('tentativas').innerText =
    'Tentativas restantes: ' + tentativasRestantes;
}

