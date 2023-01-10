import './App.css';
import React, { useState } from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function App() {
  let [experience, setExperience] = useState(true);
  let [education, setEducation] = useState(false)

  var sidemenu=document.getElementById('side-menu')

  function closeMenu(){
    sidemenu.style.left="-60%"
    console.log(sidemenu)
  }
  function openMenu(){
    sidemenu.style.left="60%"
  }
  return <>
    <div className='container-fluid' id='row-width'>
      <div className='row' id='row-width'>
        <section className='home-page d-flex flex-column' id='row-width'>
          <div className='home-header'>
            <nav className='d-flex align-items-center justify-content-between'>
              <h1><span>M</span>ounika</h1>
              <ul id='side-menu'>
                <li><a href="">Home</a></li>
                <li><a href="about-page">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
              <CloseIcon id='link-icons' onClick={()=>{closeMenu()}}/>
              </ul>
              <MenuIcon id='link-icons' onClick={()=>{openMenu()}}/>
            </nav>
          </div>
          <div className='home-content'>
            <h2>Mounika , Yallappa Reddy</h2>
            <p>Aspiring Full Stack Developer</p>
            <button>Get In Touch</button>
          </div>
        </section>
        <section className='about-page d-flex flex-column' id='about-page'>
          <div className='about-header'>
            <h1>About Me</h1>
          </div>
          <div className='about-content d-flex'>
            <div className='about-content-image'>
            <img src='https://res.cloudinary.com/dbg6wcwdb/image/upload/v1673370251/myImage_om4deu.jpg' />
            </div>
            <div className='about-content-text'>
              <p>I am an aspiring full stack developer<br />
                I am passionate to create high performance, rich interactive and responsive websites
                
              </p>
              <nav>
                <ul>
                  <li id='about-links' onClick={() => { setEducation(false); setExperience(true) }}>Experience</li>
                  <li id='about-links' onClick={() => { setEducation(true); setExperience(false) }}>Education</li>
                </ul>
                {
                  experience ?
                    <div className='experience'>
                      <h6>2021-current</h6>
                      <p>Senior Software Associate at NTT DATA</p>

                      <h6>2022(Feb-Current)</h6>
                      <p>Enrolled for Full Stack Developer Course at GUVI</p>
                    </div> : <></>
                }
                {
                  education ?
                    <div className='experience'>
                      <h6>2022(Feb-Current)</h6>
                      <p>Enrolled for Full Stack Developer Course at GUVI</p>
                      <h6>2017-2021</h6>
                      <p>ECE at Acharya Institue of Technology</p>
                      <h6>2015-2017</h6>
                      <p>PU at Narayana College</p>
                      <h6>2014</h6>
                      <p>10th at National English Medium School</p>
                    </div> : <></>
                }

              </nav>

            </div>
          </div>
        </section>
        <section className='skills-page d-flex flex-column'>
          <h1>My Skills</h1>
          <div className='skills-content d-flex justify-content-center '>
            <div className='backend-developer d-flex align-items-center flex-column'>
              <img src='https://www.shutterstock.com/image-vector/frontend-concept-icon-software-development-260nw-1556812094.jpg' />
              <h2>Back-end Developer</h2>
              <p>I like to code from scratch and create rich UI interface</p>
              <h3>Languages I speak</h3>
              <ul>
                <li>Node Js</li>
                <li>MongoDB</li>
                <li>MYSQL</li>
              </ul>
            </div>
            <div className='frontend-developer d-flex align-items-center flex-column'>
              <img src="https://www.shutterstock.com/image-vector/frontend-concept-icon-software-development-260nw-1556812094.jpg" />
              <h2>Front-end Developer</h2>
              <p>I like to code from scratch and create rich UI interface</p>
              <h3>Languages I speak</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Angular</li>
                <li>Bootstrap</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='projects-page'>
          <h1>My Projects</h1>
          <div className='projects-content d-flex justify-content-center'>
            <div className='project-1'>
              <img src='https://www.shutterstock.com/image-vector/frontend-concept-icon-software-development-260nw-1556812094.jpg'></img>
              <div className='image-content d-flex align-items-center justify-content-center flex-column'>
                <h3>Asset Management Tool</h3>
               <a href="">Click here</a>
              </div>
            </div>
            <div className='project-1'>
              <img src='https://www.shutterstock.com/image-vector/frontend-concept-icon-software-development-260nw-1556812094.jpg'></img>
              <div className='image-content d-flex align-items-center justify-content-center flex-column'>
                <h3>Social Media</h3>
                <a href="">Click here</a>
              </div>
            </div>
          </div>
        </section>
        <section className='contact-page'>
          <h1>Contact Me</h1>
          <div className='contact-content d-flex'>
            <div className='left-content'>
              <h2>Get in Touch</h2>
              <div className='d-flex detail'>
                <div><Person2Icon className='icon' /></div>
                <div>
                  <p>Mounika</p>
                </div>
              </div>
              <div className='d-flex'>
                <div><LocationOnIcon className='icon' /></div>
                <div>
                  <p>Anantapur,AndhraPradesh-515871</p>
                </div>
              </div>
              <div className='d-flex'>
                <div><EmailIcon className='icon' /></div>
                <div>
                  <p>mounika03062000@gmail.com</p>
                </div>
              </div>
              <button>Download CV</button>
            </div>
            <div className='right-content'>
              <h2>Message Me</h2>
              <div className='form'>
                <Form>
                  <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Enter Subject" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Enter Message</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                      <Form.Control as="textarea" placeholder="ENter" style={{ height: '100px' }}/>
                    </FloatingLabel>
                  </Form.Group>
                  <Button id='send-btn'>Send</Button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
}

export default App;
