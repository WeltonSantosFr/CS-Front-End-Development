import { Storage } from './storage.js';

export const UI = {
            // Exibe notificação
            mostrarToast: function(titulo, mensagem) {
                const toast = document.getElementById('toast-notificacao');
                document.getElementById('toast-title').textContent = titulo;
                document.getElementById('toast-message').textContent = mensagem;
                
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 4000);
            },

            // TEMPLATE: Página Inicial
            renderInicio: function() {
                return `
                    <section id="inicio" class="hero">
                        <h2>Resgatando vidas, reconstruindo lares.</h2>
                        <p>Nossa missão é resgatar animais abandonados ou vítimas de maus-tratos...</p>
                        <div class="cards-container">
                            <div class="card"><p><strong>1.420</strong> animais resgatados</p></div>
                            <div class="card"><p><strong>1.280</strong> adoções concluídas</p></div>
                            <div class="card"><p><strong>45</strong> clínicas parceiras</p></div>
                        </div>
                    </section>
                `;
            },

            // TEMPLATE: Projetos
            renderProjetos: function() {
                const projetosHtml = Storage.dadosApp.projetos.map(proj => {
                    const badgesHtml = proj.badges.map(b => `<span class="badge ${b.classe}">${b.texto}</span>`).join('');
                    return `
                        <article class="project-card">
                            <div class="badge-group">${badgesHtml}</div>
                            <h3>${proj.titulo}</h3>
                            <p>${proj.descricao}</p>
                            <button class="btn-primary w-100 btn-doar" aria-label="Apoiar Projeto: ${proj.titulo}">Apoiar Projeto</button>
                        </article>
                    `;
                }).join('');

                return `
                    <section id="projetos" class="projects">
                        <h2>Projetos Ativos</h2>
                        <div class="projects-list">
                            ${projetosHtml}
                        </div>
                    </section>
                `;
            },
            
            // TEMPLATE: Voluntariado com Formulário
            renderVoluntariado: function() {
                const vagasHtml = Storage.dadosApp.voluntariado.map(vaga => {
                    const badgesHtml = vaga.badges.map(b => `<span class="badge ${b.classe}">${b.texto}</span>`).join('');
                    return `
                        <article class="volunteer-card">
                            <div class="badge-group">${badgesHtml}</div>
                            <h3>${vaga.titulo}</h3>
                            <p>${vaga.descricao}</p>
                        </article>
                    `;
                }).join('');

                return `
                    <section id="voluntariado" class="volunteer">
                        <h2>Faça Parte da Nossa Equipe</h2>
                        <p>Doe seu tempo e suas habilidades para transformar a realidade de centenas de animais.</p>
                        
                        <div class="volunteer-list" style="margin-bottom: var(--spacing-xl);">
                            ${vagasHtml}
                        </div>
                        
                        <div class="card" style="max-width: 600px; margin: 0 auto; width: 100%; text-align: left;">
                            <h3 style="margin-bottom: var(--spacing-md); color: var(--color-neutral-darkest);">Inscreva-se como Voluntário</h3>
                            <form id="form-voluntario">
                                <div class="form-group">
                                    <label for="nome">Nome Completo *</label>
                                    <input type="text" id="nome" class="form-control" placeholder="Ex: João da Silva" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">E-mail *</label>
                                    <input type="email" id="email" class="form-control" placeholder="exemplo@email.com" required>
                                </div>
                                <div class="form-group">
                                    <label for="area">Área de Interesse *</label>
                                    <select id="area" class="form-control" required>
                                        <option value="" disabled selected>Selecione uma área</option>
                                        <option value="fotografia">Fotógrafo</option>
                                        <option value="passeador">Passeador / Manejo</option>
                                        <option value="eventos">Apoio em Eventos</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn-primary w-100 mt-3">Enviar Inscrição</button>
                            </form>
                        </div>
                    </section>
                `;
            },
            
            // TEMPLATE: Doação com Formulário Simples
            renderDoar: function() {
                return `
                    <section id="doar" class="donations">
                        <div class="donation-banner">
                            <h2>Ajude a Manter Nossos Resgates</h2>
                            <p>Sua contribuição garante atendimento veterinário imediato, vacinas, ração de qualidade e cirurgias emergenciais.</p>
                            
                            <div class="card" style="max-width: 500px; margin: var(--spacing-xl) auto; text-align: left;">
                                <h3 style="margin-bottom: var(--spacing-md); color: var(--color-neutral-darkest);">Fazer uma Doação (Simulação)</h3>
                                <form id="form-doacao">
                                    <div class="form-group">
                                        <label for="nome-doador">Seu Nome (opcional)</label>
                                        <input type="text" id="nome-doador" class="form-control" placeholder="Ex: Maria">
                                    </div>
                                    <div class="form-group">
                                        <label for="valor">Valor da Doação (R$) *</label>
                                        <input type="number" id="valor" class="form-control" min="5" step="5" placeholder="Mínimo R$ 5,00" required>
                                    </div>
                                    <button type="submit" class="btn-secondary w-100 mt-3">Gerar PIX Simulado</button>
                                </form>
                            </div>
                        </div>
                    </section>
                `;
            }
        };