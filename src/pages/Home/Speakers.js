import React from 'react'

export default function Speakers(props) {
  return (
    <>
    <div className="col-lg-6 mt-5 col-md-6">
                <div className="row">
                  <div className="col-lg-5 col-5">
                    <img src={props.imgsrc} className="rounded img-fluid"  alt="" />
                  </div>
                 <div className="col-lg-7 col-7">
                  <h6 className="text-primary s_h mb-0">{props.title}</h6>
                  <p className="mb-0" style={{fontSize: '11px'}}> <small>{props.small}</small> </p>
                  {/* <i className="fa-solid fa-bars mr-2" style={{color: 'red'}}></i> */}
                  {/* <i className="fab fa-twitter mr-2 clr"></i> */}
                  {/* <i className="fab fa-linkedin-in mr-2 clr"></i> 
                  <i className="fab fa-google-plus-g clr"></i> */}
                   
                 <p className="para1"> {props.para}   
                 </p>
                 </div>
              </div>
              </div>

    </>
  )
}
