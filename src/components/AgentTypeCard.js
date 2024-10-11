import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AgentTypeCard({ types }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Lista de Agentes', { types })}
        >
            <Image source={types.img} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{types.type}</Text>
                <Text style={styles.description}>{types.objective}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 16,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 10,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 14,
        color: '#ddd',
    },
});
