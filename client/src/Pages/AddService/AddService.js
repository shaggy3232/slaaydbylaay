import React, { Component } from 'react'
import { Button,Input } from 'reactstrap'
import { Link } from 'react-router-dom'


export default class AddService extends Component{
ç
    constructor(props){
        super(props);

        this.state= {
            Service: ' ',
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
                   
                   <input className ="StyleEdit" type="text" id="Style" name="Style" onChange = {this.handleSetStyle} value = {this.state.Style}/>
                   <input className ="PriceEdit" type="text" id="Price" name="Price" onChange = {this.handleSetPrice} value = {this.state.Price}/>
                   <input className ="TimeEdit" type="text" id="Time" name= "Time" onChange = {this.handleSetTime} value = {this.state.Time}/>
                   <input className ="LengthEdit" type="text" id="Length" name="Length" onChange = {this.handleSetLength} value = {this.state.Length}/>
               </div>
               </form> 


            </div>

           
        )
    }
}