import React, { Component } from 'react'
import { Button,Input,Form, FormGroup, Label,FormText} from 'reactstrap'
import { Link } from 'react-router-dom'
import "./AddService.css"


export default class AddService extends Component{
ç
    constructor(props){
        super(props);

        this.state= {
            Service: 'Service',
            Style: "Style",
            Price: "Price",
            Time: "Time",
            Refill: "Refill",
            Length: "Length",
            Lashes: [],
            Braids: [],
            SingleBraids: []

        }
    }



    handlePickService = (e) => {
        this.setState({
            Service: e.target.value
        }).then(console.log(this.state.Service))
        
    }

    handleSetStyle = (e) =>{
        this.setState({
            Style : e.target.value
        })
    }

    handleSetPrice = (e) =>{
        this.setState({
            Price : e.target.value
        })
    }

    handleSetTime = (e) =>{
        this.setState({
            Time : e.target.value
        })
    }

    handleSetLength = (e) =>{
        this.setState({
            Length: e.target.value
        })
    }

    handleSetRefill = (e) =>{
        this.setState({
            Refill: e.target.value
        })
    }
    
    onSubmit(e){

    }

    render(){
       
           
        

        return(
            <div>

                <h1>You can Add a Service!</h1>
                <Button><Link to="/AdminDash">Dashboard</Link></Button>
                <Input type = "select" onChange = { this.handleChangeClassFilter }>
                    {<option value = " "> All</option>}
                    {<option value ="Lashes">Lashes</option>}
                    {<option value = "Singlebraids">SingleBraids</option>}
                    {<option value = "braids">Braids</option>}
                    </Input>
                <form id="myForm" name="myForm" >   
                <div>
                    <select onChange = {this.handlePickService} value = {this.state.Service}></select>
                   <input className ="StyleEdit" type="text" id="Style" name="Style" onChange = {this.handleSetStyle} value = {this.state.Style}/>
                   <input className ="PriceEdit" type="text" id="Price" name="Price" onChange = {this.handleSetPrice} value = {this.state.Price}/>
                   <input className ="TimeEdit" type="text" id="Time" name= "Time" onChange = {this.handleSetTime} value = {this.state.Time}/>
                   <input className ="LengthEdit" type="text" id="Length" name="Length" onChange = {this.handleSetLength} value = {this.state.Length}/>
               </div>
               </form> 
               <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="Service">Service</Label>
        <Input type="select" name="select" id="Service">
          <option>Braids</option>
          <option>Lashes</option>
          <option>SingleBraids</option>
          <option>Waxing</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>


            </div>

           
        )
    }
}