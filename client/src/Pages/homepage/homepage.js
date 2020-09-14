import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./homepage.css"
import Example from "../../Components/NavBar/navbar"
import { Container, Row, Button,Table} from 'reactstrap'
import background from "../../Assets/background.jpg"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"


const photos = [
    {
        name: 'photo 1',
        src: require("../../Assets/IMG_8025.PNG")
    },
    {
        name: 'photo 2',
        src: require("../../Assets/IMG_7496.JPG")
    },
    {
        name: 'photo 3',
        src: require("../../Assets/IMG_7759.jpg")
    },
    {
        name: 'photo 4',
        src: require("../../Assets/IMG_7501.JPG")
    },
]


class Mainpage extends Component{

    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
        }  
        
          togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         }


render(){
    const settings ={
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        slidesToScrool: 1 ,
        speed: 500,
        arrows: false
        
    }

    return(
        <span>
        <div className = "body" >
            <Example/>
            <div>
                <Container className = "Container">
                
                  
                        <div className = "Book-appointment">
                        <h3>Looking good shouldn't be a chore. I can make it easy</h3>
                  
                   
                        <img className ="image" src ={require( "../../Assets/IMG_6892.PNG")}/>
                        <img className ="image" src ={require( "../../Assets/IMG_7069.jpg")}/>
                        <img className ="image" src ={require( "../../Assets/IMG_7667.jpg")}/>
                        <img className ="image" src ={require( "../../Assets/IMG_7658.JPG")}/>
                      
                         {/* <Button onClick={this.togglePopup.bind(this)}>Book an Appointment</Button>
                                                {this.state.showPopup ?  
                        <Popup  
                                text='Send an email if you have any Questions'  
                                closePopup={this.togglePopup.bind(this)}  
                        />  
                        : null  
                        }  */}

                        </div>
                  
                        <div className = "Prices">
                        <h1>Pricing</h1>

                        <h3>Lashes</h3>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>Styles</th>
                                <th>Price($)</th>
                                <th>Refill($)</th>
                                <th>Timing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Classic</td>
                                <td>110</td>
                                <td>40</td>
                                <td>2 hours and 30 minutes</td>
                                </tr>
                                <tr>
                                <td>Hybrid</td>
                                <td>100</td>
                                <td>50</td>
                                <td>2 hours</td>
                                </tr>
                                <tr>
                                <td>Light Volume</td>
                                <td>110</td>
                                <td>60</td>
                                <td>2 hours</td>
                                </tr>
                                <tr>
                                <td>Volume</td>
                                <td>120</td>
                                <td>60</td>
                                <td>2 hours</td>
                                </tr>
                                <tr>
                                <td> Mega Volume</td>
                                <td>130</td>
                                <td>70</td>
                                <td>2 hours and 15 minutes</td>
                                </tr>

                                <tr>
                                <td> Lip Kit</td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                </tr>

                                <tr>
                                <td>Care Kit</td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                </tr>


                                
                            </tbody>
                            </Table>
                            <h3>Single Braides</h3>
                            <Table responsive>
                            <thead>
                                <tr>
                                <th>Size</th>
                                <th>Shoulder length</th>
                                <th>Mid-Back</th>
                                <th>Lower back</th>
                                <th>Below the waist</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Small</td>
                                <td>$100</td>
                                <td>$130</td>
                                <td>$150</td>
                                <td>$180</td>
                                </tr>
                                <tr>
                                <td>Medium</td>
                                <td>$100</td>
                                <td>$110</td>
                                <td>$120</td>
                                <td>$150</td>
                                </tr>
                                <tr>
                                <td>Large</td>
                                <td>$80</td>
                                <td>$80</td>
                                <td>$90</td>
                                <td>$100</td>
                                </tr>
                                <tr>
                                <td>X-Large</td>
                                <td>$70</td>
                                <td>$70</td>
                                <td>$90</td>
                                <td>$100</td>
                                </tr>
                            </tbody>
                            </Table>

                            <h3>Styled Braides</h3>
                            <Table responsive>
                            <thead>
                                <tr>
                                <th>Styles</th>
                                <th>Price($)</th>
                                <th>Timing (hours)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Lemondade</td>
                                <td>100</td>
                                <td>6</td>
                                </tr>
                                <tr>
                                <td>Fulani</td>
                                <td>110</td>
                                <td>5-6</td>
                                </tr>
                                <tr>
                                <td>Feed-in Braids 2-8</td>
                                <td>80</td>
                                <td>5</td>
                                </tr>
                                <tr>
                                <td>Feed-in Braids 9-15</td>
                                <td>100</td>
                                <td>6</td>
                                </tr>
                                <tr>
                                <td>Mens Braids</td>
                                <td>60</td>
                                <td>2</td>
                                </tr>
                            </tbody>
                            </Table>
                          
                    

              
                        </div>

                        <div className = "Book-appointment">
                        <h3>Gallery</h3>
                  
                        <Slider {...settings}>
                     {photos.map((photo) => {
                         return (
                             <div>
                                 <img className ="slides" src = {photo.src} />
                             </div>
                         )
                     })}
                     </Slider>

                        </div>

                        <div className = "About-Me">
                        
                        <Row style={{padding: "20px"}}><h3 >“Beauty is a lifestyle and just like any other, it requires maintenance.”</h3><p>My name is Laay. I currently obtain an Honors Bachelors of Arts with a  Major in French As Second Language and a Minor in Criminology. I am a 23 year old entrepreneur who has a passion for aesthetics. Of course, aesthetics was not always my passion, but client satisfaction has always been the greatest feeling for me working in the customer service industry. By taking my customer service skills to the next level, I was able to start a business that caters to not only satisfying my client’s needs, but creating a safe space  where clients can feel comfortable enhancing their natural features and leave with more confidence and self-esteem than they came with.</p></Row><img className ="image" src ={require( "../../Assets/AboutMePortrait.jpg")}/>
                       
                     
                        </div>
                  
                       
                  
                </Container>
            </div>
        </div>
        </span>
    );

    }

}

export default Mainpage
