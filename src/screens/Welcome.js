import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from '../../assets/logo.png'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.welcome}>Bem-vindo ao Mundo dos Agentes de Valorant!</Text>
            <Text style={styles.description}>Explore todos os agentes, aprenda suas habilidades e domine o jogo.</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Tipos de Agentes')}
            >
                <Text style={styles.btnText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    welcome: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        padding: 16,
        backgroundColor: '#01aaff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});