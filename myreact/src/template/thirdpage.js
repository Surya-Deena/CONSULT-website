import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";

function Third(){
    return(
        <Container className='mt-5'>
            <h1 className='text-center display-5 fw-bold'>What We Offer</h1>
            <Row className='mt-5 text-center '>
               <Col className='col-12 col-md-6 col-lg-4 p-5'>
                <div className='icons'>
                <span className='icon px-4 py-3 rounded-circle mb-4'><FaUserTie className='mb-3' /></span>
                </div>
                <h3>Business Research</h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
               </Col>
               <Col className='col-12 col-md-6 col-lg-4 p-5'>
                <div className='icons'>
                <span className='icon px-4 py-3 rounded-circle mb-4'><FaChartPie className='mb-3' /></span>
                </div>
                <h3>Stretagic Planning</h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
               </Col>
               <Col className='col-12 col-md-6 col-lg-4 p-5'>
                <div className='icons'>
                <span className='icon px-4 py-3 rounded-circle mb-4'><FaChartLine className='mb-3' /></span>
                </div>
                <h3>Market Analysis</h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
               </Col>
               <Col className='col-12 col-md-6 col-lg-4 p-5'>
                <div className='icons'>
                <span className='icon px-4 py-3 rounded-circle mb-4'><FaChartArea className='mb-3' /></span>
                </div>
                <h3>Financial Analaysis</h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
               </Col>
               <Col className='col-12 col-md-6 col-lg-4 p-5'>
                <div className='icons'>
                <span className='icon px-4 py-3 rounded-circle mb-4'><FaBalanceScale className='mb-3' /></span>
                </div>
                <h3>legal Advisory</h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
               </Col>
               <Col className='col-12 col-md-6 col-lg-4 p-5'>
                <div className='icons'>
                <span className='icon px-4 py-3 rounded-circle mb-4'><FaHouseDamage className='mb-3' /></span>
                </div>
                <h3>Tax & Insurance</h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
               </Col>
            </Row>
        </Container>
    );
}
export default Third;