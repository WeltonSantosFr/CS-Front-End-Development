document.addEventListener('DOMContentLoaded', () => {
            // Inicializa na rota 'inicio'
            Router.navegarPara('inicio');
            
            // Mapeia cliques na navegação
            const menuLinks = document.querySelectorAll('.nav-link');
            const menuToggleMobile = document.getElementById('menu-toggle');
            
            menuLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); // Evita reload
                    const rota = link.getAttribute('data-route');
                    
                    Router.navegarPara(rota);
                    
                    // Fecha menu hamburguer no mobile
                    if(menuToggleMobile.checked) {
                        menuToggleMobile.checked = false;
                    }
                });
            });
        });