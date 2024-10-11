import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AgentDetailsCard({ agent }) {
    if (!agent) {
        return <Text style={styles.errorText}>Detalhes do agente não disponíveis</Text>;
    }

    return (
        <View style={styles.card}>
            <Image source={agent.img} style={styles.logo} />
            <Text style={styles.name}>{agent.name}</Text>
            <Text style={styles.role}>{agent.role}</Text>
            <Text style={styles.description}>{agent.description}</Text>
            <Text style={styles.objective}>{agent.objective}</Text>
            <Text style={styles.title}>Habilidades:</Text>
            {agent.abilities && agent.abilities.length > 0 ? (
                agent.abilities.map((ability, index) => (
                    <Text key={index} style={styles.ability}>
                        - {ability}
                    </Text>
                ))
            ) : (
                <Text style={styles.noAbilities}>Nenhuma habilidade disponível</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 16,
        margin: 16,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    logo: {
        width: 250,
        height: 450,
        alignSelf: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    role: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#01aaff',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 5,
    },
    objective: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 5,
        fontStyle: 'italic',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
        marginBottom: 5,
    },
    ability: {
        fontSize: 16,
        color: '#fff',
    },
    noAbilities: {
        fontSize: 16,
        color: 'red'
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
});
