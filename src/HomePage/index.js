import React from 'react'
import signature from '../signature.png'
import picture from '../picture.png'
import email from '../email.svg'
import linkedin from '../linkedin.svg'
import './homepage.css'
const HomePage=()=>{

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <figure className='signature'>
                    <img src={signature}/>
                    </figure>
                  
                </div>
                <div className='col-6' style={{textAlign:'right'}}>
                   <button><a href="mailto:imthenitya@gmail.com">Get in touch</a></button>
                </div>
                <hr/>
            </div>
            <div className='row'>
                <div className='col-6'>
                <p className='hello'>Hello,</p>
                </div>
                <div className='col-6'>
                    <figure>
                    <img className='picture' src={picture}/>
                    </figure>
                </div>
                <p className="description">I'm Nityanand, a MERN Stack Developer specialising in React JS, Next Js, Redux, Angular 2+,
                     Node JS, MongoDB, Express JS, HTML/CSS, Bootstrap 
                    and other open source technologies with leadership skills and proven track record of contribution.
                 Have been involved in all phases of software development life cycle - requirement analysis, design, development, testing and deployment.
                 Build many web applications from scratch having Live users 200k+ </p>
            </div>
            <hr/>
            <div className='row'>
                <div className='col-6'>
                    <div style={{textAlign:'left'}}>
                   {/* <a style={{textDecoration:'none', color:'#332e2e'}} href="https://www.linkedin.com/in/nityanand-chaudhary"> <img src={linkedin}/></a> */}
                    <img src={email}/><a href="mailto:imthenitya@gmail.com">imthenitya@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage