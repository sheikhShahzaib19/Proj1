import React from 'react'

export default function Registration(props) {
    // console.log(props.listing);
    return (
        <div className="col-lg-3 mt-3 col-12 col-sm-6 col-md-3">
            <div className="card bg-transparent bronze">
                <div className="card-head">
                    <div className="d-flex text-white  justify-content-between">
                        <h6 className="ml-3 mt-1">{props.title}</h6>
                        <h5 className="remain"> 75 Remaining</h5>
                    </div>
                    <div className="bronze_bottom mt-1"></div>
                </div>

                <div className="card-body text-white mt-2">
                    <h1 className=" font-weight-bold text-center mb-0"><sup>$</sup>{props.price}</h1>
                    <p className="text-center">{props.statement}</p>
                    <div className="bronze_bottom mt-5">
                    </div>

                    <ul className="mt-3 list">
                        {props.listing.map((item,ind)=>{
                        return(
                           <li key={ind} className="mt-1">
                            <i className="fa fa-angle-right me-2" aria-hidden="true"></i>
                            <span font-weight-bold>{item}</span>
                           </li>
                        )
                        })  }
                        
                    </ul>
                    <button className="btn btn-outline-primary mt-4 btn4 text-white"> JOIN NOW !</button>

                </div>
            </div>
        </div>
    )
}
