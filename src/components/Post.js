import React, {Component} from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import AddComment from './AddComment'

import Author from './Author'
import Comments from './Coments'

class Post extends Component {
    render(){

        const addComment = this.props.name ? <AddComment postId={this.props.id} /> : null

        return(
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author email={this.props.email} nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />
                {addComment}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain'
    }
})

const mapStateToProps = ({user}) => {
    return{
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)