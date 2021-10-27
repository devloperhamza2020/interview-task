import logo from './logo.svg';
import './App.css';
import { Button, CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelopeOpenText, FaPhoneAlt, FaAddressBook, FaChalkboardTeacher, FaClipboardList, FaAward, FaDollarSign, FaBell, FaDotCircle, FaRegCircle, FaRegPlusSquare } from "react-icons/fa";





// This is style
const interviewBoard = {
  width: '60%',
  height: '620px',
  margin: '1% 0% 0% 20%'

}

function App() {
  return (
    <div className="interview-box shadow-lg p-3 mb-5 bg-body rounded" style={interviewBoard}>
      {/* Header Part start from here */}
      <header class="hd container">
        <div class="row  d-flex justify-content-between hdr">
          <div class="col-md-10">
            <h4><strong>Create New job</strong></h4>
          </div>
          <div class="col-md-2 close-btn">
            <CloseButton />
          </div>
        </div>
        <div>
          <ul class="row container">
            <div class="col-md-3 bd green1">

              <li class="circle-icon"> <span><FaDotCircle /></span> Basic Information</li>
            </div>
            <div class="col-md-3 bd green2">

              <li class="circle-icon"> <span><FaDotCircle /></span> Job Summary</li>
            </div>
            <div class="col-md-3 bd orange">

              <li class="circle-icon"> <span><FaDotCircle /></span> Job Application Form</li>
            </div>
            <div class="col-md-3 bd text">

              <li class="circle-icon"> <span><FaRegCircle /> </span> Interview Pipeline</li>
            </div>
          </ul>
        </div>
      </header>
      {/* Header Part END here */}


      {/* Main Body Part start from here */}
      <main class="container">
        <div>
          <h5 class="text-muted preview">Job Application Form</h5>
          <p class="text-muted">Candidates are to apply with this information.</p>

          <div class="row p-icon text-muted">
            <div class="col-md-2 d-flex justify-content-center align-items-center b-radius">
              <FaUser />
              Name
            </div>
            <div class="col-md-2 d-flex justify-content-center align-items-center b-radius">
              <FaEnvelopeOpenText />
              Email
            </div>
            <div class="col-md-2 d-flex justify-content-center align-items-center b-radius">
              <FaPhoneAlt />
              Phone
            </div>
            <div class="col-md-2 d-flex justify-content-center align-items-center b-radius">
              <FaAddressBook />
              Address
            </div>
            <div class="col-md-2 d-flex justify-content-center align-items-center b-radius">
              <FaChalkboardTeacher />
              Education
            </div>
            <div class="col-md-2 d-flex justify-content-center align-items-center b-radius">
              <FaClipboardList />
              Resume
            </div>
            <div class="col-md-2 d-flex justify-content-center align-items-center b-radius">
              <FaAward />
              experience
            </div>
            <div class="col-md-3 d-flex justify-content-center align-items-center b-radius">
              <FaDollarSign />
              Expected salary
            </div>
            <div class="col-md-3 d-flex justify-content-center align-items-center b-radius">
              <FaBell />
              Notice period
            </div>
          </div>
        </div>
      </main>


      <div class="row container additional">
        <div class="col-md-12">
          <p class="text-muted">Additional Example...........................................................................................<button class="btn-success add-btn">+</button></p>
        </div>
      </div>
      {/* Main body Part END here */}



      {/* Footer Part start from here */}
      <footer class="container ftr">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-md-8">
            <h6 class="text-muted">CANCEL</h6>
          </div>
          <div class="col-md-4 d-flex justify-content-around">
            <Button variant="outline-secondary">PREV</Button>
            <Button variant="success">NEXT</Button>
          </div>
        </div>
      </footer>
      {/* Footer Part END here */}
    </div >
  );
}

export default App;
