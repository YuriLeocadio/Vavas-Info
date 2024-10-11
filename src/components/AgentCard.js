import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function AgentCard({ agent }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes do Agente', { agent })}
        >
            <Image source={agent.img} style={styles.logo} />
            <Text style={styles.title}>{agent.name}</Text>
            <View style={styles.skillsContainer}>
                {agent.abilities.map((abilities, index) => (
                    <Text key={index} style={styles.skill}>{abilities},</Text>
                ))}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 16,
        margin: 8,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    skill: {
        fontSize: 14,
        color: '#fff',
        marginHorizontal: 4,
        marginVertical: 2,
    },
});