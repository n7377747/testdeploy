import React, { Component } from 'react';
import {actions} from "react-redux-form";
import {connect } from 'react-redux';
import {postComment,fetchComments} from '../redux/ActionCreators';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import CommentComponent from './CommentsComponent';

const mapStateToProps=(state)=>{
    return {
      comments:state.comments
    }
  }


const mapDispatchToProps=(dispatch)=>({
  postComment:(comment)=>dispatch(postComment(comment)),
  fetchComments:()=>{dispatch(fetchComments())}
  
})



class Main extends Component {
  constructor(props) {
    super(props);
    
}

componentDidMount(){
  this.props.fetchComments();
}

render(){
	
	return (
		<div>
		<h4>helo</h4>
			<CommentComponent
			commentsLoading={this.props.comments.isLoading}
			commentsErrMess={this.props.comments.errMess}
			comments={this.props.comments.comments}
			postComment={this.props.postComment}
			 />
		</div>
		);

}
}



export default connect(mapStateToProps,mapDispatchToProps)(Main);