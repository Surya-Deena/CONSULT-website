import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';    
import { FaPercent,FaCubes,FaHeadset,FaUserTie,FaAward,FaSmileBeam,} from "react-icons/fa";
function Fourth(){
    return(
        <Container fluid className='mt-3'>
            <h1 className='text-center display-5 fw-bold mb-5'>Why Choose Us!!!</h1>
        <Row className='mx-3 mt-5 pt-4 '>
            <Col className='col-12 col-lg-4 justify-content-start'>
                <div className='mx-2 four mb-4'>
                    <Button className='px-3 py-2 rounded-circle mb-2'><FaCubes className='h2 pt-1' /></Button>
                    <h3 className='mb-1'>Best In Industry</h3>
                    <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                </div>
                <div className='mx-2 four mb-4'>
                    <Button className='px-3 py-2 rounded-circle mb-2'><FaPercent className='h2 pt-1' /></Button>
                    <h3 className='mb-1'>Best In Industry</h3>
                    <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                </div>
                <div className='mx-2 four'>
                    <Button className='px-3 py-2 rounded-circle mb-2'><FaAward className='h2 pt-1' /></Button>
                    <h3 className='mb-1'>Best In Industry</h3>
                    <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                </div>
            </Col>
            <Col className='col-12 col-lg-4'>
            <div  className='mx-3 text-center cards '>
            <Card>
              <Card.Img variant="top" src="../imgs/feature.jpg"/>
              <Card.Body className='cards text-white'>
               <Card.Text>
               Clita nonumy sanctus nonumy et clita tempor, 
               et sea amet ut et sadipscing rebum amet takimata amet,
                sed accusam eos eos dolores dolore et. Et ea ea dolor rebum invidunt clita eos.
                 Sea accusam stet stet ipsum,sit ipsum et ipsum kasd
                 </Card.Text>
                 <Button className='bg-white text-dark fw-bold h2'>Learn More</Button>
                </Card.Body>
             </Card>
            </div>
            </Col>
            <Col className='col-12 col-lg-4'>
            <div className='mx-2 four mb-4'>
                    <Button className='px-3 py-2 rounded-circle mb-2'><FaSmileBeam className='h2 pt-1' /></Button>
                    <h3 className='mb-1'>Best In Industry</h3>
                    <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                </div>
                <div className='mx-2 four mb-4'>
                    <Button className='px-3 py-2 rounded-circle mb-2'><FaUserTie className='h2 pt-1' /></Button>
                    <h3 className='mb-1'>Best In Industry</h3>
                    <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                </div>
                <div className='mx-2 four'>
                    <Button className='px-3 py-2 rounded-circle mb-2'><FaHeadset className='h2 pt-1' /></Button>
                    <h3 className='mb-1'>Best In Industry</h3>
                    <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                </div>
            </Col>
        </Row>
    </Container>
    );
}
export default Fourth;