import React, { Component } from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import Post from "./src/components/Post";

export default class App extends Component{
  render(){
    const comments = [
      {
        nickname: "Dan Silva",
        comment: "Que legal, cara. Onde você estava?"
      },
      {
        nickname: "Diego Pongeti",
        comment: "Hmm"
      }  
    ]

    return(
      <View style={{flex: 1, backgroundColor: "white"}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    )
  }
}