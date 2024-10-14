// src/data/agentsData.js
const agentsData = [
    {
        id: '1',
        name: 'Jett',
        img: require('../../assets/agents/jett.png'),
        role: 'Duelista',
        description: 'Jett é uma duelista ágil e evasiva que se destaca em combate de alta velocidade.',
        objective: 'Eliminação rápida de inimigos.',
        abilities: ['Corte', 'Fumaça', 'Frenesi', 'Ultimate: Vento Cortante']
    },
    {
        id: '2',
        name: 'Sage',
        img: require('../../assets/agents/sage.png'),
        role: 'Sentinela',
        description: 'Sage é uma curadora que pode reviver aliados e controlar o espaço.',
        objective: 'Suporte e cura para a equipe.',
        abilities: ['Orbe Curativo', 'Barreira', 'Orbe de Aceleração', 'Ultimate: Resurreição']
    },
    {
        id: '3',
        name: 'Omen',
        img: require('../../assets/agents/omen.png'),
        role: 'Controlador',
        description: 'Omen é um controlador das sombras que pode obscurecer a visão dos inimigos.',
        objective: 'Controle do mapa e criação de oportunidades.',
        abilities: ['Fumaça', 'Passo das Sombras', 'Porta do Desconhecido', 'Ultimate: Fúria das Sombras']
    },
    {
        id: '4',
        name: 'Breach',
        img: require('../../assets/agents/breach.png'),
        role: 'Iniciador',
        description: 'Breach é um iniciador que usa explosivos para abrir caminho.',
        objective: 'Quebra de defesas inimigas.',
        abilities: ['Flashpoint', 'Fault Line', 'Aftershock', 'Ultimate: Rolling Thunder']
    },
    {
        id: '5',
        name: 'Phoenix',
        img: require('../../assets/agents/phoenix.png'),
        role: 'Duelista',
        description: 'Phoenix é um duelista que usa fogo para causar dano e curar a si mesmo.',
        objective: 'Combate direto e controle de áreas pequenas.',
        abilities: ['Labareda', 'Mãos Quentes', 'Bola Curva', 'Ultimate: Renascimento']
    },
    {
        id: '6',
        name: 'Sova',
        img: require('../../assets/agents/sova.png'),
        role: 'Iniciador',
        description: 'Sova é um iniciador que usa sua tecnologia para rastrear e caçar inimigos.',
        objective: 'Revelar posições inimigas e suporte à equipe.',
        abilities: ['Flecha de Choque', 'Drone Coruja', 'Flecha Rastreadora', 'Ultimate: Fúria do Caçador']
    },
    {
        id: '7',
        name: 'Raze',
        img: require('../../assets/agents/raze.png'),
        role: 'Duelista',
        description: 'Raze é uma duelista que utiliza explosivos para causar caos no campo de batalha.',
        objective: 'Destruição em massa e controle de áreas.',
        abilities: ['C4 Explosivo', 'Bumba', 'Granada de Fragmentação', 'Ultimate: Estraga-Prazeres']
    },
    {
        id: '8',
        name: 'Cypher',
        img: require('../../assets/agents/cypher.png'),
        role: 'Sentinela',
        description: 'Cypher é um sentinela especialista em vigilância que pode coletar informações cruciais sobre os inimigos.',
        objective: 'Monitoramento de áreas e controle de informações.',
        abilities: ['Armadilha de Fio', 'Câmera Espiã', 'Jaula Cibernética', 'Ultimate: Roubo Neural']
    },
    {
        id: '9',
        name: 'Brimstone',
        img: require('../../assets/agents/brimstone.png'),
        role: 'Controlador',
        description: 'Brimstone é um controlador que pode fornecer suporte aéreo e utilitários para dominar o mapa.',
        objective: 'Fornecer suporte tático e controle de áreas grandes.',
        abilities: ['Fumaça do Céu', 'Incendiário', 'Baliza Estimulante', 'Ultimate: Ataque Orbital']
    },
    {
        id: '10',
        name: 'Viper',
        img: require('../../assets/agents/viper.png'),
        role: 'Controlador',
        description: 'Viper usa veneno para controlar áreas e infligir dano gradual aos inimigos.',
        objective: 'Controle de área com veneno e negação de espaço.',
        abilities: ['Nuvem Venenosa', 'Poça Venenosa', 'Cortina Tóxica', 'Ultimate: Poço Peçonhento']
    },
    {
        id: '11',
        name: 'Reyna',
        img: require('../../assets/agents/reyna.png'),
        role: 'Duelista',
        description: 'Reyna é uma duelista que se alimenta das almas dos inimigos que abate.',
        objective: 'Abater inimigos e ganhar vantagens pessoais.',
        abilities: ['Olhar Voraz', 'Devorar', 'Dispensar', 'Ultimate: Imperatriz']
    },
    {
        id: '12',
        name: 'Killjoy',
        img: require('../../assets/agents/killjoy.png'),
        role: 'Sentinela',
        description: 'Killjoy é uma sentinela que utiliza engenhocas para dominar o campo de batalha.',
        objective: 'Controle de áreas e proteção de pontos importantes.',
        abilities: ['Torreta', 'Nanoswarm', 'Alarmbot', 'Ultimate: Confinamento']
    },
    {
        id: '13',
        name: 'Skye',
        img: require('../../assets/agents/skye.png'),
        role: 'Iniciador',
        description: 'Skye é uma iniciadora com habilidades de cura e rastreamento de inimigos.',
        objective: 'Apoio à equipe com curas e revelação de inimigos.',
        abilities: ['Estimulante Explosivo', 'Luz Guia', 'Explosivo Rastreador', 'Ultimate: Predadores da Natureza']
    },
    {
        id: '14',
        name: 'Yoru',
        img: require('../../assets/agents/yoru.png'),
        role: 'Duelista',
        description: 'Yoru é um duelista que pode se teletransportar e criar ilusões para enganar os inimigos.',
        objective: 'Criar distrações e flanquear os inimigos.',
        abilities: ['Passagem Dimensional', 'Duplicata', 'Fenda Falsa', 'Ultimate: Rasgo Dimensional']
    },
    {
        id: '15',
        name: 'Astra',
        img: require('../../assets/agents/astra.png'),
        role: 'Controlador',
        description: 'Astra é uma controladora que usa energia estelar para manipular o campo de batalha.',
        objective: 'Controle total do campo de batalha com habilidades multidimensionais.',
        abilities: ['Poço Gravitacional', 'Pulso Nova', 'Nebulosa', 'Ultimate: Forma Astral / Divisa Cósmica']
    },
    {
        id: '16',
        name: 'KAY/O',
        img: require('../../assets/agents/kayo.png'),
        role: 'Iniciador',
        description: 'KAY/O é um robô que pode suprimir as habilidades dos inimigos e jogar de maneira altamente tática.',
        objective: 'Negar habilidades inimigas e controlar o avanço.',
        abilities: ['Explosivo Básico', 'Faca de Supressão', 'Flash/Drive', 'Ultimate: Comando/Zero']
    },
    {
        id: '17',
        name: 'Chamber',
        img: require('../../assets/agents/chamber.png'),
        role: 'Sentinela',
        description: 'Chamber é uma sentinela especializada em armadilhas e eliminação precisa dos inimigos.',
        objective: 'Proteção de áreas e abate preciso de inimigos.',
        abilities: ['Marca Registrada', 'Rendezvous', 'Tour de Force', 'Ultimate: Último Compromisso']
    },
    {
        id: '18',
        name: 'Neon',
        img: require('../../assets/agents/neon.png'),
        role: 'Duelista',
        description: 'Neon é uma duelista veloz que pode correr grandes distâncias e eliminar inimigos com eletricidade.',
        objective: 'Velocidade extrema e abates rápidos.',
        abilities: ['Via Expressa', 'Tiro Atordoante', 'Pista Rápida', 'Ultimate: Tempestade Elétrica']
    },
    {
        id: '19',
        name: 'Fade',
        img: require('../../assets/agents/fade.png'),
        role: 'Iniciador',
        description: 'Fade é uma iniciadora que usa pesadelos para rastrear e aterrorizar os inimigos.',
        objective: 'Rastreamento e controle psicológico dos inimigos.',
        abilities: ['Corte de Pavor', 'Aperto Tenebroso', 'Besta Sombria', 'Ultimate: Espectro da Noite']
    },
    {
        id: '20',
        name: 'Gekko',
        img: require('../../assets/agents/gekko.png'),
        role: 'Iniciador',
        description: 'Gekko é um iniciador que usa criaturas para confundir e desorientar os inimigos.',
        objective: 'Distração e suporte para o time com criaturas únicas.',
        abilities: ['Criatura Explosiva', 'Rebote', 'Sustento', 'Ultimate: Carrossel Caótico']
    },
    {
        id: '21',
        name: 'Deadlock',
        img: require('../../assets/agents/deadlock.png'),
        role: 'Sentinela',
        description: 'Deadlock é uma sentinela que usa tecnologia avançada para prender e controlar os inimigos.',
        objective: 'Controle de áreas e aprisionamento de inimigos.',
        abilities: ['Rede de Contenção', 'Esfera de Atordoamento', 'Pulso Magnetizado', 'Ultimate: Prisão Neural']
    },
    {
        id: '22',
        name: 'Harbor',
        img: require('../../assets/agents/harbor.png'),
        role: 'Controlador',
        description: 'Harbor é um controlador que manipula a água para proteger seus aliados e obstruir o avanço inimigo.',
        objective: 'Controle de área e proteção da equipe.',
        abilities: ['Maremoto', 'Maré Alta', 'Cascata', 'Ultimate: Mar Revolto']
    },
    {
        id: '23',
        name: 'Vyse',
        img: require('../../assets/agents/vyse.png'),
        role: 'Sentinela',
        description: 'Vyse é uma sentinela que utiliza armadilhas tecnológicas para isolar e neutralizar ameaças.',
        objective: 'Controle de espaço e neutralização de inimigos.',
        abilities: ['Espinho de Metal', 'Campo Bloqueador', 'Armadilha Paralisante', 'Ultimate: Steel Garden']
    },
    {
        id: '24',
        name: 'Clove',
        img: require('../../assets/agents/clove.png'),
        role: 'Iniciadora',
        description: 'Clove utiliza habilidades que manipulam a natureza para desorientar seus inimigos e apoiar seus aliados.',
        objective: 'Controlar o campo de batalha e garantir vantagens estratégicas com habilidades naturais.',
        abilities: ['Raios de Espinhos', 'Campo de Flora', 'Muralha de Arbustos', 'Ultimate: Chamado da Natureza']
    },
];


export default agentsData;
