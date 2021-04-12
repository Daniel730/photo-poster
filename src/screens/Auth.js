import React, { Component } from "react"
import { TextInput, View, TouchableOpacity, StyleSheet, Text } from "react-native"
import { connect } from "react-redux"
import { login, logout } from "../store/actons/user"
import { Gravatar } from "react-native-gravatar";

class Auth extends Component{
    state = {
        isLoggedIn: false,
        isRegister: false,
        name: 'Dan',
        email: 'daniel.730@outlook.com',
        password: '',
    }

    logout = () => {
        this.setState({isLoggedIn: false})
        this.props.onLogout()
    }

    send = () => {
        if(!this.state.isRegister){
            this.setState({isLoggedIn: true});
            this.props.onLogin({...this.state})
        }else{

        }
    }

    render(){
        const options = {email: this.state.email, secure: true}
        if(this.state.isLoggedIn){
            return(
                <View style={styles.container}>
                    <Gravatar options={options} style={styles.gravatar} />
                    <Text style={styles.nickname}>{this.state.name}</Text>
                    <Text style={styles.email}>{this.state.email}</Text>
                    <TouchableOpacity onPress={this.logout} style={styles.button}>
                        <Text style={styles.textButtom}>Sair</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                {this.state.isRegister ? 
                    <TextInput placeholderTextColor="#000" placeholder='Nome' style={styles.input} autoFocus value={this.state.name} onChangeText={name => this.setState({name})} />
                    : false
                }
                <TextInput placeholderTextColor="#000" placeholder='Email' style={styles.input} keyboardType="email-address" value={this.state.email} onChangeText={email => this.setState({email})} />
                <TextInput placeholderTextColor="#000" placeholder='Password' style={styles.input} secureTextEntry value={this.state.password} onChangeText={password => this.setState({password})} />
                <TouchableOpacity onPress={ this.send } style={styles.button}>
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
    textButtom: {
        fontSize: 20,
        color: "#fff"
    },
    nickname:   {
        fontSize: 30,
        margin: 30,
    },
    email: {    
        fontWeight: "bold",
        fontSize: 20
    },
    gravatar: {
        width: 150,
        height: 150,
        borderRadius: 75
    }

})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user)),
        onLogout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Auth)