import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actons/post'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert, Touchable } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from   'react-native-vector-icons/FontAwesome'

class AddPhoto extends Component{
    state = {
        image: null,
        comment: ''
    }

    save = async () => {
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

        this.setState({image: null, comment: ''})

        this.props.navigation.navigate("Feed")
    }

    render(){
        const noUser = "Você precisa estar logado para adicioanr uma imagem!"

        const options = {
            maxHeight: 600,
            maxWidth: 800
        }
        const callback = res => {
            if(!this.props.name){
                Alert.alert("falha!", noUser)
            }
            if(!res.didCancel){
                this.setState({image: {uri: res.uri, base64: res.data}})
            }
        }
        if(!this.props.name){
            return(
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="exclamation-circle" size={100} color="orange" />
                    <Text style={{fontSize: 40, fontWeight: 'bold', margin: 30}}>
                        Oops...
                    </Text>
                    <Text style={{fontSize: 20}}>
                        Você precisa estar logado para adicionar uma imagem!
                    </Text>
                </View>
            )
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

const mapStateToProps = ({user}) => {
    return{
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)