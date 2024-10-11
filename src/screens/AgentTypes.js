import { FlatList, View } from "react-native";
import AgentTypeCard from "../components/AgentTypeCard";

const agentTypes = [
    {
        id: '1',
        type: 'Duelista',
        img: require('../../assets/logo-duelista.png'),
        objective: 'Duelistas são agentes voltados para combate direto e eliminação de inimigos. Eles possuem habilidades agressivas que os ajudam a iniciar confrontos e dominar áreas. Esses agentes são cruciais para abrir espaço para a equipe e garantir vantagens.'
    },
    {
        id: '2',
        type: 'Sentinela',
        img: require('../../assets/logo-sentinela.png') ,
        objective: 'O objetivo dos Sentinelas é proteger áreas e apoiar o time com utilitários defensivos. Eles colocam armadilhas, curam e controlam flancos, sendo especialistas em segurar locais e impedir avanços inimigos.'
    },
    {
        id: '3',
        type: 'Controlador',
        img: require('../../assets/logo-controlador.png'),
        objective: 'Controladores focam em bloquear a visão e restringir o movimento dos adversários. Eles utilizam fumaças e outros utilitários para controlar o mapa, limitando a capacidade do inimigo de avançar ou defender.'
    },
    {
        id: '4',
        type: 'Iniciador',
        img: require('../../assets/logo-iniciador.png'),
        objective: 'Iniciadores são responsáveis por preparar o terreno para o time avançar, usando habilidades para revelar inimigos, desorientá-los ou abrir caminho para as entradas. Eles ajudam a equipe a se posicionar de maneira mais segura para tomar o controle.'
    }
]

export default function AgentTypes() {
    return (
        <View>
            <FlatList 
                data={agentTypes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <AgentTypeCard types={item} />
                )}
            />
        </View>
    )
}