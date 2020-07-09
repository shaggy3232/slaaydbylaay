
import React, { Component } from 'react';
import './FeedbackForm.css'
import { Form,FormGroup, Label, Input, Button } from 'reactstrap'
import axios from "axios"


export default class FeedbackForm extends Component {

    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handlechange = this.handlechange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handlechange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

     async handleSubmit(e) {
        e.preventDefault()
        const { name , email, message} = this.state

        const form = await axios.post('./api/form' , {
            name,
            email,
            message
        })
    }
render(){
    return(
       
        <Form onSubmit={this.handleSubmit} style={{ padding: 10 }}>
            <h3>I will get get back to you as soon as possible</h3>
            <FormGroup>
                <Label for= "name">
                    Name:
                </Label>
                <Input type="text" name="name" onChange={this.handlechange}/>
            </FormGroup>
            <FormGroup>
                <Label for="email">
                    Email:
                </Label>
                <Input type="text" name="email" onChange={this.handlechange}/>
            </FormGroup>

            <FormGroup>
                <Label for="message">
                    Message:
                </Label>
                <Input type="textarea" name="message" onChange={this.handlechange}/>
            </FormGroup>

            <Button>Submit</Button>

        </Form>
        );
}

}