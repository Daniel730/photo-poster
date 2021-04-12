import React, { Component } from "react"
import { TextInput, View, TouchableOpacity, StyleSheet, Text } from "react-native"

export default class Auth extends Component{
    state = {
        isLoggedIn: true,
        isRegister: true,
        name: '',
        email: '',
        password: ''
    }

    send = () => {
        console.warn(`Registrar: ${this.state.isRegister}`)
    }

    render(){
        if(this.state.isLoggedIn){
            return <Profile />
        }
        return(
            <View style={styles.container}>
                {this.state.isRegister ? 
                    <TextInput placeholderTextColor="#000" placeholder='Nome' style={styles.input} autoFocus value={this.state.name} onChangeText={name => this.setState({name})} />
                    : false
                }
                <TextInput placeholderTextColor="#000" placeholder='Email' style={styles.input} keyboardType="email-address" value={this.state.email} onChangeText={email => this.setState({email})} />
                <TextInput placeholderTextColor="#000" placeholder='Password' style={styles.input} secureTextEntry value={this.state.password} onChangeText={password => this.setState({password})} />
                <TouchableOpacity onPress={this.send} style={styles.button}>
                    <Text style={styles.buttonText}>{this.state.isRegister ? "Cadastrar" : "Login" }</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({isRegister: !this.state.isRegister})} style={styles.button}>
                    <Text style={styles.buttonText}>{this.state.isRegister ? "Voltar" : "Criar uma conta..." }</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#4286f4"
    },
    buttonText: {
        fontSize: 20,
        color: "#fff"
    },
    input: {
        marginTop: 20,
        width: "90%",
        backgroundColor: "#EEE",
        height: 40,
        borderWidth: 1,
        borderColor: "#333",
        color: "black",
    },

})