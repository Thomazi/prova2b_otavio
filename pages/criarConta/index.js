import { StyleSheet, Button, TextInput, View, TouchableOpacity, Text } from "react-native";

export default function criarConta({navigation}){
    return(
        <View style = {styles.containerCriarconta}>
            <View style = {styles.cartao}>
                <Text style = {styles.titulo}>Criar conta</Text>
                <TextInput style ={styles.inputcriarconta}placeholder="Nome de usuário"/>
                <TextInput style ={styles.inputcriarconta}placeholder="email"/>
                <TextInput style ={styles.inputcriarconta}placeholder="senha" secureTextEntry/>
                <TouchableOpacity style = {styles.botao} onPress={() => navigation.navigate('Login')}>
                    <Text>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCriarconta: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    cartao: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputcriarconta: {
        margin: 10,
        fontSize: 18,
        fontStyle: 'bold',
        opacity: 0.5,
        color: 'orange',
        borderWidth: 1,
        borderBottomColor: 'orange',
    },

    botao: {
        alignItems: 'center',
        width: '30%',
        backgroundColor: 'orange',
        borderRadius: 20,
        fontSize: 17,
    },
    titulo:{
        color: 'orange',
        fontSize: 30,
        marginBottom: 15,
    }
})