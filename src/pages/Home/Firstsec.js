import React from 'react'

export default function Firstsec(props) {
    return (
        <>      
                    <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-between p-4">
                        <h3 class="text-primary">{props.title}</h3>
                        <p class="mt-2"> {props.text}
                        </p>
                        <button className='btn btn-primary mt-4 '>Read More</button>
                        <img src={props.imgsrc} alt="" class="mt-5 pt-4 img-fluid rounded d-flex flex-column justify-content-between"/>           
                    </div>
              
        </>
    )
}
