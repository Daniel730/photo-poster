import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert, Touchable } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class AddPhoto extends Component{
    state = {
        image: null,
        comment: ''
    }

    save = async () => {
        Alert.alert("Imagem adicionada!", this.state.comment)
    }

    render(){
        const options = {
            maxHeight: 600,
            maxWidth: 800
        }
        const callback = res => {
            if(!res.didCancel){
                this.setState({image: {uri: res.uri, base64: res.data}})
            }
        }
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhar Foto</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <View style={{ margin:10, flexDirection: "row", width: "90%", justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => launchCamera(options, callback)} style={styles.button}>
                            <Text style={styles.buttomText}>Tirar uma foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => launchImageLibrary(options, callback)
                        } style={styles.button}>
                            <Text style={styles.buttomText}>Escolha uma foto</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput placeholder="Comentário..." placeholderTextColor="#000"  style={styles.input} value={this.state.comment} onChangeText={comment => this.setState({comment})} />
                    <TouchableOpacity onPress={this.save} style={styles.button} >
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: "90%",
        height: Dimensions.get("window").width / 2,
        backgroundColor: "#EEE",
        marginTop: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)"
    },
    image: {
        width: '100%',
        height: Dimensions.get("window").width / 2,
        resizeMode: "center"
    },
    button: {
        padding: 10,
        backgroundColor: '#4286f4',
        marginVertical: 30
    },
    buttomText: {
        fontSize: 20,
        color: "#FFF"
    },
    input: {
        marginTop: 20,
        width: "90%",
        borderWidth: 1,
        color: "black"
    }
})