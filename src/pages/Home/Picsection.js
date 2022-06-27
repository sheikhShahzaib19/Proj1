import React from 'react'

export default function Picsection(props) {
  // console.log(props.imgsrc.pic2)
  return (
    <div className="col-lg-2 col-6 col-md-3 mt-4">
      <div className="border1 rounded arrange p-2 d-flex align-items-center">
        <img src={props.imgsrc} className='img-fluid' alt="not" />
      </div>
    </div>
  )
}
