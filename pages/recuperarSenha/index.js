import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function recuperarSenha({navigation}){
    return(
        <View style = {styles.container}>
            <View style = {styles.cartao}>
                <Text style={styles.titulorecsenha}>Recuperação de senha</Text>
                <TextInput style={styles.input} placeholder="Nome de usuário"/>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry/>
                <TextInput style={styles.input} placeholder="Repita sua senha" secureTextEntry/>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                    <Text>Recuperar</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    cartao : {
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(0,0,3,45)',
        justifyContent: 'center',
        alignItems: 'center',
    },
        
    input: {
        color: 'orange',
        opacity: 0.5,
        textAlign: 'center',
        fontSize: 16,
        margin: 15,
        borderWidth: 1,
        
        borderBottomColor: 'orange',
    },

    botao: {
        width: '30%',
        backgroundColor: 'orange',
        textAlign: 'center',
        width: '30%',
        borderRadius: 25,
        margin: 8,
        fontSize: 18,
        fontStyle: 'bold',
    },
    titulorecsenha: {
        fontSize: 25,
        fontStyle: 'bold',
        color: 'orange',
        marginBottom: 15,
    }
})