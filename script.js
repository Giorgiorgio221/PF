document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('toggle-theme');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
    
    // Theme toggle event
    themeToggle.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Verificar preferência do usuário
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode === 'enabled' || (prefersDarkMode && savedMode !== 'disabled')) {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Dados dos projetos
    const projetos = [
        {
            id: 1,
            nome: "Pessoas Históricas",
            data: "1 Fevereiro 2025",
            tecnologias: ["Canva", "Google"],
            descricao: "Pessoas históricas na nossa área da computação que pavimentaram o caminho para a tecnologia atual.",
            desafios: "Dados inúteis e inconclusivos sobre algumas figuras históricas.",
            aprendizados: "A importância de reconhecer as pessoas que pavimentaram o caminho da computação.",
            links: [],
            avaliacao: 3,
            imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            nome: "Construção de PCs",
            data: "7 Fevereiro 2025",
            tecnologias: ["Google", "Pichau"],
            descricao: "Conhecemos os PCs sabendo como eles são montados e quais componentes são essenciais.",
            desafios: "Identificar empresas de referência e de boa qualidade no mundo tecnológico.",
            aprendizados: "Não compre PC onde se vende geladeira - a importância de comprar em lojas especializadas.",
            links: [],
            avaliacao: 2,
            imagem: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            nome: "Comparação dos Sistemas Operacionais",
            data: "12 Fevereiro 2025",
            tecnologias: ["Windows", "Linux", "Emuladores de PC"],
            descricao: "Comparação detalhada entre os Sistemas Operacionais Windows e Linux em diversos aspectos.",
            desafios: "Sistemas muito parelhos em questão de qualidade e performance, dificultando a escolha.",
            aprendizados: "O Linux é melhor em alguns quesitos (como segurança e customização), e o Windows em outros (como compatibilidade e facilidade de uso).",
            links: [],
            avaliacao: 4,
            imagem: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            nome: "Fundamentos Linux/Windows",
            data: "19 Fevereiro 2025",
            tecnologias: ["Canva", "Google"],
            descricao: "Trabalho sobre arquétipos pessoais e como eles se relacionam com preferências tecnológicas.",
            desafios: "Se identificar com um ou mais arquétipos e ficar indeciso sobre as próprias características.",
            aprendizados: "Autoconhecimento através de atividades que revelam características pessoais.",
            links: [
                { url: "https://github.com/giorgiorgio221", texto: "GitHub" }
            ],
            avaliacao: 3,
            imagem: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            nome: "Logos pessoais",
            data: "28 Fevereiro 2025",
            tecnologias: ["Pinterest", "Google", "Canva"],
            descricao: "Criação de logos pessoais que representam minha identidade usando cores e símbolos significativos.",
            desafios: "Criar uma logo que represente não só para mim, mas que também comunique minha identidade para os outros.",
            aprendizados: "Design básico e teoria das cores para representação pessoal.",
            links: [],
            avaliacao: 4,
            imagem: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            nome: "App de Música",
            data: "12 Março 2025",
            tecnologias: ["Figma"],
            descricao: "Protótipo de um aplicativo de música criado no Figma para aprender os fundamentos de UI/UX.",
            desafios: "Entender e corrigir os erros que estavam acontecendo durante o uso do Figma.",
            aprendizados: "Princípios básicos de design de interface e experiência do usuário.",
            links: [],
            avaliacao: 3,
            imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 7,
            nome: "Apresentação sobre o Figma",
            data: "26 Março 2025",
            tecnologias: ["Figma", "Google"],
            descricao: "Apresentação sobre minha pessoa, sobre um app criado e sobre o uso do Figma como ferramenta de design.",
            desafios: "O Figma mostrou-se uma ferramenta complexa e trabalhosa para um iniciante.",
            aprendizados: "Mecânicas avançadas do Figma e técnicas de apresentação de projetos.",
            links: [],
            avaliacao: 5,
            imagem: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 8,
            nome: "Primeiro Site",
            data: "9 Abril 2025",
            tecnologias: ["GitHub", "VS Code"],
            descricao: "Meu primeiro site desenvolvido, marcando o início da minha jornada no desenvolvimento web.",
            desafios: "Aprender os fundamentos de HTML e CSS do zero.",
            aprendizados: "HTML básico e CSS para estilização de páginas web.",
            links: [
                { url: "https://giorgiorgio221.github.io/Red-Court/", texto: "Red Court" }
            ],
            avaliacao: 2,
            imagem: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 9,
            nome: "Meu segundo Site",
            data: "16 Abril 2025",
            tecnologias: ["VS Code", "GitHub"],
            descricao: "Segundo site desenvolvido, mostrando minha evolução e melhorias nas habilidades de desenvolvimento.",
            desafios: "Entender completamente os requisitos do projeto e identificar áreas para melhoria.",
            aprendizados: "Técnicas mais avançadas de HTML e CSS.",
            links: [
                { url: "https://giorgiorgio221.github.io/Blue-Lock/", texto: "Blue Lock" }
            ],
            avaliacao: 3,
            imagem: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 10,
            nome: "Expansividade",
            data: "7 Maio 2025",
            tecnologias: ["VS Code", "GitHub", "Google"],
            descricao: "Site demonstrando minha expansividade e crescimento como desenvolvedor.",
            desafios: "Pouquíssimas informações disponíveis sobre o tema específico do clube abordado.",
            aprendizados: "Pesquisa e desenvolvimento de conteúdo para web.",
            links: [
                { url: "https://giorgiorgio221.github.io/Osasco/", texto: "Osasco" }
            ],
            avaliacao: 3,
            imagem: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 11,
            nome: "Sabores da Terra",
            data: "20 Maio 2025",
            tecnologias: ["VS Code", "GitHub", "Google"],
            descricao: "Site desenvolvido para aprender sobre Inputs e IDs em formulários web.",
            desafios: "Conectar imagens sem quebrar o layout ou perder qualidade visual.",
            aprendizados: "Trabalhar com Inputs, IDs e formulários em HTML/CSS.",
            links: [
                { url: "https://github.com/giorgiorgio221", texto: "GitHub" }
            ],
            avaliacao: 5,
            imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 12,
            nome: "Sistema Solar",
            data: "23 Maio 2025",
            tecnologias: ["Keyframes CSS"],
            descricao: "Animação do sistema solar criada com keyframes CSS para simular o movimento dos planetas.",
            desafios: "Fazer os planetas orbitarem corretamente em torno de um eixo central.",
            aprendizados: "Animações complexas com CSS keyframes e transformações.",
            links: [
                { url: "https://giorgiorgio221.github.io/SS/", texto: "Sistema Solar" }
            ],
            avaliacao: 3,
            imagem: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 13,
            nome: "Formas",
            data: "28 Maio 2025",
            tecnologias: ["Keyframes CSS"],
            descricao: "Site com 5 desafios diferentes sobre animações CSS usando keyframes.",
            desafios: "Configurar corretamente o projeto no GitHub Pages.",
            aprendizados: "Técnicas avançadas de animação com CSS.",
            links: [],
            avaliacao: 3,
            imagem: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        }
    ];
    
    // Renderizar projetos
    const projectsContainer = document.querySelector('.projects-container');
    
    function renderProjects() {
        projetos.forEach(projeto => {
            const techList = projeto.tecnologias.map(tech => 
                `<span class="tech-item">${tech}</span>`
            ).join('');
            
            const linksList = projeto.links.map(link => 
                `<a href="${link.url}" class="project-link" target="_blank">${link.texto}</a>`
            ).join('');
            
            const emptyLinks = projeto.links.length === 0 ? 
                '<span class="project-link disabled">Link Indisponível</span>' : '';
            
            const ratingStars = '⭐'.repeat(projeto.avaliacao) + '☆'.repeat(5 - projeto.avaliacao);
            
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <img src="${projeto.imagem}" alt="${projeto.nome}" class="project-image">
                <div class="project-content">
                    <span class="project-date">${projeto.data}</span>
                    <h3 class="project-title">${projeto.nome}</h3>
                    <div class="tech-list">${techList}</div>
                    <p class="project-description">${projeto.descricao}</p>
                    
                    <div class="challenge-learn">
                        <h4>Desafios:</h4>
                        <p>${projeto.desafios}</p>
                    </div>
                    
                    <div class="challenge-learn">
                        <h4>Aprendizados:</h4>
                        <p>${projeto.aprendizados || 'Não especificado'}</p>
                    </div>
                    
                    <div class="project-links">
                        ${linksList}
                        ${emptyLinks}
                    </div>
                    
                    <div class="rating" title="Avaliação: ${projeto.avaliacao}/5">
                        ${ratingStars}
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
        
        // Animar os cards quando aparecem na tela
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }
    
    // Inicializar
    renderProjects();
});
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });
    
    // Timeline item animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkTimelineItems() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.75) {
                item.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkTimelineItems();
    
    // Check on scroll
    window.addEventListener('scroll', checkTimelineItems);
    
    // Skills chart
    const ctx = document.getElementById('skillsTimelineChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Fevereiro', 'MarÃ§o', 'Abril', 'Maio'],
            datasets: [
                {
                    label: 'Design (Figma, UI/UX)',
                    data: [10, 65, 70, 75],
                    borderColor: '#269198',
                    backgroundColor: 'rgba(39, 159, 39, 0.16)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'HTML/CSS',
                    data: [5, 15, 85, 90],
                    borderColor: '#3859',
                    backgroundColor: 'rgba(18, 214, 28, 0.53)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Layout (Flexbox, Grid)',
                    data: [0, 10, 75, 85],
                    borderColor: '#962828',
                    backgroundColor: 'rgba(68, 216, 23, 0.87)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Versionamento',
                    data: [0, 5, 30, 65],
                    borderColor: '#630000',
                    backgroundColor: 'rgba(19, 96, 5, 0.35)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            },
            animation: {
                duration: 2000
            }
        }
    });
    
    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(30, 29, 34, 0.9)';
            navbar.style.boxShadow = '0 2px 10px rgb(32, 31, 36)';
        } else {
            navbar.style.background = 'var(--light-color)';
            navbar.style.boxShadow = 'var(--shadow)';
        }
    });
});