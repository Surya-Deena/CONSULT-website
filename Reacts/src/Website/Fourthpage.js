import "./Styles/fourth.css"
import Card from 'react-bootstrap/Card';

function Fourthpage() {
  return (
    <div className='container my-5 px-5 '>
         <div className='container py-5 my-5 px-5'>
         <Card style={{ width: '100%' }} className="fcard">
      <Card.Body>
        <div className="row p-5 ">
            <div className="col-3 p-4 grn text-white ">
                <h1 className="ms-5 display-4 fw-bold">96%</h1>
                <li>CLIENT RETENTION</li>
            </div>
            <div className="col-3 p-4 text-white">
                <h1 className="ms-5 display-4 fw-bold">15+</h1>
                <li>YEARS OF EXPERIENCE</li>
            </div>
            <div className="col-3 p-4 text-white">
                <h1 className="ms-5 display-4 fw-bold">6+</h1>
                <li>PROFESSIONALS</li>
            </div>
            <div className="col-3 p-4 text-white">
                <h1 className="ms-5 display-4 fw-bold">70+</h1>
                <li>SATISFIED CLIENTS</li>
            </div>
        </div>
      </Card.Body>
    </Card>
         </div>
    </div>
  )
}

export default Fourthpage