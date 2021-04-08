import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from "react-native"
import Header from '../components/Header'
import Post from '../components/Post'


export default class Feed extends Component{
    state = {
        posts: [{
            id: Math.random(),
            nickname: "Daniel Silva",
            email: "daniel.silva@direitodeouvir.com.br",
            image: require("../../assets/imgs/fence.jpg"),
            comments: [{
                nickname: "Diego Pongeti",
                comment: "Nice"
            }, {
                nickname: "Vinius Miras",
                comment: "Nice²"
            }]
        }, {
            id: Math.random(),
            nickname: "Vinius Miras",
            email: "vinius@teste.com",
            image: require("../../assets/imgs/bw.jpg"),
            comments: [{
                nickname: "Diego Pongeti",
                comment: "Nice"
            },{
                nickname: "Daniel Silva",
                comment: "Nice²"
            }]
        }]
    }

    render() {
        return(
            <View style={styles.container}>
                <Header />
                <FlatList 
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Post key={item.id} {...item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F5FCFF"
    }
})