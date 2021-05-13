import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Connexion extends React.Component {
    render(){
        return(
            <View style={styles.connexion}>
                <Text style={styles.header}>LOGO</Text>

                <TextInput style={styles.textinput} placeholder="Pseudo"
                underlineColorAndroid={'transparent'}/>

                <TextInput style={styles.textinput} placeholder="Mot de passe"
                secureTextEntry={true} underlineColorAndroid={'transparent'}/>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>CONNEXION</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    connexion: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    }, 
    btntext: {
        color: '#fff',
        fondWeignt: 'bold',
    }
});