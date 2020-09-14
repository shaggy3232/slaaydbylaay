import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class EditService extends Component{
    render(){

        return(
            <div>
                <h1>You can EditService a Service!</h1>
                <Button><Link to="/AdminDash">Dashboard</Link></Button>
            </div>
        )
    }
}