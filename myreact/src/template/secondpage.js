import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

function Secondpage() {
  return (
    <Container fluid>
      <Row>
        <Col className='col-12 col-md-6'>
           <div className='m-md-5 m-0 '>
           <h1 className='mt-5 pt-5'>Welcome To <span>CONSULT</span></h1>
           <h5 className='mt-3'>
           Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore
           </h5>
           <p className='mt-3'>
           Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet. Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus sanctus invidunt erat ipsum eirmod.
           </p>
           <Button className='rounded-pill p-3 inf'>Get a Quote</Button>
           </div>
        </Col>
        <Col className='col-12 col-md-6 details mt-md-0 mt-3 pt-md-3 pt-0'>
            <div className='m-5'>
                <Row className='mt-5'>
                    <Col className='col-12 col-sm-3 col-lg-2'>
                    <Button className='rounded-pill px-3 py-2 pb-3 pe-3'><FaUserTie/></Button></Col>
                    <Col className='col-12 col-sm-9 col-lg-10'>
                        <h3>Business Planning</h3>
                        <h6 className='text-white'>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet 
                            lorem sit clita duo</h6>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='col-12 col-sm-3 col-lg-2'>
                    <Button className='rounded-pill px-3 py-2 pb-3 pe-3'><FaChartLine/></Button></Col>
                    <Col className='col-12 col-sm-9 col-lg-10'>
                        <h3>Financial Analaysis</h3>
                        <h6 className='text-white'>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet 
                            lorem sit clita duo</h6>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='col-12 col-sm-3 col-lg-2'>
                    <Button className='rounded-pill px-3 py-2 pb-3 pe-3'><FaBalanceScale/></Button></Col>
                    <Col className='col-12 col-sm-9 col-lg-10'>
                        <h3>legal Advisory</h3>
                        <h6 className='text-white'>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet 
                            lorem sit clita duo</h6>
                    </Col>
                </Row>
                
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Secondpage;