import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AgentDetailsCard from '../components/AgentDetailsCard';

export default function AgentDetails() {
    const route = useRoute();
    const { agent } = route.params;

    console.log(route.params);
    
    if (!agent) {
        return <Text style={styles.errorText}>Agente não encontrado</Text>;
    }

    return (
        <View style={styles.container}>
            <AgentDetailsCard agent={agent} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
