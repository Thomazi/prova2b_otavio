import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";



export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <View style = {styles.cartaohome}>
                <Text style = {styles.titulohome}>Home</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cartaohome:{
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',   

    },

    titulohome: {
        textAlign: 'center',
        color: 'orange',
        fontStyle: 'bold',
        fontSize: 40,
        margin: 20,
        
    },
})