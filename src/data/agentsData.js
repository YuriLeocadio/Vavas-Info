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
];

export default agentsData;
