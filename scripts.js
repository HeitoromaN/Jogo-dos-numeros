let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

document.getElementById('submit').addEventListener('click', function() {
  let guess = document.getElementById('guess').value;

  if(guess == randomNumber) {
    document.getElementById('resultMessage').textContent = 'Parabéns! Você acertou!';
    resultMessage.style.color = 'green';
    resultMessage.style.fontWeight = 'bold';
  } else {
    attempts--;

    if(attempts > 0) {
      if(guess > randomNumber) {
        document.getElementById('resultMessage').textContent = 'Tente um número menor!';
        resultMessage.style.color = 'orange';
      } else {
        document.getElementById('resultMessage').textContent = 'Tente um número maior!';
        resultMessage.style.color = 'orange';
      }
      document.getElementById('tentativasMensagem').textContent = 'Você tem ' + attempts + ' tentativas restantes.';
    } else {
      document.getElementById('resultMessage').textContent = 'Game Over! O número era ' + randomNumber + '.';
      resultMessage.style.color = 'red';
    }
  }
});