// Variáveis
const textArea = document.getElementById('text');
const speakButton = document.getElementById('speak');

// Função para converter texto em voz
function speakText() {
    const text = textArea.value.trim();
    if (text === '') {
        alert('Digite algum texto para converter em voz.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

// Adiciona evento ao botão
speakButton.addEventListener('click', speakText);
