document.getElementById('submit1').addEventListener('click', function() {
    const answer1 = document.getElementById('answer1').value.toLowerCase();
    
    if (answer1 === 'hamburgada do bem' || answer1 === 'hb' || answer1 === 'hamburgada' || answer1 === 'hamburgada do bem') {
        document.getElementById('question1').classList.add('hidden');
        document.getElementById('question2').classList.remove('hidden');
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
});

document.getElementById('submit2').addEventListener('click', function() {
    const answer2 = document.getElementById('answer2').value.toLowerCase();

    if (answer2 === 'Ilha bela' || 'ilha bela' || 'Ilhabela' || 'ilhabela') {
        document.getElementById('question2').classList.add('hidden');
        document.getElementById('question3').classList.remove('hidden');
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
});

document.getElementById('submit3').addEventListener('click', function() {
    const answer3 = document.getElementById('answer3').value.toLowerCase();

    if (answer3 === '20/02' || '20 de fevereiro') {
        document.getElementById('question3').classList.add('hidden');
        document.getElementById('poem-container').classList.remove('hidden');
        document.getElementById('location').classList.remove('hidden');
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
});

document.getElementById('submit4').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obtém o valor do input
    const inputValue = document.getElementById('finishquestion-text').value.trim().toLowerCase();

    // Verifica se a resposta está correta
    if (inputValue === "23, 9, 8, 8, 3, 8, 6, 5, 4, 3, 9, 7, 9, 6, 1, /, 46, 3, 0, 5, 4, 1, 5, 2, 4, 8, 2, 2, 4, 0, 4, 4") {
        // Se estiver correta, oculta a seção de localização
        document.getElementById('location').classList.add('hidden');
        // Mostra a mensagem final
        document.getElementById('final-message').classList.remove('hidden');
        // Adiciona o link da música
        document.getElementById('music-link').href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Link da música
        // Preenche o mapa com as coordenadas corretas
        fillMap();
    } else {
        // Se a resposta estiver incorreta, exibe uma mensagem de erro
        const errorMessage = document.getElementById('finishquestion').querySelector('.error-message');
        errorMessage.textContent = "Resposta incorreta. Tente novamente.";
        errorMessage.style.display = "block";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Exibir botão de preencher resposta após 10 segundos
    setTimeout(() => {
        const fillAnswerButton = document.getElementById('fill-answer');
        fillAnswerButton.classList.remove('hidden');
    }, 60000);

    // Preencher input com a resposta correta se não estiver preenchido
    document.getElementById('fill-answer').addEventListener('click', function() {
        const finishInput = document.getElementById('finishquestion-text');
        if (!finishInput.value.trim()) {
            finishInput.value = '23, 9, 8, 8, 3, 8, 6, 5, 4, 3, 9, 7, 9, 6, 1, /, 46, 3, 0, 5, 4, 1, 5, 2, 4, 8, 2, 2, 4, 0, 4, 4'; // Substitua pela resposta correta
        }
    });
});
