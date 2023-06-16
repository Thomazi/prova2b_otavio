import { Button } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function Login({navigation}){
    return(
        <View style = {styles.container}>
            <View style = {styles.cartao}>
                <Text style={styles.titulologin}>Login</Text>
                <TextInput style={styles.input} placeholder="Nome de usuário"/>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry/>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('criarConta')}>
                    <Text>Criar conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('recuperarSenha')}>
                    <Text>Esqueci a senha</Text>
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

    titulologin: {
        fontSize: 30,
        fontStyle: 'bold',
        color: 'orange',
        textAlign: 'center',
        paddingBottom: 20,
    }


})