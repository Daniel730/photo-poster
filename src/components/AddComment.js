import React, { Component } from "react"
import { connect } from 'react-redux'
import { addComment } from '../store/actons/post'
import { View, Alert, TextInput, TouchableWithoutFeedback as TWF, StyleSheet, Text } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"

class AddComment extends Component {
    state = { 
        comment: "",
        editMode: false
    }

    handleAddComment = () => {
        this.props.onAddComment({
            postId: this.props.postId,
            comment: {
                nickname: this.props.name,
                comment: this.state.comment
            }
        })

        this.setState({ comment: '', editMode: false })
    }
    
    render(){
        const comment_icon = "comment-o"
        const times_icon = "times"
        let commentArea = null
        if(this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput 
                        placeholderTextColor="#CCC"
                        placeholder="Escreva algo..." 
                        style={styles.input} autoFocus 
                        value={this.state.comment} 
                        onChangeText={comment => this.setState({comment})} 
                        onSubmitEditing={this.handleAddComment} 
                    />
                    <TWF onPress={() => this.setState({editMode: false})}>
                        <Icon name={times_icon} size={15} color="#555" />
                    </TWF>
                </View>
            )
        }else{
            commentArea = (
                <TWF onPress={() => this.setState({editMode: true})}>
                    <View style={styles.container}>
                        <Icon name={comment_icon} size={25} color="#555" />
                        <Text style={styles.caption}>
                            Adicione um comentário...
                        </Text>
                    </View>
                </TWF>
            )
        }
        return(
            <View style={{flex: 1}}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: "#CCC"
    },
    input: {
        color: "black",
        width: "90%"
    }
})

const mapStateToProps = ({user}) => {
    return{
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddComment: payload => dispatch(addComment(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)