export const Storage = {
            // Dados estáticos que alimentam as views
            dadosApp: {
                projetos: [
                    {
                        id: 1,
                        titulo: "Castração Solidária",
                        descricao: "Mutirão mensal em bairros periféricos para controle populacional.",
                        badges: [
                            { texto: "Saúde Animal", classe: "badge-primary" },
                            { texto: "Recorrente", classe: "badge-success" }
                        ]
                    },
                    {
                        id: 2,
                        titulo: "Abrigo Nota 10",
                        descricao: "Reforma das baias de isolamento para cães idosos.",
                        badges: [
                            { texto: "Urgente", classe: "badge-warning" },
                            { texto: "Infraestrutura", classe: "badge-neutral" }
                        ]
                    }
                ],
                voluntariado: [
                     {
                        id: 1,
                        titulo: "Fotógrafo Voluntário",
                        descricao: "Ensaios aos finais de semana para divulgação nas redes de adoção.",
                        badges: [
                            { texto: "Comunicação", classe: "badge-primary" }
                        ]
                    },
                    {
                        id: 2,
                        titulo: "Passeador e Socializador",
                        descricao: "Atividades recreativas e caminhadas com os cães às terças e quintas.",
                        badges: [
                            { texto: "Manejo Direto", classe: "badge-success" }
                        ]
                    }
                ]
            },
            
            // Função para salvar doações/voluntários
            salvarRegistro: function(tipo, dados) {
                let registros = JSON.parse(localStorage.getItem(`ong_${tipo}`)) || [];
                dados.data = new Date().toISOString();
                registros.push(dados);
                localStorage.setItem(`ong_${tipo}`, JSON.stringify(registros));
                console.log(`Registro salvo na key: ong_${tipo}`, dados);
                return true;
            }
        };