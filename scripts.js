document.querySelectorAll('.btn-pedido').forEach(btn => {
    btn.addEventListener('click', function() {
        const produto = btn.getAttribute('data-produto');  // Pega o nome do produto do atributo data-produto
        const numeroWhatsApp = '+5538999852209';  // Número de telefone com o "+" no início
        const link = `https://wa.me/${numeroWhatsApp}?text=Quero%20comprar%20o%20${encodeURIComponent(produto)}`;  // Link formatado corretamente
        window.open(link, '_blank');  // Abre o link em uma nova aba
    });
});
