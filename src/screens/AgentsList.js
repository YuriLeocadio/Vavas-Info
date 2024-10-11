import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import AgentCard from '../components/AgentCard';
import { useRoute } from "@react-navigation/native";
import agentsData from '../data/agentsData';

export default function AgentsList() {
    const route = useRoute();
    const { types } = route.params;

    const filteredAgents = agentsData.filter(agent => agent.role === types.type);

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredAgents}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <AgentCard agent={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
