import React, { Component } from "react"
import { TextInput, View, TouchableOpacity, StyleSheet, Text } from "react-native"

export default class Register extends Component{
    state = {
        nome: '',
        email: '',
        password: ''
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input} autoFocus value={this.state.name} onChangeText={name => this.setState({name})} />
                <TextInput placeholder='Email' style={styles.input} keyboardType="email-address" value={this.state.email} onChangeText={email => this.setState({email})} />
                <TextInput placeholder='Password' style={styles.input} secureTextEntry value={this.state.password} onChangeText={password => this.setState({password})} />
                <TouchableOpacity onPress={() => false} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
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
        borderColor: "#333"
    },

})