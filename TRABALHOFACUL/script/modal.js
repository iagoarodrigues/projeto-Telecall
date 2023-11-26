
        // Obtém elementos do DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

// Adiciona evento de clique para abrir o modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Adiciona evento de clique para fechar o modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Adiciona evento de clique fora do modal para fechá-lo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Adiciona evento de clique para o botão de enviar (pode adicionar lógica de envio do formulário aqui)
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    alert('Formulário enviado!'); // Adicione a lógica de envio do formulário aqui
    modal.style.display = 'none';
});
    