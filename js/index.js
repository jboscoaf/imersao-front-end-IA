// Alternância entre dark e light mode
//alert('Bem-vindo à Netflix!');
console.log('Bem-vindo à Netflix!');

document.addEventListener('DOMContentLoaded', function () {
    // Cria o botão dinamicamente se não existir
    let btn = document.getElementById('toggle-mode');
    const body = document.body;
    function setIcon(isLight) {
        const icon = document.getElementById('toggle-icon');
        if (icon) {
            if (isLight) {
                icon.innerHTML = '<svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="gold" style="vertical-align:middle;"><path d="M21 12.79A9 9 0 0 1 12.79 3a1 1 0 0 0-1.13 1.32A7 7 0 1 0 19.68 14.34a1 1 0 0 0 1.32-1.13Z"/></svg>';
            } else {
                icon.innerHTML = '<svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="orange" style="vertical-align:middle;"><circle cx="12" cy="12" r="5"/><g stroke="orange" stroke-width="2"><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>';
            }
        }
    }
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'toggle-mode';
        btn.innerHTML = '<span id="toggle-icon" style="font-size:1.5rem;">' +
            '<svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="orange" style="vertical-align:middle;"><circle cx="12" cy="12" r="5"/><g stroke="orange" stroke-width="2"><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>' +
            '</span>';
        btn.style.position = 'fixed';
        btn.style.top = '1.5rem';
        btn.style.right = '2rem';
        btn.style.zIndex = '1000';
        btn.style.padding = '0.5rem 1.2rem';
        btn.style.borderRadius = '6px';
        btn.style.border = 'none';
        btn.style.background = '#222';
        btn.style.color = '#fff';
        btn.style.fontSize = '1rem';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'background 0.2s, color 0.2s';
        document.body.appendChild(btn);
    } else {
        btn.innerHTML = '<span id="toggle-icon" style="font-size:1.5rem;">' +
            '<svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="orange" style="vertical-align:middle;"><circle cx="12" cy="12" r="5"/><g stroke="orange" stroke-width="2"><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>' +
            '</span>';
        btn.style.position = 'fixed';
        btn.style.top = '1.5rem';
        btn.style.right = '2rem';
        btn.style.zIndex = '1000';
    }
    btn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        setIcon(body.classList.contains('light-mode'));
        if (body.classList.contains('light-mode')) {
            btn.style.background = '#fff';
            btn.style.color = '#222';
        } else {
            btn.style.background = '#222';
            btn.style.color = '#fff';
        }
    });
    // Corrige o ícone ao recarregar a página
    setIcon(body.classList.contains('light-mode'));

    // Ao clicar nas imagens dos perfis, abre o catálogo
    const perfis = [
        'profile-maria',
        'profile-joao',
        'profile-pedro'
    ];
    perfis.forEach(function(id) {
        const img = document.getElementById(id);
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function () {
                // Descobre o nome e a imagem do perfil
                const figcaption = img.parentElement.querySelector('figcaption');
                const nome = figcaption ? figcaption.textContent : '';
                const imagem = img.getAttribute('src');
                // Salva no localStorage
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imagem);
                window.location.href = 'catalogo/catalogo.html';
            });
        }
    });
});
