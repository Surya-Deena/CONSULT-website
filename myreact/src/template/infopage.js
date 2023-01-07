import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { BsArrowRight,BsTelephone,BsInstagram } from "react-icons/bs";
import { IoLocationSharp,IoMail } from "react-icons/io5";
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";

function Contacts(){
    return(
        <Container fluid className='ends'>
            <Row className='text-white pt-3'>
                <Col className='col-12 col-sm-6 col-lg-3  text-sm-start text-center'>
                <div className='m-5 m-sm-3 text-start'>  
                <h3 className='mb-3'>Quick Links</h3>
                <p><BsArrowRight className='arrow'/>Home</p>
                <p><BsArrowRight className='arrow'/>About us</p>
                <p><BsArrowRight className='arrow'/>Our Service</p>
                <p><BsArrowRight className='arrow'/>Latest Blog Post</p>
                <p><BsArrowRight className='arrow'/>Contact Us</p>
                </div>
                </Col>
                <Col className='col-12 col-sm-6 col-lg-3  text-sm-start text-center'>
                <div className='ms-5 mb-5 m-sm-3 text-start'>  
                <h3 className='mb-3'>Popular Links</h3>
                <p><BsArrowRight className='arrow'/>Home</p>
                <p><BsArrowRight className='arrow'/>About us</p>
                <p><BsArrowRight className='arrow'/>Our Service</p>
                <p><BsArrowRight className='arrow'/>Latest Blog Post</p>
                <p><BsArrowRight className='arrow'/>Contact Us</p>
                </div>
                </Col>
                <Col className='col-12 col-sm-6 col-lg-3  text-sm-start text-center'>
                <div className='ms-5 mb-5 m-sm-3 text-start'>  
                <h3 className='mb-3'>Get In Touch</h3>
                <p><IoLocationSharp className='arrow'/>123 Street, New York, USA</p>
                <p><IoMail className='arrow'/>info@example.com</p>
                <p><BsTelephone className='arrow'/>+012 345 67890</p>
                </div>
                </Col>
                <Col className='col-12 col-sm-6 col-lg-3  text-sm-start text-center'>
                <div className='ms-5 mb-5 m-sm-3 text-start'>  
                <h3 className='mb-3'>Follow Us</h3>
                <Button className='px-2 py-1 rounded-circle me-2 '><FaTwitter className='h3 pt-1 ' /></Button>
                <Button className='px-2 py-1 rounded-circle me-2'><FaFacebookF className='h3 pt-1' /></Button>
                <Button className='px-2 py-1 rounded-circle me-2'><FaLinkedinIn className='h3 pt-1' /></Button>
                <Button className='px-2 py-1 rounded-circle me-2'><BsInstagram className='h3 pt-1' /></Button>
                </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Contacts;