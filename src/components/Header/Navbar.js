import React from 'react'
import logo from '../../images/banner-logo(1).svg'

export default function Navbar() {
  return (
    <>
    <header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        
        <div className="container">
        <a className="navbar-brand" href="#">
         <img src={logo} alt="not show"/>
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <ul className="navbar-nav ml-auto menubar">
          
          <li className="nav-item dropdown">
            <a className="nav-link" href="#">Home</a>
            <ul className="dropdown-content">
              <li><a href="#">search</a> </li>
              <li><a href="#">good</a> </li>
              <li><a href="#">things</a> </li>
              <li><a href="#">important</a></li>
              <li><a href="#">statement</a></li>
            </ul>
          </li>
          <li className="nav-item ">
            <a className="nav-link " href="#">Schedule</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">Event</a>
          </li>
          <li className="nav-item ">
            <a href="#" className="nav-link">Contact</a>
          </li>
          <li className="nav-item ">
            <a href="#" className="nav-link">Element</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-outline-light btn1 font-weight-bold">Register Now</button>   
        </li>
      </ul>
      </div>
    </div>
      </nav>
    </header>

<section class="image">
<div class="container text-center text-white ">
    <div class="row">
    <div class="col-lg-12 col-sm-12">
   <h2> <i> "World's fastest-growing tech conference" – Inc.</i></h2> 
   <h1 class="heading"> FREELANCER CONFERENCE, 2019</h1>
   <h4 class="mt-3 pb-0 "> Vanowen St, Canoga Park, California, USA</h4>
   <p class="pb-0"> 25th - 27th April, 2019</p>
  <a href="#"> <small class="btn text-white button1 pt-2">Get Your Pass Now!</small>
  </a></div>
</div>
</div>
</section>
</>
  )
}
