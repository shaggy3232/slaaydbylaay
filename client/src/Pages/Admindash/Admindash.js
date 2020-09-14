import React, {Component} from 'react'
import "./Admindash.css";


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {Link, Redirect} from 'react-router-dom'
import {
    Container,
    Navbar,
    NavbarBrand,
    Row,
    Col,
    FormGroup,
    Input,
    ListGroup,
    ListGroupItem,
    Button,
    
    
} from 'reactstrap';

class AdminDash extends Component{
    
    
 
    constructor(props){
        super(props);

        this.state = {
         

        }
    }
    

    componentDidMount = () => {
     
    }
  
    render(){
   

        return(
                <Container>
                    <div>
                        <Button><Link to="/AddService"> AddService</Link></Button>
                        <Button><Link to = "/EditService">Edit Service</Link></Button>

            

                    </div>
                </Container>
                            
        );
    }
}
export default AdminDash;