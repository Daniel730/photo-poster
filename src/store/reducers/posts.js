import { ADD_COMMENT, ADD_POST } from "../actons/actionTypes"

const INITIAL_STATE = {
    posts: [{
        id: Math.random(),
        nickname: "Daniel Silva",
        email: "daniel.silva@direitodeouvir.com.br",
        image: require("../../../assets/imgs/fence.jpg"),
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
        image: require("../../../assets/imgs/bw.jpg"),
        comments: [{
            nickname: "Diego Pongeti",
            comment: "Nice"
        },{
            nickname: "Daniel Silva",
            comment: "Nice²"
        }]
    }]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return{
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId){
                        if(post.comments){
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        }else{
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default: 
            return state
    }
}

export default reducer