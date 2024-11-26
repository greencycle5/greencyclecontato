// Selecionando os elementos do formulário
const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.querySelector('.submit-button');

// Função para validar o formulário
function validateForm() {
    // Verificando se os campos estão preenchidos
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Verificando o formato do e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Se o formulário for válido, retornar verdadeiro
    return true;
}

// Função para enviar o formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    if (validateForm()) {
        // Caso o formulário seja válido, mostrar uma mensagem de sucesso
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");

        // Limpar os campos do formulário após o envio
        form.reset();
    } else {
        // Caso o formulário não seja válido, exibir uma mensagem de erro
        alert("Houve um erro ao enviar o formulário. Verifique os campos.");
    }
}

// Adicionando um ouvinte de evento ao botão de envio
form.addEventListener('submit', handleFormSubmit);
