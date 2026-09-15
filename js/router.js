import { UI } from './ui.js';

export const Router = {
            container: document.getElementById('app-container'),
            
            // Renderiza a rota e acopla eventos específicos
            navegarPara: function(rota) {
                console.log(`Navegando para: ${rota}`);
                
                // Limpa o contêiner
                this.container.innerHTML = '';
                
                // Renderiza o template correspondente
                switch(rota) {
                    case 'projetos':
                        this.container.innerHTML = UI.renderProjetos();
                        this.atarEventosProjetos();
                        break;
                    case 'voluntariado':
                        this.container.innerHTML = UI.renderVoluntariado();
                        this.atarEventosVoluntariado();
                        break;
                    case 'doar':
                        this.container.innerHTML = UI.renderDoar();
                        this.atarEventosDoacao();
                        break;
                    case 'inicio':
                    default:
                        this.container.innerHTML = UI.renderInicio();
                        break;
                }
                
                // Atualiza classe ativa no menu
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('data-route') === rota) {
                        link.classList.add('active');
                    }
                });

                // Gerenciamento de foco acessível para leitores de tela
                const heading = this.container.querySelector('h2');
                if (heading) {
                    heading.setAttribute('tabindex', '-1');
                    heading.focus();
                }
            },
            
            // EVENTOS DA PÁGINA PROJETOS
            atarEventosProjetos: function() {
                const botoes = document.querySelectorAll('.btn-doar');
                botoes.forEach(btn => {
                    btn.addEventListener('click', () => {
                        this.navegarPara('doar'); // Redireciona para doação
                    });
                });
            },

            // EVENTOS DA PÁGINA VOLUNTARIADO
            atarEventosVoluntariado: function() {
                const form = document.getElementById('form-voluntario');
                if(form) {
                    form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        
                        // Captura dados (Exigência do trabalho)
                        const dados = {
                            nome: document.getElementById('nome').value,
                            email: document.getElementById('email').value,
                            area: document.getElementById('area').value
                        };
                        
                        // Salva no LocalStorage
                        Storage.salvarRegistro('voluntarios', dados);
                        
                        // Mostra feedback visual
                        UI.mostrarToast("Inscrição Recebida!", `Obrigado, ${dados.nome.split(' ')[0]}. Nossa equipe entrará em contato.`);
                        
                        // Limpa o form
                        form.reset();
                    });
                }
            },
            
            // EVENTOS DA PÁGINA DOAÇÃO
            atarEventosDoacao: function() {
                 const form = document.getElementById('form-doacao');
                 if(form) {
                    form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        
                        const nome = document.getElementById('nome-doador').value || "Doador Anônimo";
                        const valor = document.getElementById('valor').value;
                        
                        Storage.salvarRegistro('doacoes', { nome, valor });
                        
                        UI.mostrarToast("Chave PIX Gerada!", `Valor: R$ ${valor}. Escaneie o QR Code no seu app.`);

                        if (typeof confetti === 'function') {
                            confetti({
                                particleCount: 150,
                                spread: 70,
                                origin: { y: 0.6 },
                                colors: ['#0066ff', '#10b981', '#ffffff']
                            });
                        }
                        
                        form.reset();
                    });
                 }
            }
        };