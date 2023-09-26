// {nome: '', categoria: '', descricao: '', link: '', tags: []},
const vacinas = [
    {nome: 'Curso em Vídeo, HTML5 e CSS3, Módulo 1/5', categoria: 'Curso Youtube', descricao: 'O primeiro módulo do melhor curso de front para iniciantes, pelo melhor professor do mundo.', link: 'https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&ab_channel=CursoemV%C3%ADdeo', tags: ['HTML', 'CSS', 'Curso', 'Youtube', 'Guanabara', 'CursoEmVídeo', 'SentaEAssiste']},
    {nome: 'Curso em Vídeo, HTML5 e CSS3, Módulo 2/5', categoria: 'Curso Youtube', descricao: 'O segundo módulo do melhor curso de front para iniciantes, pelo melhor professor do mundo.', link: 'https://www.youtube.com/watch?v=vPNIAJ9B4hg&list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s&ab_channel=CursoemV%C3%ADdeo', tags: ['HTML', 'CSS', 'Curso', 'Youtube', 'Guanabara', 'CursoEmVídeo', 'SentaEAssiste']},
    {nome: 'Curso em Vídeo, HTML5 e CSS3, Módulo 3/5', categoria: 'Curso Youtube', descricao: 'O terceiro módulo do melhor curso de front para iniciantes, pelo melhor professor do mundo.', link: 'https://www.youtube.com/watch?v=ofFgnDtn_1c&list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ&ab_channel=CursoemV%C3%ADdeo', tags: ['HTML', 'CSS', 'Curso', 'Youtube', 'Guanabara', 'CursoEmVídeo', 'SentaEAssiste']},
    {nome: 'Curso em Vídeo, HTML5 e CSS3, Módulo 4/5', categoria: 'Curso Youtube', descricao: 'O quarto módulo do melhor curso de front para iniciantes, pelo melhor professor do mundo.', link: 'https://www.youtube.com/watch?v=zHKHMmEG9vE&list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT', tags: ['HTML', 'CSS', 'Curso', 'Youtube', 'Guanabara', 'CursoEmVídeo', 'SentaEAssiste']},
    {nome: 'Curso em Vídeo, JavaCript para Iniciantes', categoria: 'Curso Youtube', descricao: 'O basicão de JavaScript muito bem visto com o padrão Guanabara de qualidade', link: 'https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&ab_channel=CursoemV%C3%ADdeo', tags: ['JS','Curso', 'Youtube', 'Guanabara', 'CursoEmVídeo', 'SentaEAssiste']},
    {nome: 'Curso em Vídeo, Git e GitHub', categoria: 'Curso Youtube', descricao: 'O Curso de Git e Github do Guanabara, usando o GitHub Desktop (sem linha de comando)', link: 'https://www.youtube.com/watch?v=xEKo29OWILE&list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA&ab_channel=CursoemV%C3%ADdeo', tags: ['CursoEmVídeo', 'Guanabara', 'Git', 'GitHub', 'GitHubDesktop']},
    {nome: 'Curso em Vídeo - Lógica de Programação', categoria: 'Curso Youtube', descricao: 'O famoso curso de lógica de programação do Guanabara. Infelizmente ele usa o VisualG na maior parte, mas se abstrair isso super vale a pena! De bônus, o curso inicia com o maravitop Scratch!', link: 'https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&ab_channel=CursoemV%C3%ADdeo', tags: ['Lógica', 'Scratch', 'Guanabara', 'VisualG']},
    {nome: 'freeCodeCamp', categoria: 'Curso', descricao: 'Muito curso da gringa, super completos e com uma galera muito forte. Os cursos são muito completos, grandes, gratuitos, com certificados gratuitos e em inglês. O site conta com tradução para o português. Chegou a hora de pedir desculpas ao Guanabara por dizer que ele “enrola demais” nas explicações e mostrar que tu tem o que precisa pra dominar a arte da programação. Não deixa de ver o canal do freeCodeCamp aqui no outro quadradinho.', link: 'https://www.freecodecamp.org/', tags: ['Muitos cursos', 'Certificados', 'Tutoriais', 'freeCodeCamp']},
    {nome: 'Canal do freeCodeCamp', categoria: 'Canal Youtube', descricao: 'Muito curso da gringa, super completos e com uma galera muito forte. Os cursos são muito completos, grandes, gratuitos, com certificados gratuitos e em inglês. O próprio youtube gera legendas automáticas em português então o inglês não vai ser problema. Chegou a hora de pedir desculpas ao Guanabara por dizer que ele “enrola demais” nas explicações e mostrar que tu tem o que precisa pra dominar a arte da programação. Não deixa de ver o site do freeCodeCamp aqui no outro quadradinho.', link: 'https://www.youtube.com/@freecodecamp', tags: ["freeCodeCamp", 'Cursos', 'Tutoriais']},
    {nome: 'Futuro Dev - Jhon', categoria: 'Canal Youtube', descricao: 'Em vez de um canal ensinando a programar, o que tu acha de um mostrando a história de alguém que tá na mesma que tu: aprendendo a programar!', link: 'https://www.youtube.com/@futuroDevJohn', tags: ['Iniciante', 'Carreira', 'Frontend', 'Backend', 'Choradeira']},
    {nome: 'dpw', categoria: 'Canal Youtube', descricao: 'Ótimo canal com curso, dicas e tutoriais sobre Frontend (HTML+CSS+JS)', link: 'https://www.youtube.com/channel/UCdHcHgSrWidiOg-mNFNB1Nw', tags: ['Frontend', 'Tutoriais', 'HTML', 'CSS', 'JS']},
    {nome: 'Dicionário do programador, do CódigoFonteTV', categoria: 'Canal Youtube', descricao: 'Melhor oportunidade para ouvir falar das principais tecnologias do momento.', link: 'https://www.youtube.com/watch?v=hlgm_1Bzt-4&list=PLVc5bWuiFQ8GgKm5m0cZE6E02amJho94o&ab_channel=C%C3%B3digoFonteTV', tags: ['CulturaDev']},
    {nome: 'Curso de lógica em JavaScript do CFBCursos', categoria: 'Curso Youtube', descricao: 'Curso gigaaaaaante de lógica com JavaScript do Tio CFB.', link: 'https://www.youtube.com/watch?v=lcKo-ycLDNw&list=PLx4x_zx8csUj3IbPQ4_X5jis_SkCol3eC', tags: ['Curso', 'Lógica', 'JS']},
    {nome: 'Javascript Essencial - Conceitos iniciais, RBtech', categoria: 'Curso Youtube', descricao: 'Curso rapidão de JavaScript', link: 'https://www.youtube.com/watch?v=ipHuSfOYhwA&list=PLInBAd9OZCzxl38aAYdyoMHVg0xCgxrRx&ab_channel=RBtech', tags: ['Curso', 'JS']},
    {nome: 'Cursinho de HTML e CSS, RBtech', categoria: 'Curso Youtube', descricao: 'Cursinho antigo de HTML, mas ainda tem seu valor.', link: 'https://www.youtube.com/watch?v=iZ1ucWosOww', tags: ['HTML', 'Curso']},
    {nome: 'Curso Lógica de programação em VisualG, RBtech', categoria: 'Curso Youtube', descricao: 'Curso de lógica em VisualG do RBtech', link: 'https://www.youtube.com/watch?v=Ds1n6aHchRU', tags: ['Curso', 'Lógica', 'VisualG']},
    {nome: 'Lucas Montano, do canal Lucas Montano ', categoria: '', descricao: 'Baita canal do Lucas Montano, do canal Lucas Montano. Fala principalmente de carreira e desenvolvimento para dispositivos móveis, mas muito mais também', link: 'https://www.youtube.com/@LucasMontano', tags: ['Variedades', 'CulturaDev', 'Mobile', 'Android', 'MuitaCoisa']},
    {nome: 'Fabio Akita', categoria: 'Canal Youtube', descricao: 'Ciência da computação, tecnologia e puxões de orelha. Canal obrigatório, mesmo que não goste:', link: 'https://www.youtube.com/@Akitando', tags: ['Ciência da Computação', 'Tecnologia', 'Tudo']},
    {nome: 'Filipe Deschamps', categoria: 'Canal Youtube', descricao: 'Talvez o canal dev mais influente do Brasil. Mesmo que esteja em uma fase mais coach quântico, ainda tem seu valor.', link: 'https://www.youtube.com/@FilipeDeschamps', tags: ['Variedades', 'JS', 'Coach']},
    {nome: 'Gabriel Pato', categoria: 'Canal Youtube', descricao: 'Ótimo canal sobre Segurança e Hacking', link: 'https://www.youtube.com/@GabrielPato', tags: ['Hacking', 'Segurança']},
    {nome: 'TecMundo', categoria: 'Canal Youtube', descricao: 'Notícias do mundo da tecnologia', link: 'https://www.youtube.com/@tecmundo/featured', tags: ['Notícias', 'Tecnologia']},
    {nome: 'TecMundo - Playlist A história da Tecnologia', categoria: 'Canal Youtube', descricao: 'Loucamente interessante saber de onde veio isso tudo aí que a gente brinca hoje.', link: 'https://www.youtube.com/playlist?list=PL7cCKVGMzqmbyaouQulXxUJLdwW4qBMpp', tags: ['História', 'Empresas', 'Tecnologias']},
    {nome: '8 jogos de CSS', categoria: 'Jogos', descricao: 'Artigo no dev.to apresentando 8 games pra aprender CSS brincandinho.', link: 'https://dev.to/devmount/8-games-to-learn-css-the-fun-way-4e0f', tags: ['Jogos', 'CSS']},
    {nome: 'Code Combat', categoria: 'Jogos', descricao: 'Baita plataforma para jogar aprendendo lógica, JavaScript, Python e muito mais...', link: 'https://codecombat.com/', tags: ['Curso', 'Game', 'AprenderJogando', 'JS', 'Python', 'Lógica']},
    {nome: 'spacecoding apresenta: 5 jogos para aprender programação', categoria: 'Jogos', descricao: 'Vídeo da Gi do spacecoding apresentando 5 jogos para aprender programação e afins.', link: 'https://www.instagram.com/p/CjbJmfSgG6X/', tags: ['Instagram', 'AprenderJogando']},
    {nome: 'code.clash: 3 free games to learn programming', categoria: 'Jogos', descricao: 'Vídeo no insta trazendo 3 games pra aprender programação.', link: 'https://www.instagram.com/p/Cg_0GgQjAna/', tags: ['Instagram', 'AprenderJogando']},
    {nome: 'Fundação Bradesco', categoria: 'Curso', descricao: 'Uma infinidade de cursos gratuitos sobre desenvolvimento', link: 'https://www.ev.org.br/areas-de-interesse/programacao', tags: ['Curso', 'Bradesco']},
    {nome: 'Rocketseat Discover', categoria: 'Curso', descricao: 'A amostra grátis da Rocketseat', link: 'https://www.rocketseat.com.br/discover?gclid=Cj0KCQjw2_OWBhDqARIsAAUNTTF4QGXDJwj_KJE-HxhSp_WKdUlF58ZFQ98TW8abc6vAOBvimKggUv4aAsgnEALw_wcB', tags: ['Curso', 'Rocketseat', 'Frontend', 'HTML', 'CSS', 'JS', 'Git', 'GitHub']},
    {nome: 'Dio', categoria: 'Curso', descricao: 'Tem alguns cursos legais no plano gratuito. Te inscreve lá pra ver.', link: 'https://www.dio.me/', tags: ['Dio', 'CursosGratis', 'AmostraGratis']},
    {nome: 'W3Schools', categoria: 'Sites', descricao: 'Dá pra encarar como documentação (e curso) de várias linguagens de programação.', link: 'https://www.w3schools.com/', tags: ['HTML', 'JS', 'CSS', 'Documentação', 'Curso', 'Tutorial', 'Exercícios']},
    {nome: 'MDN', categoria: 'Sites', descricao: 'O velho testamento da programação. Pode assumir como a documentação nua e crua.', link: 'https://developer.mozilla.org/pt-BR/', tags: ['HTML', 'JS', 'CSS', 'Documentação', 'Curso', 'Tutorial', 'Exercícios']},
    {nome: 'MDN: Guia JavaScript', categoria: 'Curso', descricao: 'O Guia de JavaScript preparado pela galera da Mozilla. Aprendizado garantido.', link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide', tags: ['MDN', 'Mozilla', 'JS']},
    {nome: 'MDN: Aprendendo desenvolvimento web', categoria: 'Curso', descricao: 'O cursão de frontend da Mozilla.', link: 'https://developer.mozilla.org/pt-BR/docs/Learn', tags: ['MDN', 'Mozilla', 'JS', 'HTML', 'CSS']},
    {nome: 'CSS Reference: A free visual guide to CSS', categoria: 'Site', descricao: 'Baita referência para CSS. Simples, bonita, visual...', link: 'https://cssreference.io/', tags: ['CSS']},
    {nome: 'Introdução a HTML/CSS na Khan Academy', categoria: 'Curso', descricao: 'Ótimo curso de HTML e CSS', link: 'https://pt.khanacademy.org/computing/computer-programming/html-css#intro-to-html', tags: ['Frontend', 'HTML', 'CSS']},
    {nome: 'Um guia para iniciantes na área de web - Tableless', categoria: 'Curso', descricao: 'Curso massa e muito completo contemplando o básico de wec, HTML, CSS e JS. Tudo feito com carinho pela comunidade brasileira.', link: 'http://tableless.github.io/iniciantes/', tags: ['Web', 'HTML', 'CSS', 'JS', 'Frontend']},
    {nome: 'Cod3r', categoria: 'Curso', descricao: 'Um monte de cursos massa, com vários importantes gratuitos pra gente aproveitar sem moderação.', link: 'https://www.cod3r.com.br/collections?category=cursos-gratuitos', tags: ['Curso', 'Gratis']},
    {nome: 'Blog UX/UI', categoria: 'Site', descricao: 'Blog criado pra caçar matrículas para um curso caro e com cara de golpinho, mas tem muito material pra aprender sobre Interface de Usuário e Experiência de Usuário no blog.', link: 'https://gabrielsilvestri.com.br/blog/', tags: ['UX/UI']},
    {nome: 'spacecoding: 1001 cursos online gratuitos de tecnologia no exterior', categoria: 'Curso', descricao: 'Videozinho da Gi trazendo algumas possibilidades de estudar na gringa virtualmente', link: 'https://www.instagram.com/p/CjVR1RjAMx9/', tags: ['Curso', 'Instagram']},
    {nome: 'gui_dev_: 4 sites para aprender programação GRÁTIS', categoria: 'Curso', descricao: 'O cara mandou 4 sites pra aprender a zero real.', link: 'https://www.instagram.com/p/ChYAEbhPO_i/', tags: ['Curso', 'Instagram']},
    {nome: 'Tech Guide', categoria: 'Carreira', descricao: 'Um guia da Alura que pretende mostrar o que você precisa aprender para ser um profissional "em T" nas mais diversas área da tecnologia.', link: 'https://techguide.sh/', tags: ['ProfissionalEmT', 'Alura', 'GuiaDeCarreira']},
    {nome: 'Roadmap.sh', categoria: 'Carreira', descricao: 'O Roadmap original. A ideia é apresentar um mapa da sua jornada de aprendizado de uma carreira ou tecnologia. O mapa mostra onde tu vai chegar, o que tu precisa aprender e vai indicando diversos recursos pra te ensinar a cada etapa do teu desenvolvimento.', link: 'roadmap.sh', tags: ['RoadMap', 'OQueAprender', 'OndeAprender']},
    {nome: 'FreeFrontend', categoria: 'Repositórios', descricao: 'Infinitos repositórios de lindos componentes (principalmente) CSS para usar nas suas criações.', link: 'https://freefrontend.com/', tags: ['CSS', 'HTML', 'Frontend', 'Componentes']},
    {nome: 'Pexels', categoria: 'Imagens', descricao: 'Fotos profissionais gratuitas', link: 'https://www.pexels.com/pt-br/', tags: ['Imagens', 'Galeria', 'Fotos']},
    {nome: 'Unsplash', categoria: 'Imagens', descricao: 'Fonte de recursos visuais da internet. Fornecidos por criadores de todo o mundo.', link: 'https://unsplash.com/pt-br', tags: ['Imagens', 'Galeria', 'Fotos']},
    {nome: 'Freepik', categoria: 'Imagens', descricao: 'Imagens grátis', link: 'https://br.freepik.com/', tags: ['Imagens', 'Galeria', 'Fotos']},
    {nome: 'Rawpixel', categoria: 'Imagens', descricao: 'Mais imagens grátis', link: 'https://www.rawpixel.com/?feed=creative-feed&page=1&sort=shuffle', tags: ['Imagens', 'Galeria', 'Fotos']},
    {nome: 'Pixabay', categoria: 'Imagens', descricao: 'Mais de 1 milhão de imagens, fotos e vídeos em alta qualidade para seus projetos.', link: 'https://pixabay.com/pt/', tags: ['Imagens', 'Galeria', 'Fotos']},
    {nome: 'Libreshot', categoria: 'Imagens', descricao: 'I am Martin and you can download my photos for free.', link: 'https://libreshot.com/', tags: ['Imagens', 'Galeria', 'Fotos']},
    {nome: 'Icon Archive', categoria: 'Imagens', descricao: 'Over 800,000 free icons / 2,517 iconpacks. Without login, without subscription', link: 'https://iconarchive.com/', tags: ['Icons']},
    {nome: 'Favicon.cc', categoria: 'Imagens', descricao: 'Ferramenta para criar favicon', link: 'https://www.favicon.cc/', tags: ['Favicon', 'Gerador', 'Ferramenta']},
    {nome: 'Favicon.io', categoria: 'Imagens', descricao: 'Melhor ferramenta para criar favicon', link: 'https://favicon.io/', tags: ['Favicon', 'Gerador', 'Ferramenta']},
    {nome: 'lordicon', categoria: 'Imagens', descricao: 'Galeria de Ícones para usar em seus sites ou apps', link: 'https://lordicon.com/', tags: ['Icons']},
    {nome: 'florinpop17: App ideas collection', categoria: 'Repositórios', descricao: 'Quer praticar em algo real mas não sabe o que fazer? O florinpop17 resolve! Nesse repositório tu vai encontrar um monte de ideias para projetos reais. Tudo super completo, com requisitos, user histories e muito mais!', link: 'https://github.com/florinpop17/app-ideas', tags: ['Ideias', 'Projetos', 'Metodologia']},
    {nome: 'florinpop17: mais ideias curtas', categoria: 'Repositórios', descricao: 'Ele foi desafiado a completar 10 projetos em uma hora :D', link: 'https://github.com/florinpop17/10-projects-1-hour', tags: ['Ideias', 'Projetos']},
    {nome: '3 projetos de nível iniciante que geram até $3000 por Mês', categoria: 'Repositórios', descricao: 'Mais ideias pra projetos, desta vez com promessas de $$', link: 'https://www.youtube.com/watch?v=n3tMEOw9KGY', tags: ['Ideias']},
    {nome: 'HTMLrev', categoria: 'Repositórios', descricao: 'Galeria de templates de sites.', link: 'https://htmlrev.com/', tags: ['Templates', 'HTML', 'CSS', 'Bootstrap']},
    {nome: 'Flexplorer', categoria: 'Ferramentas', descricao: 'Um simulador de flexbox muito louco! (Na home tem mais coisa legal: https://bennettfeely.com/)', link: 'https://bennettfeely.com/flexplorer/', tags: []},
    {nome: 'Links sobre CSS', categoria: 'Site', descricao: 'Um repositório (velho) cheio de links para recursos úteis relacionados ao CSS.', link: 'https://github.com/marcelabomfim/CSSEHFODA', tags: ['CSS']},
    {nome: 'FLEXBOX FROGGY', categoria: 'Jogos', descricao: 'Melhor maneira pra entender flexbox', link: 'https://flexboxfroggy.com/', tags: ['Jogos', 'CSS', 'flexbox']},
    {nome: 'Flexbox Defense', categoria: 'Jogos', descricao: 'Jogo estilo tower defense pra treinar flexbox. Muito bom!', link: 'http://www.flexboxdefense.com/', tags: ['Jogos', 'CSS', 'flexbox']},
    {nome: 'CSS Diner', categoria: 'Jogos', descricao: 'Game pra treinar CSS e seletores.', link: 'https://flukeout.github.io/', tags: ['Jogos', 'CSS']},
    {nome: 'Grid Garden', categoria: 'Jogos', descricao: 'O irmão grid do Flexbox Frog ', link: 'https://cssgridgarden.com/', tags: ['Jogos', 'CSS', 'Grid']},
    {nome: 'eBook Eloquent JavaScript', categoria: 'Livros', descricao: 'Eloquent JavaScript (on line)', link: 'https://eloquentjavascript.net/', tags: ['Livro', 'eBook', 'JS']},
    {nome: 'Piskel', categoria: 'Ferramentas', descricao: 'Editor online de sprites animados e pixel art.', link: 'https://www.piskelapp.com/', tags: ['PixelArt', 'Imagens', 'Sprites']},
    {nome: 'Mixamo', categoria: 'Ferramentas', descricao: 'Criador de personagens 3d animados, para games, filmes ou seja lá o que tu imaginar...', link: 'https://www.mixamo.com/#/', tags: ['Sprites', 'Sprites3D']},
    {nome: 'VSCode online', categoria: 'Ferramentas', descricao: 'Um VSCode totalmente online pra usar quando for visitar a vó.', link: 'https://vscode.dev/', tags: ['IDE', 'VSCode']},
    {nome: 'GDB Online', categoria: 'Ferramentas', descricao: 'Editor e debugger online para um monte de linguagens novas e velhas.', link: 'https://www.onlinegdb.com/', tags: ['IDE']},
    {nome: 'replit', categoria: 'Ferramentas', descricao: 'Mistura marota de editor de códigos, IA e rede social.', link: 'https://replit.com/', tags: ['IDE']},
    {nome: 'Dcoder', categoria: 'Ferramentas', descricao: 'IDE online muito legalzinha. Tem até desafios e exercícios. Tem app pra programar no celular, sincronizado com a conta da web.', link: 'https://code.dcoder.tech/', tags: ['IDE']},
    {nome: 'CODEPEN', categoria: 'Ferramentas', descricao: 'The best place to build, test, and discover front-end code. CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.', link: 'https://codepen.io/', tags: ['IDE']},
    {nome: 'beecrowd', categoria: 'Exercícios', descricao: 'Milhares de exercícios para praticar programação', link: 'https://www.beecrowd.com.br/', tags: ['Exercícios']},
    {nome: 'DevChallenge', categoria: 'Exercícios', descricao: 'Mais um site de desafios para praticar.', link: 'https://www.devchallenge.com.br/', tags: ['Exercícios']},
    {nome: 'Dcoder Challenges', categoria: 'Exercícios', descricao: 'Uma lista imensa de exercícios para praticar algoritmos clássicos. Estão divididos entre Fácil, Médio e Difícil.', link: 'https://code.dcoder.tech/challenges', tags: ['Exercícios', 'Dcoder', 'IDE']},
    {nome: 'HackerRank', categoria: 'Exercícios', descricao: 'O mais conhecido dos sites de desafios de programação. Muito utilizado em entrevistas e, consequentemente, para praticar para elas também.', link: 'https://www.hackerrank.com/', tags: ['Exercícios']},
    {nome: 'OsProgramadores/desafios', categoria: 'Exercícios', descricao: 'Uma ótima lista de edsafios bem complicadinhos...', link: 'https://osprogramadores.com/desafios/', tags: ['Exercícios']},
    {nome: 'Lista de exercícios sobre vetores do Prof. Eduardo Silvestri', categoria: 'Exercícios', descricao: 'Uma bela lista com 31 exercícios para praticar o uso de vetorers. Sugiro tentar resolver com manipulação dos vetores primeiro (lógica), depois usando os métodos de array da linguagem (programação) ', link: 'https://docplayer.com.br/8274125-Lista-de-exercicios-vetores.html', tags: ['Exercícios']},
    {nome: 'StackOverflow', categoria: 'Fóruns', descricao: 'A mãe dos programadores. Perdeu um pouco de relevância com o nascimento do chatGPT mas ainda é muito importante pra nós, principalmente nos problemas mais complexos.', link: 'https://stackoverflow.com/questions', tags: ['FullStackOverflow']},
    {nome: 'StackOverflow-pt', categoria: 'Fóruns', descricao: 'O feudo em português da StackOverflow', link: 'https://pt.stackoverflow.com/', tags: ['FullStackOverflow']},
    {nome: 'GUJ', categoria: 'Fóruns', descricao: 'Versão organizada e bonitinha da StackOverflow. Quase ninguém usa mais, mas todo o conhecimento que já foi compartilhado continua lá.', link: 'https://www.guj.com.br/', tags: ['Alura']},
    {nome: 'HipstersPontoTech', categoria: 'Podcasts', descricao: 'O  maior e mais badalado podcast de tecnologia do Brasil', link: 'https://hipsters.tech/', tags: ['Alura']},
    {nome: 'PodProgramar', categoria: 'Podcasts', descricao: 'Um dos melhores e feito somente por elas!', link: 'https://podprogramar.com.br/', tags: ['MulheresNaTecnologia']},
    {nome: 'devnaestrada', categoria: 'Podcasts', descricao: 'Galera gente boa e manja do que tá falando.', link: 'https://devnaestrada.com.br/', tags: ['PodcastDeGalera']},
    {nome: '<podTag/>', categoria: 'Podcasts', descricao: 'Muita coisa de carreira tech, principalmente no exterior. Mas muito mais que isso também. Depois do falecimento do plano free do heroku, o site saiu do ar. Vou deixar aqui o link do canal do Youtube, mas uma busca por podtag no google rapidamente leva a mais um monte de mídias.', link: 'https://www.youtube.com/@podtagpodcast5387/featured', tags: ['Carreira', 'DevNoExterior']},
    {nome: 'FalaDev da Rocketseat', categoria: 'Podcasts', descricao: 'A Rocketseat sempre traz conteúdo aprofundado e de qualidade.', link: 'https://open.spotify.com/show/3TNsKUGlP9YbV1pgy3ACrW', tags: ['Rocketseat']},
    {nome: 'QuebraDev', categoria: 'Podcasts', descricao: 'Um coletivo que tem como objetivo democratizar a informação para a periferia.', link: 'https://quebra.dev/', tags: ['DevDaQuebrada']},
    {nome: 'PodQuest', categoria: 'Podcasts', descricao: 'Um baita Podcast com uma galera muito forte da indústria mundial dos games. Falava de mercado, desenvolvimento, games... Acabou, mas seu legado continua lá e o servidor do discord continua ativo.', link: 'http://www.podquest.com.br/', tags: ['Games', 'GameDev', 'Discord']},
    {nome: 'Lambda-3 podcast', categoria: 'Podcasts', descricao: 'Podcast brabo!', link: 'https://www.lambda3.com.br/lambda3-podcast/', tags: ['TIVIT']},
    {nome: 'cabeça de lab', categoria: 'Podcasts', descricao: 'O podcast do luizalabs. Super vale a pena conferir', link: 'https://www.cabecadelab.com.br/', tags: ['luizalabs', 'magalu']},
    {nome: 'Newsletter do Deschamps', categoria: 'Balaio', descricao: 'Um belo compilado sobre tecnologia pra quem não tem tempo e/ou é preguiçoso mas tem consciência de que precisa se manter atualizado', link: 'https://filipedeschamps.com.br/newsletter', tags: ['Newsletter', 'Deschamps']},
    {nome: 'LIVE: Quando me tornei um Programador Profissional (A História de 16 Programadores)', categoria: 'Balaio', descricao: 'Foi legal conhecer a história de vários dos programadores mais famosinhos da atualidade.', link: 'https://www.youtube.com/watch?v=eUwiTnK0EA0', tags: ['CDFTV', 'Alura', 'Cod3r', 'Akita', 'Loiane', 'LucasMontano', 'Balta', 'Branas', 'Attekita', 'NetoMarin']},
    {nome: 'UmÓtimo-artigo_sobre_AsFormasMais-comuns_para-CombinarPalavrasEm_programacao', categoria: 'Balaio', descricao: 'Artigo apresentando as conveções de nomenclaturas mais comuns e suas principais aplicações.', link: 'https://visualdicas.blogspot.com/2021/05/quais-as-formas-mais-populares-para.html?fbclid=IwAR3A5IxqS3U_wZceDqjOpFVgFGlIAJCDKCNVbtgdpfXccZZl7U0LffOt8Js', tags: ['camelCase', 'PascalCase', 'snake_case', 'kebab-case']},
    {nome: 'perifacode/conteudo-gratuito', categoria: 'Balaio', descricao: 'Um repositório no GitHub com o mesmo intuito desta página.', link: 'https://github.com/perifacode/conteudo-gratuito', tags: ['Cursos', 'Desafios', 'Dicas']},
    {nome: 'Páginas/perfis/hashtags e afins interessantes aí pelas redes', categoria: 'Redes', descricao: 'São vários então juntei estes links em uma página só. Vale a pena transformar suas redes em algo um pouco mais interessante do que fotos de pratos e pessoas com pouca roupa...', link: 'https://rafaellindemann.notion.site/P-ginas-perfis-hashtags-e-afins-interessantes-a-pelas-redes-2c2324b387cf40ddafc437fe331ad6cd?pvs=4', tags: ['Instagram']},
    {nome: 'tabnews', categoria: 'Fóruns', descricao: 'Meio fórum de discussão, meio plataforma de artigos... ', link: 'https://www.tabnews.com.br/', tags: ['Fórum','Mídias', 'Deschamps']},
    {nome: 'dev.to', categoria: 'Fóruns', descricao: 'Muito mais uma plataforma de divulgação de artigos na área de desenvolvimento do que um fórum, mas também dá pra enxergar o dev.to como um fórum :D', link: 'https://dev.to/', tags: ['Fórum', 'Mídias', 'Artigos', 'Discussão', 'Inglês', 'Português']},
    {nome: 'Fernanda Kipper | Dev', categoria: 'Canal Youtube', descricao: 'Ativa o sininho que ela é demais! Um dos pontos fortes é ela resolvendo desafios de entrevistas técnicas, mas tá longe de ser só isso. Aproveita e espia os vídeos que ela faz para os membros que pagam 5 pila por mês...', link: '', tags: []},
    {nome: 'Repositório free-for-dev', categoria: 'Ferramentas', descricao: 'Mais ou menos 18 vidas são necessárias para só testar tudo que está listado lá: de hospedagem, ferramentas, softwares, plataformas, APIs, armazenamento... Tudo de GRÁTIS! ', link: 'https://github.com/ripienaar/free-for-dev', tags: ['Repositório', 'Ferramentas', 'Grátis', 'Free', 'MuitaCoisa']},
    {nome: 'Smart UI Studio', categoria: 'Repositórios', descricao: 'Um site daqueles de influencers mostrando pequenas coisas de frontend pra te inspirar e abrilhantar teu projeto.', link: 'https://www.smartinfogl.com/', tags: ['Frontend', 'Tips', 'HTML', 'CSS', 'Dicas', 'Repositório', 'Animações']},
    {nome: 'shields.io', categoria: 'Repositórios', descricao: 'Aqueles badgezinhos bunitinhos que a galera gosta de colocar no perfil do GitHub.', link: 'https://shields.io/', tags: ['Badges', 'GitHub', 'Repositório']},
    {nome: 'Repositório: Badges4-README.md-Profile', categoria: 'Repositórios', descricao: 'Uma seleção daqueles badgezinhos bunitinhos que a galera gosta de colocar no perfil do GitHub.', link: 'https://github.com/alexandresanlim/Badges4-README.md-Profile', tags: ['Badges', 'GitHub', 'Repositório']},
    {nome: 'Wave - teste de acessibilidade', categoria: 'Ferramentas', descricao: 'Ajuda a encontrar problemas de acessibilidade em seu site.', link: 'https://wave.webaim.org/', tags: ['Acessibilidade', 'Teste']},
    {nome: 'Conversor de cores - HEX <-> RGB', categoria: 'Ferramentas', descricao: 'Converta as suas cores de rgb(223, 78, 57) para #DF4E39 rapidinho e sem tretas', link: 'https://www.rapidtables.com/convert/color/hex-to-rgb.html', tags: ['Cores', 'Design', 'Conversor', 'RGB', 'Hex']},
    
    // {nome: '', categoria: '', descricao: '', link: '', tags: []},

]


// {nome: '', categoria: '', descricao: '', link: '', tags: []},



