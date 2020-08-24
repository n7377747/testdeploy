import React, { Component } from 'react';

import { Control, LocalForm, Errors, action } from 'react-redux-form';
import {Fade, Stagger } from 'react-animation-components';
import {Loading } from './LoadingComponent';

import {
    Card,
    CardBody,
    CardImg,
    CardHeader,
    Modal,
    ModalHeader,
    Label,
    ModalBody,
    Button,
    Row,
    Col
} from 'reactstrap';
import './customstyles.css';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validName = (len1, len2) => (val) => minLength(len1)(val) && maxLength(len2)(val);

class CommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCommentFormOpen: false
        }
        this.RenderComments = this.RenderComments.bind(this);
        this.toggleComment = this.toggleComment.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }
    
    toggleComment() {
        this.setState({
            isCommentFormOpen: !this.state.isCommentFormOpen
        });
    }
    handleComment(values) {
        this.toggleComment();
        this.props.postComment(values);
        //addComment(this.props.dish.id,values.rating,values.author,values.message)
        //event.preventDefault();//by default control goes to next page
    }
    RenderComments({ comments }) {
        const list = comments.map((comment) => {
        	if(comment.id%2===0)
            return (
                <Fade in>
			        <li key={comment.id} >
			        <Card className="text-secondary innerMessageCardRight" outline color="secondary">
			        <div className="container">
			            <p className="row"><strong>{comment.message}</strong></p>
			            <p>-- {comment.author} {"   "}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
			        </div>
			        </Card>
			        </li>
			    </Fade>
            );
        	else
        		return (
                <Fade in>
			        <li key={comment.id} >
			        <Card className="text-secondary innerMessageCardLeft" outline color="secondary">       
			        <div className="container">
			            <p className="row"><strong>{comment.message}</strong></p>
			            <p>-- {comment.author} {"   "}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
			        </div>
			        </Card>
			        </li>
			    </Fade>
            );
        });
        return (
            <Card outline color="secondary" style={{"border-radius":"40px","overflow":"hidden"}}>
            <CardHeader tag="h3" className="text-secondary border-secondary">
		                    Comments
            </CardHeader>
		        <CardBody>
		            <div className="container" style={{padding:"0px 35px 35px 35px"}}>
		                
	                    <ul className="list-unstyled">
	                        <Stagger in>
	                            {list}
	                        </Stagger>
	                    </ul>
	                    <div className="container">
		                <div className="row" style={{"margin-top":"20px"}}>
		                    <Button color="secondary"  style={{"border-radius":"40px",padding:"10px"}} onClick={this.toggleComment}>
		                        Leave a Comment{" "} <span className="fa fa-comment"></span></Button>
		                </div>
		                </div>
		            </div>
		        </CardBody>
		    </Card>
        );
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className='container'>
			        <div className="row">
			            <Loading />
			        </div>
			    </div>
            );
        } else if (this.props.errMess) {
            return (
                <div className='container'>
			        <div className="row">
			            <h4>{this.props.errMess}</h4>
			        </div>
			    </div>
            );
        } else if (this.props.comments != null) {
        	const Commentsform=()=>{
        		return(
        			<Card>
        			<CardHeader tag="h3">
        				Leave us a comment!
        			</CardHeader>
        			<CardBody>
        			<LocalForm onSubmit={(values)=>this.handleComment(values)}>
			                    <Row className="form-group">
			                        <Label htmlFor="author" md={2}>Name</Label>
			                        <Col md={10}>
			                        <Control.text className="form-control" model=".author" id="author" name="author" placeholder="Name" validators={{required,validName:validName(3,15)}} />
			                        <Errors className="alert-danger text-center" model=".author" show="touched" messages={{
											required:" required ! .. ",
											validName:" Please enter a valid name(3-20 characters) "
										}} />
			                        </Col>
			                    </Row>
			                    <Row className="form-group">
			                        <Label htmlFor="email" md={2}>Email</Label>
			                        <Col md={10}>
			                        <Control.text className="form-control" model=".email" id="email" name="email" placeholder="Email ID" validators={{required,validEmail}} />
			                        <Errors className="alert-danger text-center" model=".email" show="touched" messages={{
											required:"required ! ..",
											validEmail:" Please enter a valid email "
										}} />
			                        </Col>
			                    </Row>
			                    <Row className="form-group">
			                        <Label htmlFor="message" md={2}>Comment</Label>
			                        <Col md={10}>
			                        <Control.textarea className="form-control" model=".message" id="message" name="message" placeholder="Tell us about your opinion" rows={12} validators={{validName:validName(2,500)}} />
			                        <Errors className="alert-danger text-center" model=".message" show="touched" messages={{
											required:" required ! .. ",
											validName:" Write something before you submit "
										}} />
			                        </Col>
			                    </Row>
			                    <Row className="form-group">
			                        <Col md={{size:10,offset:2}}>
			                        <Button type="submit" color="primary">
			                            <span className="fa fa-pencil "> </span>
			                            {" "}Submit 
			                        </Button>
			                        </Col>
			                    </Row>
			                </LocalForm>
			            </CardBody>
			            </Card>
			        );
        	};
            return (
                <div className="container">
                	<div className="row ">
			            <div className="col-12 col-md-8 col-lg-6 offset-md-2 m-1" >
			                <Commentsform/>
			            </div>
			        </div>
			        <div className="row ">
			            <div className="col-12 col-md-8 col-lg-6 offset-md-2 m-1" >
			                {this.RenderComments({comments:this.props.comments})}
			            </div>
			        </div>
			        <Modal isOpen={this.state.isCommentFormOpen} toggle={this.toggleComment}>
			            <ModalHeader toggle={this.toggleComment}>
			                Kindly leave your thoughts below
			            </ModalHeader>
			            <ModalBody>
			                <LocalForm onSubmit={(values)=>this.handleComment(values)}>
			                    <Row className="form-group">
			                        <Label htmlFor="author" md={2}>Name</Label>
			                        <Col md={10}>
			                        <Control.text className="form-control" model=".author" id="author" name="author" placeholder="Name" validators={{required,validName:validName(3,15)}} />
			                        <Errors className="alert-danger text-center" model=".author" show="touched" messages={{
											required:" required ! .. ",
											validName:" Please enter a valid name(3-20 characters) "
										}} />
			                        </Col>
			                    </Row>
			                    <Row className="form-group">
			                        <Label htmlFor="email" md={2}>Email</Label>
			                        <Col md={10}>
			                        <Control.text className="form-control" model=".email" id="email" name="email" placeholder="Email ID" validators={{required,validEmail}} />
			                        <Errors className="alert-danger text-center" model=".email" show="touched" messages={{
											required:"required ! ..",
											validEmail:" Please enter a valid email "
										}} />
			                        </Col>
			                    </Row>
			                    <Row className="form-group">
			                        <Label htmlFor="message" md={2}>Comment</Label>
			                        <Col md={10}>
			                        <Control.textarea className="form-control" model=".message" id="message" name="message" placeholder="Tell us about your opinion" rows={12} validators={{validName:validName(2,500)}} />
			                        <Errors className="alert-danger text-center" model=".message" show="touched" messages={{
											required:" required ! .. ",
											validName:" Write something before you submit "
										}} />
			                        </Col>
			                    </Row>
			                    <Row className="form-group">
			                        <Col md={{size:10,offset:2}}>
			                        <Button type="submit" color="primary">
			                            <span className="fa fa-pencil "> </span>
			                            {" "}Submit 
			                        </Button>
			                        </Col>
			                    </Row>
			                </LocalForm>
			            </ModalBody>
			        </Modal>
			    </div>

			);
        }
    }
}
export default CommentComponent;