import React from 'react';  
import "./Pop-up.css"; 
import { Container, Row, Button,Table} from 'reactstrap'
import FeedbackForm from "../Feedback-Forms/FeedbackForm"

class Popup extends React.Component {  
  render() {  
return (  

<div className='popup'>  

<div className='popupinner'>  
<FeedbackForm env={this.props.env} />
  
<Button className="btn" onClick={this.props.closePopup}>Close me</Button>  
</div>  
</div>  
);  
}  
}  

export default Popup;