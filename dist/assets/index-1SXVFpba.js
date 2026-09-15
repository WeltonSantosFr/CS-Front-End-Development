var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n={dadosApp:{projetos:[{id:1,titulo:`Castração Solidária`,descricao:`Mutirão mensal em bairros periféricos para controle populacional.`,badges:[{texto:`Saúde Animal`,classe:`badge-primary`},{texto:`Recorrente`,classe:`badge-success`}]},{id:2,titulo:`Abrigo Nota 10`,descricao:`Reforma das baias de isolamento para cães idosos.`,badges:[{texto:`Urgente`,classe:`badge-warning`},{texto:`Infraestrutura`,classe:`badge-neutral`}]}],voluntariado:[{id:1,titulo:`Fotógrafo Voluntário`,descricao:`Ensaios aos finais de semana para divulgação nas redes de adoção.`,badges:[{texto:`Comunicação`,classe:`badge-primary`}]},{id:2,titulo:`Passeador e Socializador`,descricao:`Atividades recreativas e caminhadas com os cães às terças e quintas.`,badges:[{texto:`Manejo Direto`,classe:`badge-success`}]}]},salvarRegistro:function(e,t){let n=JSON.parse(localStorage.getItem(`ong_${e}`))||[];return t.data=new Date().toISOString(),n.push(t),localStorage.setItem(`ong_${e}`,JSON.stringify(n)),console.log(`Registro salvo na key: ong_${e}`,t),!0}}})),i,a=e((()=>{r(),i={mostrarToast:function(e,t){let n=document.getElementById(`toast-notificacao`);document.getElementById(`toast-title`).textContent=e,document.getElementById(`toast-message`).textContent=t,n.classList.add(`show`),setTimeout(()=>{n.classList.remove(`show`)},4e3)},renderInicio:function(){return`
                    <section id="inicio" class="hero">
                        <h2>Resgatando vidas, reconstruindo lares.</h2>
                        <p>Nossa missão é resgatar animais abandonados ou vítimas de maus-tratos...</p>
                        <div class="cards-container">
                            <div class="card"><p><strong>1.420</strong> animais resgatados</p></div>
                            <div class="card"><p><strong>1.280</strong> adoções concluídas</p></div>
                            <div class="card"><p><strong>45</strong> clínicas parceiras</p></div>
                        </div>
                    </section>
                `},renderProjetos:function(){return`
                    <section id="projetos" class="projects">
                        <h2>Projetos Ativos</h2>
                        <div class="projects-list">
                            ${n.dadosApp.projetos.map(e=>`
                        <article class="project-card">
                            <div class="badge-group">${e.badges.map(e=>`<span class="badge ${e.classe}">${e.texto}</span>`).join(``)}</div>
                            <h3>${e.titulo}</h3>
                            <p>${e.descricao}</p>
                            <button class="btn-primary w-100 btn-doar" aria-label="Apoiar Projeto: ${e.titulo}">Apoiar Projeto</button>
                        </article>
                    `).join(``)}
                        </div>
                    </section>
                `},renderVoluntariado:function(){return`
                    <section id="voluntariado" class="volunteer">
                        <h2>Faça Parte da Nossa Equipe</h2>
                        <p>Doe seu tempo e suas habilidades para transformar a realidade de centenas de animais.</p>
                        
                        <div class="volunteer-list" style="margin-bottom: var(--spacing-xl);">
                            ${n.dadosApp.voluntariado.map(e=>`
                        <article class="volunteer-card">
                            <div class="badge-group">${e.badges.map(e=>`<span class="badge ${e.classe}">${e.texto}</span>`).join(``)}</div>
                            <h3>${e.titulo}</h3>
                            <p>${e.descricao}</p>
                        </article>
                    `).join(``)}
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
                `},renderDoar:function(){return`
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
                `}}})),o,s=e((()=>{a(),o={container:document.getElementById(`app-container`),navegarPara:function(e){switch(console.log(`Navegando para: ${e}`),this.container.innerHTML=``,e){case`projetos`:this.container.innerHTML=i.renderProjetos(),this.atarEventosProjetos();break;case`voluntariado`:this.container.innerHTML=i.renderVoluntariado(),this.atarEventosVoluntariado();break;case`doar`:this.container.innerHTML=i.renderDoar(),this.atarEventosDoacao();break;default:this.container.innerHTML=i.renderInicio()}document.querySelectorAll(`.nav-link`).forEach(t=>{t.classList.remove(`active`),t.getAttribute(`data-route`)===e&&t.classList.add(`active`)});let t=this.container.querySelector(`h2`);t&&(t.setAttribute(`tabindex`,`-1`),t.focus())},atarEventosProjetos:function(){document.querySelectorAll(`.btn-doar`).forEach(e=>{e.addEventListener(`click`,()=>{this.navegarPara(`doar`)})})},atarEventosVoluntariado:function(){let e=document.getElementById(`form-voluntario`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n={nome:document.getElementById(`nome`).value,email:document.getElementById(`email`).value,area:document.getElementById(`area`).value};Storage.salvarRegistro(`voluntarios`,n),i.mostrarToast(`Inscrição Recebida!`,`Obrigado, ${n.nome.split(` `)[0]}. Nossa equipe entrará em contato.`),e.reset()})},atarEventosDoacao:function(){let e=document.getElementById(`form-doacao`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=document.getElementById(`nome-doador`).value||`Doador Anônimo`,r=document.getElementById(`valor`).value;Storage.salvarRegistro(`doacoes`,{nome:n,valor:r}),i.mostrarToast(`Chave PIX Gerada!`,`Valor: R$ ${r}. Escaneie o QR Code no seu app.`),typeof confetti==`function`&&confetti({particleCount:150,spread:70,origin:{y:.6},colors:[`#0066ff`,`#10b981`,`#ffffff`]}),e.reset()})}}}));t((()=>{s(),document.addEventListener(`DOMContentLoaded`,()=>{o.navegarPara(`inicio`);let e=document.querySelectorAll(`.nav-link`),t=document.getElementById(`menu-toggle`);e.forEach(e=>{e.addEventListener(`click`,n=>{n.preventDefault();let r=e.getAttribute(`data-route`);o.navegarPara(r),t.checked&&=!1})})})}))(),s(),r(),a();